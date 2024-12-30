import mongoose from "mongoose";
export const connectDb = async() => {
    try {
        const dbConnection = await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected");
    } catch (error) {
        if(mongoose.connection.readyState !== 0){
            await mongoose.connection.close();
            console.log("mongodb connection closed");
        } 
        process.exit(1);
    }
}

process.on('SIGINT', async() => {
    console.log("Application is terminating");
    if(mongoose.connection.readyState !== 0){
        await mongoose.connection.close();
        console.log("mongodb connection Closed");
    }
    process.exit(0);
})