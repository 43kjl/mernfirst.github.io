const Service= require("../models/service-model");

const Services= async(req,res)=>{
    try{
        const response= await Service.find();
        if(!response){
            res.status(404).json({ msg :"no service found"});
            return;
        }
        res.status(420).json({msg: response});
    }
    catch(error){
console.log(`services: ${error}`);
    }
};
module.exports=Services;