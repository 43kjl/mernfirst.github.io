const User= require("../models/user-model");
const bcrypt= require("bcryptjs");

const home  =async(req,res) =>{
    try{
            res.status(200).send('home page');
    }
    catch (error){
     console.log(error);
    };

};

const register  =async(req,res) =>{
    try{
        console.log(req.body);
        const {username,email,phone,password}= req.body;

        const userExist= await User.findOne({email});

        if(userExist){
           return req.status(400).json({ msg:"email already exists"});
        }

      const userCreated=  await User.create({username,email,phone,password});


            res.status(201).json({ 
                msg:"registration sucessful" , 
                token: await userCreated.generateToken() ,
                userId:userCreated._id.toString(),

            });
    }
    catch (error){
     console.log(error);
    };

};

const login  =async(req,res) =>{
    try{
        const {email,password}= req.body;

        const userExist= await User.findOne({email});

        if(!userExist){
           return req.status(400).json({ msg:"invalid credential"});
        }

     

        const user=await userExist.comparePassword(password);
        if (user){
            res.status(200).json({ 
                msg:"Login sucessfull" , 
                token: await userExist.generateToken() ,
                userId:userExist._id.toString(),

            });
        }
        else{
            res.status(401).json({message:"invalid email or password"});
        }
    }
    catch (error){
     res.status(500).json("internal server error");
    };

};

module.exports={home,register,login};