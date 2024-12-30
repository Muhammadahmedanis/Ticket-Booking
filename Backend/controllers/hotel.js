import Hotel from '../models/Hotel.js';

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
        const hotels = await Hotel.find();
        res.status(200).send({status: 200, hotels});
        
    } catch (error) {
        next(error)
    }
}