const express=require('express');
const { register } = require('../controller/RegisterUser');
const route=express.Router();


route.post('/register',register)

route.post('/login',register)

module.exports=route;