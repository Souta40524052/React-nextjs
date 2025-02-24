import mongoose from "mongoose"

const connectDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://souta40524052:NZmzDDZyPoPvdf7u@cluster0.iqzvf.mongodb.net/nextAppDataBase?retryWrites=true&w=majority&appName=Cluster0")
        console.log("Success: Connected to MongoDB")
    }catch{
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

export default connectDB