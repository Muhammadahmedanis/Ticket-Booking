import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createError } from "../utils/error.js";
import 'dotenv/config'

export const signUp = async(req, res, next) => {
    let { userName, email, password } = req?.body
    if(!userName || !email || !password) return next(createError(403, "required parameter missing, {userName: abc, email: abc@gmail.com, password: 12bca}"));
    email = email.toLowerCase();
try {
    let isUserExist = await User.findOne({ email });
    if (!isUserExist) {
            if(password.length >= 8){
                const hashPassword = bcrypt.hashSync(password, 10);
                const payload = {...req.body, password: hashPassword};
                const newUser = User(payload);
                await newUser.save();
                res.status(201).send({status: 201, message: "Signup successfully", newUser})
            }else{
                next(createError(400, "Password length must be greater than 8"))
            }
        }else{
            next(createError(400, "User already exist with this email!"));
        }
    } catch (error) {
        next(error)
    }
}


export const signIn = async(req, res, next) => {
    let { email, password } = req?.body;
    if(!email || !password) return next(createError(403, "required parameter missing, {email: abc@gmail.com, password: 12bca}"));
    email = email.toLowerCase();
    try {
        let isUserExist = await User.findOne({ email });
        if(isUserExist){
            const checkPassword = bcrypt.compareSync(password, isUserExist.password);
            if(checkPassword){
                const token = jwt.sign({
                    id: isUserExist._id, 
                    isAdmin: isUserExist.isAdmin
                },process.env.JWT_SECRET_KEY,{
                    expiresIn: "24h"
                })
                const{ password, isAdmin, ...otherDetails } = isUserExist._doc
                res
                .cookie("access_token", token, { httpOnly: true, secure: true,})
                .status(201)
                .send({status: 201, message: "Signin successfully", details:{...otherDetails}, isAdmin});
            }else{
                next(createError(404, "Invalid credentials"));
            }
        }else{
            next(createError(404, "Invalid credentials"));
        }
    } catch (error) {
        next(error)
    }
}