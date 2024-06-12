const mongoose= require("mongoose");

const URL = process.env.MONGODB_URI;
const connectDB = async()=>{
    try{
    await mongoose.connect(URL);
    console.log('Connectionsss sucessful to db');
    }
    catch (error){
        console.log("connections is failed");
        process.exit(0);

    };
};

module.exports= connectDB;