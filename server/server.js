require("dotenv").config();
const express= require('express');
const cors = require('cors');
const app= express();

const authRoute = require('./router/auth-router');
const contactRoute= require('./router/contact-router');
const serviceRoute=require('./router/service-router.js');
const adminRoute = require('./router/admin-router.js');

const PORT =5000;

const connectDB= require("./utils/db.js");

app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/data",serviceRoute);
app.use("/api/admin",adminRoute);

connectDB().then(() =>{
app.listen(PORT,()=>{
    console.log(`server is running at port:${PORT}`);
});
});