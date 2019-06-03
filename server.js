const express = require('express');
const app = express();
const port = 8890;
const cors = require('cors');
const cartItems = require("./routes/cart-items");


// app.use(express.json());
app.use(cors());
app.use('/cart-items', cartItems);


app.listen(port, () => console.log(`app is up and running on port: ${port}`));



// test it node server in the terminal