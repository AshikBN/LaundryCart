const mongoose = require("mongoose");

const ordersModel = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  totalQuantity: Number,
  totalPrice: Number,
  storeLocation: String,
  city: String,
  Address: String,
  Shirts: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Tshirts: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Trousers: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Jeans: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Boxers: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
  Joggers: {
    name: String,
    washtype: String,
    quantity: Number,
    totalPrice: Number,
  },
});

const Order = mongoose.model("Order", ordersModel);

module.exports = Order;
