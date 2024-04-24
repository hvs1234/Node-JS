const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

module.exports = mongoose.model("products", productSchema);
