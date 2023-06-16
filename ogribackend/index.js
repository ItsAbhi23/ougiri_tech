const express = require('express');
const bodyParser = require('body-parser');
const stripe = require('stripe')("sk_test_51NAZrFSI2CjqhJl3URiQq3DnmPyjclF74f1LWSn0gstaAyPHN11pq3oV2SJwPOmbgL6omoYkfNfjVe2FrS2Ks164008P0grK4X");
const uuid = require('uuid').v4;
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/checkout', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Payment received successfully' });
});

app.listen(PORT, () => {
  console.log("app is listening");
});
