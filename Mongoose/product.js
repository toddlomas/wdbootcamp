const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/shopApp");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/shopApp");
  console.log("hello");
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  onSale: {
    type: Boolean,
    default: false,
  },
  categories: [String],
});

const Product = mongoose.model("Product", productSchema);

const bike = new Product({
  name: "Bike Helmet",
  price: 20,
  categories: ["Cycling", "Safety"],
});

bike
  .save()
  .then((data) => {
    console.log("it worked");
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
