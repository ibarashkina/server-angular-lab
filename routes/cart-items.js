const express = require('express');
const cartsData = require('../cartsData');
const carts = express.Router();


carts.get("/", (req, res) => {
    console.log(req.body);
    // res.json({data: req.body});
    res.json({data:cartsData});
});

// creates a new item
carts.post('/', (req,res) => {
    const newItem = req.body.name.toUpperCase();
    console.log(req.body); 
    res.json({data:cartsData});
});

// updates a specific item based on id

carts.put('/:id', (req,res) => {
    console.log(req.param.id);
    res.json({ data:newItem });
});

// deletes a specific item based on id
carts.delete('/:id', (req,res) => {
    console.log(req.params.id);
    res.send(res.body);
});

module.exports = carts;