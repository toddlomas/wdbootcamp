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

const seedDb = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 200; i++) {
    const random1000 = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 20) + 10;
    const camp = new Campground({
      author: "6387403e7cc9c3acd8a9cac7",
      location: `${cities[random1000].city}, ${cities[random1000].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      images: [
        {
          url: "https://res.cloudinary.com/dvisaqs6x/image/upload/v1669918254/YelpCamp/jspdpriizimylnl7qvup.jpg",
          filename: "YelpCamp/jspdpriizimylnl7qvup",
        },
        {
          url: "https://res.cloudinary.com/dvisaqs6x/image/upload/v1669918254/YelpCamp/zailrxalot95jdh6wr1b.jpg",
          filename: "YelpCamp/zailrxalot95jdh6wr1b",
        },
        {
          url: "https://res.cloudinary.com/dvisaqs6x/image/upload/v1669918255/YelpCamp/vwm3hxz23tjs3cc18jkf.jpg",
          filename: "YelpCamp/vwm3hxz23tjs3cc18jkf",
        },
        {
          url: "https://res.cloudinary.com/dvisaqs6x/image/upload/v1669918256/YelpCamp/j2rkx8croeo0fgecetfr.jpg",
          filename: "YelpCamp/j2rkx8croeo0fgecetfr",
        },
        {
          url: "https://res.cloudinary.com/dvisaqs6x/image/upload/v1669918257/YelpCamp/kudi6lih6ac56s6nr9hs.jpg",
          filename: "YelpCamp/kudi6lih6ac56s6nr9hs",
        },
        {
          url: "https://res.cloudinary.com/dvisaqs6x/image/upload/v1669918258/YelpCamp/hmnaubay56shdy4jcfad.jpg",
          filename: "YelpCamp/hmnaubay56shdy4jcfad",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam earum rem modi, vero dolores accusantium officiis, odit impedit ab quod sint ex velit aliquid asperiores ad sit natus nesciunt?",
      price,
      geometry: {
        type: "Point",
        coordinates: [
          cities[random1000].longitude,
          cities[random1000].latitude,
        ],
      },
    });
    await camp.save();
  }
};

seedDb().then(() => mongoose.connection.close());
