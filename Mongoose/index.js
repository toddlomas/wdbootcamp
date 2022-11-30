const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/movieApp");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/movieApp");
  console.log("hello");
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String,
});

const Movie = mongoose.model("Movie", movieSchema);
// const avatar = new Movie({
//   title: "Avatar",
//   year: 2012,
//   score: 9.2,
//   rating: "R",
// });

// Movie.insertMany([
//   {
//     title: "Amelie",
//     year: 2001,
//     score: 8.3,
//     rating: "R",
//   },
//   {
//     title: "Iron Man",
//     year: 2015,
//     score: 8.0,
//     rating: "R",
//   },
//   {
//     title: "Shrek",
//     year: 2001,
//     score: 9.2,
//     rating: "R",
//   },
// ]).then((data) => {
//   console.log("it worked!");
//   console.log(data);
// });

await MyModel.find({ name: "Shrek", score: { $gte: 9.2 } }).exec();
