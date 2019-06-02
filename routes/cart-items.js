const express = require('express');
const cartsData = require('../cartsData');
const carts = express.Router();


carts.get("/", (req, res) => {
    console.log("Get is working");
    // res.json({data: req.body});
    res.json({cartsData});
});

// creates a new item
carts.post('/', (req,res) => {
    console.log(req.body.name);
    res.send(cartsData);
});

// updates a specific item based on id

carts.put('/:id', (req,res) => {
    console.log(req.params.id);
    res.send("Put is working.");;
});

// deletes a specific item based on id
carts.delete('/:id', (req,res) => {
    console.log(req.params.id);
    res.send(res.body);
});

module.exports = carts;