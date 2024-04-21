const express=require("express");
const mongoose=require('mongoose');
const cors=require('cors');
// const dotenv=require('dotenv');
const bodyParser = require('body-parser');
const userRoute = require("./routes/userRoute.js");


const app=express();

app.use(bodyParser.json());
app.use(cors());
// dotenv.config();


const PORT=3000;
const URL="mongodb+srv://Yatin:a1b2c3@crudmern.5e5z5vh.mongodb.net/crudMern?retryWrites=true&w=majority&appName=crudMern";

mongoose.connect(URL).then(()=>{
    try {
        
        app.listen(PORT,()=>{
                console.log(`Server running on ${PORT}`);
        })
        console.log("database connected...");
    } catch (error) {
        console.log(error);
    } 
})


app.use('/api',userRoute)
     
 
 