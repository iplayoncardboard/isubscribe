const mongoose = require("mongoose");
const db = require("../models");
// mongoose.Promise = global.Promise;

// // This file empties the Subscription collection and inserts the Subscription below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/isubscribe",
  {
   
  }
);

const categorySeed=[
  {
    name:"Video Streaming Service",
    date: new Date(Date.now()),
    active:true
  },
  {
    name:"Music Streaming",
    date: new Date(Date.now()),
    active:true
  },
  {
    name:"Food",
    date: new Date(Date.now()),
    active:true
  },
  {
    name:"Subscription Box",
    date: new Date(Date.now()),
    active:true
  },
  {
    name:"Gaming",
    date: new Date(Date.now()),
    active:true
  },
  {
    name:"Movie Ticket",
    date: new Date(Date.now()),
    active:true
  }
  ,
  {
    name:"Pets",
    date: new Date(Date.now()),
    active:true
  }
  ,
  {
    name:"Fashion",
    date: new Date(Date.now()),
  }
]

const subscriptionSeed = [
  {
    subscriptionName: "Netflix",
    description: "Netflix is the world's leading internet entertainment service with 125 million memberships in over 190 countries enjoying TV series, documentaries and feature films across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.",
    category: "Video Streaming Service", 
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
    category: "Video Streaming Service", 
    iconURL:"https://www.bestappletv.com/wp-content/uploads/2017/12/amazon_prime_video_logo-620x350.jpg", 
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
  },
  {
    subscriptionName: "Hulu",
    description: "Hulu is a leading premium streaming service that offers instant access to live and on demand channels, original series and films, and a premium library of TV and movies to more than 20 million subscribers in the U.S. Since its launch in 2008, Hulu has consistently been at the forefront of entertainment and technology. Hulu is the only streaming service that offers both ad-supported and commercial-free current season shows from the largest U.S. broadcast networks; libraries of hit TV series and films; and acclaimed Hulu Originals including Emmy® and Golden Globe Award-winning series The Handmaid’s Tale, The Looming Tower, Future Man, Marvel’s Runaways, The Path, 11.22.63, and Golden Globe nominated comedy Casual, as well as upcoming series Castle Rock, The First, Catch-22 and Little Fires Everywhere. In 2017, Hulu added live news, entertainment and sports from 21st Century Fox, The Walt Disney Company, NBCUniversal, CBS Corporation, The CW, Turner Networks, A+E Networks and Scripps Networks Interactive to its offerings – making it the only TV service that brings together live, on-demand, originals, and library content all in one place, across living room and mobile devices.",
    category: "Video Streaming Service", 
    iconURL:"http://i.imgur.com/6G2NN0N.png",
    url: "https://www.hulu.com",
    accountURL: "https://www.hulu.com/start",
    price: [
        {planName: "Standard Hulu", price: 7.99, frequency: "month", default: true},
        {planName: "Hulu Plus Live TV", price: 39.99, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Vimeo",
    description: "Vimeo is a video-sharing website in which users can upload, share and view videos. It was the first video sharing site to support high-definition video. Vimeo was founded in November 2004 by Jake Lodwick and Zach Klein.",
    category: "Video Streaming Service", 
    iconURL:"https://pmcvariety.files.wordpress.com/2017/11/11017533_944973302209751_6800346229837901885_n.jpg",
    url: "https://vimeo.com/",
    accountURL: "https://join.vimeo.com/",
    price: [
        {planName: "Vimeo Taste", price: 7.00, frequency: "month", default: true},
        {planName: "Vimeo PRO", price: 20.00, frequency: "month", default: false},
        {planName: "Vimeo Buisiness", price: 50.00, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "HBONow",
    description: "With HBO NOW you can watch big premieres as they air—plus every episode of HBO's addictive series such as Game of Thrones, Westworld, Barry, and so much more. In addition to getting new movies every week, you also get news, comedy specials, smart talk shows, thought-provoking documentaries, and the special events everyone's talking about.",
    category: "Video Streaming Service", 
    iconURL:"https://order.hbonow.com/images/fb-large.png",
    url: "https://order.hbonow.com/",
    accountURL: "https://www.hbo.com/order",
    price: [
        {planName: "HBO Now", price: 14.00, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "RocksBox",
    description: "This is made for those who love a little bling but don’t have the money (or space) for a huge jewelry box full of designer baubles. First, you’ll create a profile on the site and add items to your jewelry wish list. Then you’ll get three hand-selected pieces in the mail based on your style. You can wear the pieces for as long as you like and send back when you don’t need them anymore. You can get an unlimited amount of boxes sent to you every month—the restriction is you can only borrow three pieces at a time, so you’ll have to return a piece before you can request a new one.",
    category: "Fashion", 
    iconURL:"http://www.bbgventures.com/wp-content/uploads/2016/06/logo_rocksbox_2x.png",
    url: "https://www.rocksbox.com/",
    accountURL: "https://www.rocksbox.com/signin",
    price: [
        {planName: "3 Pieces of Jewelry", price: 21.00, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "StitchFix",
    description: "With this subscription box, a personal stylist will choose five pieces based on a style profile you make on the site. Once you get the box, you have three days to decide what you want to buy and what you want to send back. You can even send your stylist detailed feedback about the items, so she can make a better, more personalized selections the next time. There’s a $20 styling fee for every box, but that fee can be credited towards any item you decide to buy.",
    category: "Fashion", 
    iconURL:"http://www.bbgventures.com/wp-content/uploads/2016/06/logo_rocksbox_2x.png",
    url: "https://www.stitchfix.com/",
    accountURL: "https://www.stitchfix.com/login",
    price: [
        {planName: "StitchFix", price: 20.00, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  }
];


db.Categories
.remove({})
  .then(() => db.Categories.collection.insertMany(categorySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

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
