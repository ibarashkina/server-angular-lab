const express = require('express');
const app = express();
const port = 8890;
const cors = require('cors');
const carts = require("./routes/cart-items");


app.use(express.json());
app.use(cors());
app.use('/', carts);


app.listen(port, () => console.log(`app is up and running on port: ${port}`));

