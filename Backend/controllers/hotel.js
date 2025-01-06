import Hotel from '../models/Hotel.js';
import Room from '../models/Room.js';

export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const saveHotel = await newHotel.save();
        res.status(200).send({status: 200, saveHotel});
        
    } catch (error) {
        next(error)
    }
}


export const updateHotel = async (req, res, next) => {
    try {
        const updHotel = await Hotel.findByIdAndUpdate( req.params.id, { $set : req.body}, { new: true} );
        res.status(200).send({status: 200, updHotel});
        
    } catch (error) {
        next(error)
    }
}


export const deleteHotel = async (req, res, next) => {
    try {
        await Hotel.findByIdAndDelete( req.params.id);
        res.status(200).send({status: 200, message: "deleted successfully"});
    } catch (error) {
        next(error)
    }
}


export const getHotel = async (req, res, next) => {
    try {
        const hotel = await Hotel.findById( req.params.id );
        res.status(200).send({status: 200, hotel});
        
    } catch (error) {
        next(error)
    }
}


export const getAllHotel = async (req, res, next) => {
    try {
        const { min, max, limit, ...filters } = req.query;
        const hotels = await Hotel.find({...filters, cheapestPrice: { $gt: min || 1, $lt: max || 900 }}).limit(parseInt(limit)); 
        
        res.status(200).send({status: 200, hotels});
        
    } catch (error) {
        next(error)
    }
}


export const countByCity = async (req, res, next) => {
    const cities = req.query.cities.toLowerCase().split(",");
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({ city })
        }))
        res.status(200).send({status: 200, list});
        
    } catch (error) {
        next(error)
    }
}


export const countByType = async (req, res, next) => {
    try {
        const hotelCount = await Hotel.countDocuments({ type: "hotel"});
        const appartmentCount = await Hotel.countDocuments({ type: "appartment"});
        const resortCount = await Hotel.countDocuments({ type: "resort"});
        const villaCount = await Hotel.countDocuments({ type: "villas" });
        const cabinCount = await Hotel.countDocuments({ type: "cabin"});
        res.status(200).send([ 
            { type: "hotels", count: hotelCount},
            { type: "appartments", count: appartmentCount},
            { type: "resorts", count: resortCount},
            { type: "villas", count: villaCount},
            { type: "cabins", count: cabinCount}, 
        ])
    } catch (error) {
        next(error)
    }
}


export const getHotelRooms = async(req, res, next) => {
    try {
        const hotel = await Hotel.findById(req.params.id)
        const list = await Promise.all(hotel.rooms.map((room) => {
            return Room.findById(room)
        }))
        res.status(200).send({status: 200, list})
    } catch (error) {
        next(error)
    }
}