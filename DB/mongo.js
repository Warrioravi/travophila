import mongoose from "mongoose" 

 const connectMongoDB=()=>{
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("connected to the DB");
    }
    catch(error){
        console.error(error);
    }
}
export default connectMongoDB;