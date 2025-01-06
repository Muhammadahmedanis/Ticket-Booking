import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getAllHotel, getHotel, getHotelRooms, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const hotelsRouter = express.Router();

//CREATE
hotelsRouter.post("/", verifyAdmin, createHotel);

//UPDATE
hotelsRouter.put("/:id", verifyAdmin, updateHotel);

//DELETE
hotelsRouter.delete("/:id", verifyAdmin, deleteHotel);

//GET
hotelsRouter.get("/find/:id", getHotel);

//GETALL
hotelsRouter.get("/", getAllHotel);
hotelsRouter.get("/countByCity", countByCity);
hotelsRouter.get("/countByType", countByType);
hotelsRouter.get("/room/:id", getHotelRooms); // pass hotelid

export default hotelsRouter;