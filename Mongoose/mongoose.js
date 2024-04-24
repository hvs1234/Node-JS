const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/ecomm");
const productSchema = new mongoose.Schema({
  name: String,
  brand: String,
  price: Number,
  category: String,
});

const saveDB = async () => {
  const productModel = mongoose.model("products", productSchema);
  const data = new productModel({
    name: "m8",
    brand: "Apple",
    price: 55000,
    category: "Mobile IOS",
  });
  let result = await data.save();
  console.log(result);
};

// saveDB();

const updateDB = async () => {
  const product = mongoose.model("products", productSchema);
  let data = await product.updateMany(
    { name: "m8" },
    { $set: { name: "m8 ultra", price: 56000 } }
  );
  console.log(data);
};

// updateDB();

const deleteDB = async () => {
  const product = mongoose.model("products", productSchema);
  let data = await product.deleteMany(
    {
        name:"oppo A5s",
        name:"realme C3"
    }
  );
  console.log(data);
};

// deleteDB();
