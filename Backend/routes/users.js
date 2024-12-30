import express from 'express';
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const usersRouter = express.Router();

// usersRouter.get("/checkauth", verifyToken, (req, res, next) => {
//     res.send("You are logged in")
// })

// usersRouter.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("You are logged in and can delete your account")
// })

// usersRouter.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("You are logged in and admin also")
// })


//UPDATE
usersRouter.put("/:id", verifyAdmin, updateUser);

//DELETE
usersRouter.delete("/:id", verifyUser, deleteUser);

//GET
usersRouter.get("/:id", verifyUser, getUser);

//GETALL
usersRouter.get("/", verifyAdmin, getAllUser);

export default usersRouter;