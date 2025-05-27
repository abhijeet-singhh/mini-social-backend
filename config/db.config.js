import mongoose from "mongoose";

const dbConnect = async (req, res) => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDB connected successfully`)
    } catch (error) {
        console.log(`Error connecting MongoDB: ${error}`)
    }
}

export default dbConnect