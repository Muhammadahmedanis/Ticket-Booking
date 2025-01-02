import Room from "../models/Room.js";
import { createError } from "../utils/error.js";
import Hotel from "../models/Hotel.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    const newRoom = new Room(req.body);

    try {
        const saveRoom = await newRoom.save();
        if(saveRoom){
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: saveRoom._id}})
        }
        res.status(200).send({status: 200, message: "Room created successfully", saveRoom});
    } catch (error) {
        next(error);
    }
}


export const updateRoom = async (req, res, next) => {
    try {
        const updRoom = await Room.findByIdAndUpdate( req.params.id, { $set : req.body}, { new: true} );
        res.status(200).send({status: 200, updRoom});
        
    } catch (error) {
        next(error)
    }
}


export const updateRoomAvailability = async (req, res, next) => {
    try {
        const availableRoom = await Room.updateOne({"roomNumbers._id" : req.params.id},{
            $push: {
                "roomNumbers.$.unavilableDates": req.body.dates
            },
        })
        res.status(200).send({status: 200, message: "Room status updated", availableRoom});
    } catch (error) {
        next(error)
    }
}


export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelid;
    try {
        await Room.findByIdAndDelete( req.params.id);
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: req.params.id}})
        } catch (error) {
            next(error)
        }
        res.status(200).send({status: 200, message: "room deleted successfully"});
    } catch (error) {
        next(error)
    }
}


export const getRoom = async (req, res, next) => {
    try {
        const room = await Room.findById( req.params.id );
        res.status(200).send({status: 200, room});
        
    } catch (error) {
        next(error)
    }
}


export const getAllRoom = async (req, res, next) => {
    try {
        const rooms = await Room.find();
        res.status(200).send({status: 200, rooms});
        
    } catch (error) {
        next(error)
    }
}