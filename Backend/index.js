import expres from 'express';
import dotenv from 'dotenv'
import { connectDb } from './db/index.js';
import authRouter from './routes/auth.js';
import usersRouter from './routes/users.js';
import hotelsRouter from './routes/hotels.js';
import roomsRouter from './routes/rooms.js';
import cookieParser from 'cookie-parser';

const app = expres();
dotenv.config();
connectDb();

app.use(cookieParser());
app.use(expres.json());
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", usersRouter);
app.use("/api/v1/hotels", hotelsRouter);
app.use("/api/v1/rooms", roomsRouter);

app.use((error, req, res, next) => {
    const errorStatus = error.status || 500;
    const errorMessage = error.message || "Something went wrong!";
    return res.status(errorStatus).send({success:false, status:errorStatus, message:errorMessage, stack:error.stack})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("server working");
})