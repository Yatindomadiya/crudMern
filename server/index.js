const express = require("express");
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoute = require("./routes/userRoute.js");
const regRoute = require("./routes/regRouter,.js");


const app = express();

app.use(bodyParser.json());
app.use(cors());


const PORT = 3000;
const URL = "mongodb+srv://Yatin:a1b2c3@crudmern.5e5z5vh.mongodb.net/crudMern?retryWrites=true&w=majority&appName=crudMern";

mongoose.connect(URL)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error("Error connecting to MongoDB:", err));


app.use('/api', userRoute)
app.use('', regRoute)



