const mongoose = require("mongoose");
const db = require("../models");
// mongoose.Promise = global.Promise;

// // This file empties the Subscription collection and inserts the Subscription below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/isubscribe",
  {
   
  }
);

const subscriptionSeed = [
  {
    subscriptionName: "Netflix",
    description: "Netflix is the world's leading internet entertainment service with 125 million memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.",
    category: "Video Streaming Service", //CHANGE THIS TO ID?
    iconURL:"https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg", //CHANGE THIS TO SOURCE?
    url: "https://www.netflix.com/",
    accountURL: "https://www.netflix.com/login",
    price: [
        {planName: "Basic", price: 7.99, frequency: "month", default: true},
        {planName: "Standard", price: 10.99, frequency: "month", default: false},
        {planName: "Premium", price: 13.99, frequency: "month", default: false}
    ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Amazon Prime Video",
    description: "Amazon Video is an Internet video on demand service that is developed, owned, and operated by Amazon.com. It offers television shows and films for rent or purchase and Prime Video, a selection of Amazon Studios original content and licensed acquisitions included in the Amazon's Prime subscription. In the United States, access to Prime Video is also available through a video-only membership, which does not require a full Prime subscription.",
    category: "Video Streaming Service", //CHANGE THIS TO ID?
    iconURL:"https://www.bestappletv.com/wp-content/uploads/2017/12/amazon_prime_video_logo-620x350.jpg", //CHANGE THIS TO SOURCE?
    url: "https://www.amazon.com/gp/video/getstarted",
    accountURL: "https://www.amazon.com/your-account",
    price: [
        {planName: "Prime Membership", price: 12.99, frequency: "month", default: true},
    ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Le Tote",
    description: "Le Tote is a fashion subscription service that lets you rent clothing and accessories for a flat monthly membership fee. Just wear, return & repeat! For a monthly price, you can choose a “tote” of three clothing pieces and two accessories from the company’s inventory. You can try the items on, wear them to work or when you’re hanging out with friends, and once you’re done, just ship the stuff you don’t want back and purchase the pieces you do want. You get unlimited “totes” every month, so you don’t have to wait to try out more stuff. Shipping is free, and there's no commitment, so you can cancel at any time.",
    category: "Fashion",
    iconURL:"https://www.itespresso.es/wp-content/uploads/2015/02/le_tote.png",
    url: "https://letote.com/",
    accountURL: "https://www.letote.com/profile",
    price: [
        {planName: "3 clothing items + 2 accessories", price: 59, frequency: "month", default: true},
        {planName: "5 clothing items + 3 accessories", price: 79, frequency: "month", default: false},
        {planName: "4 clothing", price: 69, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  }
];


db.Subscription
  .remove({})
  .then(() => db.Subscription.collection.insertMany(subscriptionSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
