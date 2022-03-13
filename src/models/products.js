const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  value: {
    type: Number,
  },
  stock: {
    type: Number,
  },
  category: {
    type: [String],
  },
  brand: {
    type: String,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
