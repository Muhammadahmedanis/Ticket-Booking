import express from 'express';
import { createRoom, deleteRoom, getAllRoom, getRoom, updateRoom, updateRoomAvailability } from '../controllers/room.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const roomsRouter = express.Router();

//CREATE
roomsRouter.post("/:hotelid", verifyAdmin, createRoom)

//UPDATE
roomsRouter.put("/:id", verifyAdmin, updateRoom)
roomsRouter.put("/availability/:id", updateRoomAvailability) //unavilableDates id


//DELETE
roomsRouter.delete("/:id/:hotelid", verifyAdmin, deleteRoom)

//GET
roomsRouter.get("/:id", getRoom)

//GETALL
roomsRouter.get("/", getAllRoom)

export default roomsRouter;