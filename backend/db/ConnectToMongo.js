
import mongoose from "mongoose";

const connectToMongo = async () => {
    try {
       await mongoose.connect(process.env.MONGO_URL,)
        console.log("Connected to MongoDB"); 
    } catch (error) {
        console.log("Error: ", error);
    }
}


export default connectToMongo;