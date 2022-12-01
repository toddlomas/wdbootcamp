const mongoose = require("mongoose");
const axios = require("axios");
const cities = require("./cities");
const { places, descriptors } = require("./seedhelpers");
const Campground = require("../models/campground");

mongoose.connect("mongodb://localhost:27017/yelp-camp");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

// // PLS FIX
// async function seedImg() {
//   try {
//     const resp = await axios.get("https://api.unsplash.com/photos/random", {
//       params: {
//         client_id: "GIiugj8HTHhAi2eMO8uLnOj1qjwQ85N_Cf1oMyPzgwk",
//         collections: 1114848,
//         count: 1,
//       },
//     });
//     console.log(resp.json());
//     return resp.json;
//   } catch (err) {
//     console.error(err);
//   }
// }

const seedDb = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 20; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "6387403e7cc9c3acd8a9cac7",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      image: "https://placeimg.com/640/480/nature",
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam earum rem modi, vero dolores accusantium officiis, odit impedit ab quod sint ex velit aliquid asperiores ad sit natus nesciunt?",
      price,
    });
    await camp.save();
  }
};

seedDb().then(() => mongoose.connection.close());
