const express = require('express');
// const cartsData = require('../cartsData');
const router = express.Router();

cartsData = [
    {
        id: 1,
        product:'Potatoes',
        price: 4.99,
        quantity:1 
    },
    {
        id: 2,
        product:'Tomatoes',
        price: 2.99,
        quantity: 2
    },
    {
        id: 3,
        product:'Oranges',
        price: 3.99,
        quantity: 1
    },
    {
        id: 4,
        product:'Onions',
        price: 1.99,
        quantity: 1
    },
    {
        id: 5,
        product:'Bananas',
        price: 4.59,
        quantity: 1
    }
]

router.get('/', (req, res) => {
    // console.log(req.body);
    res.json({data:cartsData});
});

// creates a new item
router.post('/', (req,res) => {
    // const upperName = req.body.name.toUpperCase();
    console.log(req.body); 
    // res.send({data: upperName});
});

// updates a specific item based on id

router.put('/:id', (req,res) => {
    console.log(req.params.id,req.body);
    // res.send(res.body);
});

// deletes a specific item based on id
router.delete('/:id', (req,res) => {
    console.log(req.params.id);
    // res.send(res.body);
});

module.exports = router;