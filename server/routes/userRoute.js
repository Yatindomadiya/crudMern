const express = require('express');
const { create, getAll, getOne, update, userdelete} = require('../controller/userControler');


const route = express.Router();



route.post('/create', create)

route.get('/getAll', getAll)

route.get('/getOne/:id', getOne)

route.put('/update/:id', update)

route.delete("/userdelete/:id",userdelete)


module.exports = route;

