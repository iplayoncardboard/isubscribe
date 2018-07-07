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
    iconURL:"https://i2.wp.com/pellerini.com/wp-content/uploads/2015/01/Logo_StitchFix_markTop_300pxw.jpg",
    url: "https://www.stitchfix.com/",
    accountURL: "https://www.stitchfix.com/login",
    price: [
        {planName: "StitchFix", price: 20.00, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "StitchFix",
    description: "With this subscription box, a personal stylist will choose five pieces based on a style profile you make on the site. Once you get the box, you have three days to decide what you want to buy and what you want to send back. You can even send your stylist detailed feedback about the items, so she can make a better, more personalized selections the next time. There’s a $20 styling fee for every box, but that fee can be credited towards any item you decide to buy.",
    category: "Fashion", 
    iconURL:"https://i2.wp.com/pellerini.com/wp-content/uploads/2015/01/Logo_StitchFix_markTop_300pxw.jpg",
    url: "https://www.stitchfix.com/",
    accountURL: "https://www.stitchfix.com/login",
    price: [
        {planName: "StitchFix", price: 20.00, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Golden Tote",
    description: "On the first Monday of every month, choose from the small tote (two to three pieces of clothing) or the large tote (five to six pieces of clothing). You select one or two pieces of clothing you love on the site and they’ll surprise you with other pieces. And since every tote is hand-selected, you’ll want to create a style profile so your shipment can be even more personalized.",
    category: "Fashion", 
    iconURL:"https://pbs.twimg.com/profile_images/575358602757570560/oNx8GjNg_400x400.jpeg",
    url: "https://www.goldentote.com/",
    accountURL: "https://www.goldentote.com/index.php?route=account/login",
    price: [
        {planName: "Small Tote", price: 49.00, frequency: "month", default: true},
        {planName: "Large Tote", price: 149.00, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Rent the Runway",
    description: "With Rent The Runway Unlimited, you’ll get unlimited access to designer dresses, accessories, tops, skirts, and more worth up to $40,000 each year. Plus, there are zero rental feels and you get free shipping and dry cleaning. It’s awesome!",
    category: "Fashion", 
    iconURL:"http://www.ragtradeatlanta.com/wp-content/uploads/2014/12/Rent.jpeg",
    url: "https://www.renttherunway.com/",
    accountURL: "https://www.renttherunway.com/account/register",
    price: [
        {planName: "RTR Reserve", price: 30, frequency: "month", default: true},
        {planName: "RTR Update", price: 89.00, frequency: "month", default: false},
        {planName: "RTR Unlimited", price: 159.00, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Birchbox",
    description: "Birchbox is a New York City-based online monthly subscription service that sends its subscribers a box of four to five selected samples of makeup, or other beauty related products. The products include skincare items, perfumes, organic based products, and various other cosmetics.",
    category: "Fashion", 
    iconURL:"https://trademarks.justia.com/media/og_image.php?serial=77947655",
    url: "https://www.birchbox.com",
    accountURL: "https://www.birchbox.com/sign-in",
    price: [
        {planName: "BirchBox", price: 10, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Trunk Club",
    description: "When you join Trunk Club by Nordstrom, you’ll receive get great clothes chosen by your personal stylist. To get started, just answer a few questions about your fit, style, and budget and from there you’ll be able to chat with your stylist to help build your trunk. When your trunk arrives, just try on what you like and return the rest. That’s it! Plus there’s even special trunks like one just for golfers!",
    category: "Fashion", 
    iconURL:"https://res.cloudinary.com/trunk-club/image/upload/fl_attachment/public_site/newsroom/resources/logos/TC_Logo_Navy.png",
    url: "https://www.trunkclub.com",
    accountURL: "https://www.trunkclub.com/login",
    price: [
        {planName: "TrunkClub", price: 25, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Home Chef",
    description: "Home Chef is a fresh ingredient and recipe delivery service. Subscribers receive one box per week with all the fresh ingredients you need to make restaurant quality recipes, designed by our chefs. They save you the time going to the grocery store, finding new recipes, meal planning, and portioning. They give you direct access to some of the nation's highest quality food suppliers with recipes created by seasoned chefs. They source from only top quality vendors, giving you the freshest ingredients possible.",
    category: "Food", 
    iconURL:"http://shoppopbox.com/wp-content/uploads/2017/09/1024x768_Landscape-550x550.jpg",
    url: "https://www.homechef.com/",
    accountURL: "https://www.homechef.com/users/sign_in",
    price: [
        {planName: "Home Chef", price: 9.99, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Sunbasket",
    description: "Sun Basket is a San Francisco-based subscription meal delivery service that ships members fresh organic and sustainable ingredients and recipes every month, allowing them to cook their own meals.",
    category: "Food", 
    iconURL:"http://dealscheap.us/wp-content/uploads/2018/02/zrqueclsy-151863352048gkn.jpg",
    url: "https://sunbasket.com/",
    accountURL: "https://sunbasket.com/login",
    price: [
        {planName: "SunBasket", price: 10.99, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Hello Fresh",
    description: "HelloFresh SE is an international publicly traded meal-kit company based in Berlin, Germany. It is the second-largest meal-kit provider in the United States, after Blue Apron, and also has operations in Canada, Western Europe, and Australia. HelloFresh aims to provide each and every household in its 10 markets with the opportunity to enjoy wholesome home-cooked meals with no planning, no shopping and no hassle required. Everything required for weeknight meals, carefully planned, locally sourced and delivered to your door at the most convenient time for each subscriber.",
    category: "Food", 
    iconURL:"https://d1nlri62pqla74.cloudfront.net/images/hellofresh-logo.png",
    url: "https://www.hellofresh.com/",
    accountURL: "https://www.hellofresh.com/plans",
    price: [
        {planName: "HelloFresh", price: 10.99, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Plated",
    description: "Choose from seven different meat, seafood, and vegetarian dinners and receive all of the ingredients — except for salt, pepper, olive or vegetable oil, and eggs — to make the meal for two. Plated also provides step-by-step cooking instructions printed on recipe cards. You select your date of delivery each week, and can choose to skip weeks as needed. The box arrives with a large ice pack nestled at the bottom, and the meats placed directly on top of them, so they are extra cold. The remaining ingredients are packed in clear plastic bags and organized by meal. Plated currently delivers to 95 percent of the United States; it does not deliver to Hawaii, Alaska, and a few cities in Texas.",
    category: "Food", 
    iconURL:"https://upload.wikimedia.org/wikipedia/commons/b/b8/Plated_Logo_Red_Large.png",
    url: "https://www.plated.com/",
    accountURL: "https://www.plated.com/log_in",
    price: [
        {planName: "Plated", price: 9.95, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Blue Apron",
    description: "Blue Apron is a fresh ingredient and recipe delivery service that helps chefs of all levels cook incredible meals at home. They take care of the menu planning and shopping (providing you with fresh, locally sourced ingredients in pre-measured quantities), so all you have to do is cook and enjoy (please note: our blog is full of helpful tips that will help you cook with speed and ease). They offer 2 plan options (detailed below) with no commitments or fees. Plus, you can choose to skip your orders up to 5 weeks in advance or cancel at any time.",
    category: "Food", 
    iconURL:"http://seekvectorlogo.com/wp-content/uploads/2018/01/blue-apron-vector-logo.png",
    url: "https://www.blueapron.com/",
    accountURL: "https://www.blueapron.com/users/sign_in",
    price: [
        {planName: "BlueApron", price: 8.99, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Green Chef",
    description: "Feel great about your food. It's right in the name: Green Chef is all about eating and living green. As a USDA-certified organic meal kit company, we work with farmers to source sustainable, non-GMO ingredients. They strive for at least 90% organic ingredients across our meal kits, and each dinner is packed with veggies.",
    category: "Food", 
    iconURL:"https://theme.zdassets.com/theme_assets/593344/1ec17179026ca7fc2fa2699480854dea2ed45a8b.png",
    url: "https://greenchef.com",
    accountURL: "https://greenchef.com/sign-in",
    price: [
        {planName: "GreenChef", price: 4.00, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Spotify",
    description: "Spotify is a digital music service that enables users to remotely source millions of different songs on various record labels from a laptop, smartphone or other device.",
    category: "Music Streaming", 
    iconURL:"https://developer.spotify.com/assets/branding-guidelines/logo@2x.png",
    url: "https://www.spotify.com/us/",
    accountURL: "https://www.spotify.com/us/account/overview/",
    price: [
        {planName: "Spotify Premium", price: 9.99, frequency: "month", default: true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Pandora",
    description: "Pandora Radio is a music streaming and automated music recommendation internet radio service powered by the Music Genome Project. The service plays songs that have similar musical traits. The user then provides positive or negative feedback (as thumbs up or thumbs down) for songs chosen by the service, and the feedback is taken into account in the subsequent selection of other songs to play. The service can be accessed either through a web browser or with its mobile app on a smartphone.",
    category: "Music Streaming", 
    iconURL:"http://1000logos.net/wp-content/uploads/2017/05/pandora-symbol.jpg",
    url: "https://www.pandora.com/",
    accountURL: "https://www.spotify.com/us/account/overview/",
    price: [
        {planName: "Pandora Plus", price: 4.99, frequency: "month", default: true},
        {planName: "Pandora Premium", price: 9.99, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Apple Music",
    description: "Apple Music is a music and video streaming service developed by Apple Inc. Users select music to stream to their device on-demand, or they can listen to existing, curated playlists.",
    category: "Music Streaming", 
    iconURL:"http://www.patentlyapple.com/.a/6a0120a5580826970c01b8d12a91e5970c-pi",
    url: "https://www.apple.com/apple-music/",
    accountURL: "https://itunes.apple.com/us/artist/login/439834157",
    price: [
        {planName: "Student", price: 4.99, frequency: "month", default: true},
        {planName: "Individual", price: 9.99, frequency: "month", default: false},
        {planName: "Family", price: 14.99, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Google Play Music",
    description: "Google Play Music offers all users storage of up to 50,000 files for free. Users can listen to songs through the service's web player and mobile apps. The service scans the user's collection and matches the files to tracks in Google's catalog, which can then be streamed or downloaded in up to 320 kbps quality.",
    category: "Music Streaming", 
    iconURL:"https://scdn.androidcommunity.com/wp-content/uploads/2017/05/Google-Play-Music-Logo.jpg",
    url: "https://play.google.com/music/listen?u=0#/sulp",
    accountURL: "https://play.google.com/music/listen?u=0#/home",
    price: [
        {planName: "Individual", price: 9.99, frequency: "month", default: true},
        {planName: "Family", price: 14.99, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "iHeartRadio",
    description: "iHeartRadio is a free broadcast and internet radio platform owned by iHeartMedia, Inc. and was founded in April 2008 as the website iheartmusic.com. As of 2017 iHeartRadio functions as a music recommender system and is the national umbrella brand for iHeartMedia's radio network aggregating its over 850 local iHeartMedia radio stations across the United States, as well as hundreds of other stations from various other media (with companies such as Cumulus Media, Cox Radio and Beasley Broadcast Group also utilizing this service). In addition, the service includes thousands of podcasts and now also offers on demand functionality and is the only service that allows listeners to save and replay songs right from live broadcast radio to their digital playlists. The on demand features require a subscription fee. iHeartRadio is available across more than 90 device platforms including online, via mobile devices, and on some video-game consoles.",
    category: "Music Streaming", 
    iconURL:"http://votiko.com/wp-content/uploads/2016/07/iheartradio-logo-1.jpg",
    url: "https://www.iheart.com/",
    accountURL: "https://www.iheart.com/my/",
    price: [
        {planName: "Individual", price: 9.99, frequency: "month", default: true},
        {planName: "Family", price: 14.99, frequency: "month", default: false}
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
