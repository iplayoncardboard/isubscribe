// import BrowseSubscriptions from "../client/src/pages/Subscriptions/BrowseSubscriptions";

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
// FOR EVERY NEW CATEGORY ADDED, YOU NEED TO:
//  add to:
//  Controller > SUBSCRIPTIONCONTROLER
//  UTILS > API
//  ROUTES > API Subcriptions
//  add to if statement on BrowseSubscriptions

  {
    name:"Video Streaming Service", 
    date: new Date(Date.now()),
    active:true
  },
  {
    name:"Music Streaming", //routing done
    date: new Date(Date.now()),
    active:true
  },
  {
    name:"Food",
    date: new Date(Date.now()),
    active:true
  },
  {
    name:"Fashion",
    date: new Date(Date.now()),
  },
  {
    name:"Arts and Crafts",
    date: new Date(Date.now()),
  },
  {
    name:"Games",
    date: new Date(Date.now()),
  },
  {
    name:"Books/Periodicals",
    date: new Date(Date.now()),
  },
  {
    name:"Outdoor",
    date: new Date(Date.now()),
  },
  {
    name:"Sports/Fitness",
    date: new Date(Date.now()),
  },
  {
    name:"Pets",
    date: new Date(Date.now()),
  },
  {
    name:"Children",
    date: new Date(Date.now()),
  },
  {
    name:"Photos",
    date: new Date(Date.now()),
  },
  // {
  //   name:"Events",
  //   date: new Date(Date.now()),
  // },
]

const userSeed = [
  
//COPY THIS TO CREATE A USER FOR YOURSELF
  { email: "brittanycflanagan@gmail.com",
    alias: "BrittFlanagan",
    firstName: "Brittany",
    lastName: "Flanagan",
    age:29,
    imageURL: "https://lh6.googleusercontent.com/-owJ_eJOJtkM/AAAAAAAAAAI/AAAAAAAAAN0/i8gmFEC_8ss/photo.jpg",
    address: {
      street: "123 S Sample St",
      appartment: "",
      city: "Phoenix",
      state: "AZ",
      zip: "85251"
    },
    date: new Date(Date.now()),
    status:true,
    role: "user",
    // subscriptions: [
    //   {
    //     type: Schema.Types.ObjectId,
    //     ref: "Subscription"
    //   }
    // ]
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
    iconURL:"http://www.georgetowndc.com/media/public_images/2015/11/05/public_image_1342.jpeg",
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
  },
  {
    subscriptionName: "Sketchbox",
    description: "SketchBox is a monthly subscription service intended to empower artists. Our goal is to provide artists with easy access to supplies and exposure to their work. Each month you’ll receive 4-6 art supplies (often times full kits) such as Copic markers, Krink paint markers, Pan pastels, Caran d’Ache Luminance Colored Pencils, Zig Brush Pens, Van Gogh watercolors, Gum Erasers, and other mediums for you to explore. In addition you will also receive an inspirational piece of art made with the materials in the box by our featured artist. We have two box types Basic and Premium. Basic is $25 per month and premium is $35 per month which includes higher quality materials. Each box has $5 shipping in the USA. We encourage you to share your art with us, and we'd love to feature your art. Submit your work to info@getsketchbox.com and we'll get back to you as soon as possible.",
    category: "Arts and Crafts", 
    iconURL:"https://assets-global.viveport.com/vr_developer_published_assets/app/59c84e2a-465e-47ff-b9f0-f3571e5cfd34/image/thumbnail_medium_v1506593523.jpg",
    url: "https://getsketchbox.com/",
    accountURL: "https://getsketchbox.com/subscribe/",
    price: [
        {planName: "Basic", price: 25.00, frequency: "month", default: true},
        {planName: "Premium", price:35.00, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Adults and Crafts",
    description: "Conveniently turn those unique Pinterest projects into reality with Adults & Crafts DIY Craft Kits. No more abandon pins!",
    category: "Arts and Crafts", 
    iconURL:"https://s3.amazonaws.com/msa-production/boxes/images/000/002/214/medium/DJP_5703.jpeg?1523895570",
    url: "https://www.adultsandcrafts.com",
    accountURL: "https://www.adultsandcrafts.com/products/crate",
    price: [
        {planName: "Monthly", price:33.00, frequency: "month", default:true},
        {planName: "3 Months", price:32.00, frequency: "month", default:false},
        {planName: "6 Months", price:31.00, frequency: "month", default:false},
        {planName: "Yearly", price:30.00, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Kid Wonder",
    description: "Ages 3-6. These magical imaginative play boxes are designed for the child who love to create, learn and explore through dramatic play! Each month this subscription box centers around a new theme. Whether it's blasting off to Outer Space, Searching for Buried Treasure or going on a Dinosaur Dig, The Little Dreamers Box is sure to provide hours of educational fun!",
    category: "Arts and Crafts", 
    iconURL:"https://d3a1v57rabk2hm.cloudfront.net/littledreamers/delight_mobile-copy-5/images/bg-visual-2.jpg?ts=1528119317&host=www.kidwonderbox.com",
    url: "https://www.kidwonderbox.com/",
    accountURL: "https://www.kidwonderbox.com/subscribe/",
    price: [
        {planName: "Little Dreamers Box", price:24.00, frequency: "month", default:true},
        {planName: "Little Dreamers Box for Siblings", price:36.00, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  
  {
    subscriptionName: "Mrs. Grossman's Sticker Club",
    description: "In 1979 graphic designer Andrea Grossman launched Mrs. Grossman’s, the world-renowned company that pioneered the decorative sticker industry. Her son Jason Grossman, a Mrs. Grossman’s employee for more than fifteen years, followed in her footsteps nineteen years later, when in 1999, he launched Paragon Label, a division of Mrs. Grossman’s. Specializing in high-end, top-quality, Flexographic and digital custom printing, Paragon Label has become one of the most respected printers in Northern California winning more than twenty-five awards for technical excellence in label printing and many national and international awards for innovative environmental programs. Today both companies run side by side. Mrs. Grossman’s continues to design and print some of the most unique and elegant stickers in the marketplace while Paragon Label specializes in fine custom-made labels for the wine, gourmet foods, health and beauty industry. ",
    category: "Arts and Crafts", 
    iconURL:"http://www.warehouseweekends.com/assets_c/2008/10/mrs_grossman-thumb-350x242.jpg",
    url: "https://stickerclub.mrsgrossmans.com/",
    accountURL: "https://mrsgrossmans.com/pages/mrs-grossmans-sticker-club",
    price: [
        {planName: "Monthly", price:12.95, frequency: "month", default:true},
        {planName: "Yearly Pre-Pay", price:10.95, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Simple Loose Leaf Tea Company",
    description: "Simple Loose Leaf isn’t just another tea club that uses its members to jettison spare inventory on the verge of expiration. We’re a Subscription Box company dedicated to enriching people’s lives through the love of tea. Behind water, tea is the world’s most consumed drink. There’s a reason for that. The many nuances and varieties of tea rival the great wines of history, and we’re just at the beginning of the tea revolution here in the United States. Join us, and experience a whole new way to drink tea.",
    category: "Food", 
    iconURL:"https://s3.amazonaws.com/cratejoy_vendor_images/2155b017a1a4429e896143b2495e8dbc.png",
    url: "https://www.simplelooseleaf.com/",
    accountURL: "https://www.simplelooseleaf.com/join-non-decaf",
    price: [
        {planName: "Monthly", price:9.00, frequency: "month", default: true },
        {planName: "3 Months", price:9.00, frequency: "month", default: false },
        {planName: "6 Months", price:8.07, frequency: "month", default: false },
        {planName: "Yearly", price:8.00, frequency: "month", default: false},
        {planName: "Quarterly", price:3.00, frequency: "month", default:false},
        {planName: "4 Quarters", price:3.00, frequency: "month", default:false},
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Dungeon Crate",
    description: "Each month, Dungeon Crate carefully curates an epic box of RPG accessories that you can use on and off the game table. Digital crate access for subscribers offers even more maps, handouts, artwork, and adventures. Each crate offers a theme with items that can be used in the included adventures. Here’s what you can expect to see in your Dungeon Crate: Polyhedral Dice, Miniatures, Epic Adventures, Fantasy Coins, RPG Lifestyle Items, Exclusive Treasures",
    category: "Games", 
    iconURL:"data:image/jpeg;base64,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",
    url: "https://www.dungeoncrate.com/",
    accountURL: "https://dungeoncrate.cratejoy.com/subscribe/952250848_DUNGEON+CRATE+WORLDWIDE",
    price: [
        {planName: "Dungeon Crate", price:35.95, frequency: "month", default:true},
      ], 
    date: new Date(Date.now()),
    active: true
  },
  
  {
    subscriptionName: "The Deadbolt Mystery Society",
    description: "Become a detective from the comfort of your own living room!  With our new mystery-in-a-box series you can join the ranks of Sherlock Holmes and Hercule Poirot by combing through witness reports, examining evidence, and eliminating suspects until you have closed the case! ",
    category: "Games", 
    iconURL:"https://pbs.twimg.com/profile_images/976881722527813632/anNLNIjK_400x400.jpg",
    url: "https://deadboltmysterysociety.com/",
    accountURL: "https://deadboltmysterysociety.cratejoy.com/",
    price: [
        {planName: "Month", price:24.99, frequency: "month", default:true},
        {planName: "3 Month", price:23.33, frequency: "month", default:false},
        {planName: "6 Month", price:22.50, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Sleuth Kings",
    description: "Founded by Samuel King in 1961, Sleuth Kings has been a family-run investigations firm for three generations. Throughout that time, the King family has made it their mission to uncover the truth and help their clients get the justice they deserve.",
    category: "Games", 
    iconURL:"https://cdn.dribbble.com/users/871745/screenshots/3537772/sleuth_kingsdb_1x.jpg",
    url: "https://sleuthkings.com/",
    accountURL: "https://sleuthkings.com/subscribe/",
    price: [
        {planName: "Month to Month", price: 29.95, frequency: "month", default:true},
        {planName: "3 Month Prepay", price:27.95, frequency: "month", default:false},
        {planName: "6 Month Prepay", price:26.60, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  // {
  //   subscriptionName: "Madmen and Heroes",
  //   description: "At Madmen and Heroes, we are puzzling people. Not the kind who make you confused about why we act the way we do (well, ok, maybe a little) but the kind who wants to sit down with you on a Saturday night and unravel some challenging puzzles and ciphers. We also like mysteries and diving down rich rabbit holes of stories buried in history. ",
  //   category: "Games", 
  //   iconURL:"https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjOjb2snK_cAhUC_1QKHRFZACcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.madmenandheroes.com%2F&psig=AOvVaw0pNM8AhIri4oaUqDtqq5k-&ust=1532229093899908",
  //   url: "https://www.madmenandheroes.com/",
  //   accountURL: "https://www.madmenandheroes.com/subscribe/",
  //   price: [
  //       {planName: "Recruie", price:30.00, frequency: "month", default:true},
  //       {planName: "Ensign", price:29.00, frequency: "month", default:false},
  //       {planName: "Lieutenant", price:33.00, frequency: "month", default:false}
  //     ], 
  //   date: new Date(Date.now()),
  //   active: true
  // },
  
  {
    subscriptionName: "The Reading Bug",
    description: "Reading Bug Boxes are a perfect, personalized gift. Each box features selections hand-picked by our staff and matched to the unique age and interests of the recipient! Learn more about Reading Bug Box and our mission to connect families and grow imaginations across the globe at www.readingbugbox.com",
    category: "Books", 
    iconURL:"https://www.thereadingbug.com/sites/thereadingbug.com/files/RBA_logo_pirate-500-2.png",
    url: "https://www.thereadingbug.com/",
    accountURL: "https://www.thereadingbug.com/page/reading-bug-boxes",
    price: [
        {planName: "Reading Bug Box", price:27.00, frequency: "month", default:true},
        {planName: "Readubg Bug Box For 2", price:45.00, frequency: "month", default:false},
        {planName: "Baby Bug Box", price:18.00, frequency: "month", default: false},
       
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Knife Box",
    description: "KnifeBox is a premium subscription service that delivers unique, high-quality knives to your door every month. ",
    category: "Outdoor", 
    iconURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnM91cg6gNLpp5ElPBIJ3YXBkJKghs_BzrAxzU5MhFNrJ_8Rje",
    url: "https://www.knifebox.com/",
    accountURL: "https://www.knifebox.com/subscribe/",
    price: [
        {planName: "KnifeBox", price:17.95, frequency: "month", default:true},
        {planName: "TacticalBox", price:59.95, frequency: "month", default:false},
        {planName: "SwordBox", price:24.95, frequency: "month", default:false},
        {planName: "CS:GO Box", price:26.95, frequency: "month", default:false},
        {planName: "AxeBox", price:34.95, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "The Gain[z] Box",
    description: "Every month you’ll get a different mix of things like workout apparel, supplements, gear, equipment, and other suprises to delight you. All contents have been chosen by a team of gainz members scouring the world for the best gear on the market. Together, we take great care to send only the most awesome, high quality, stuff. A great deal of thought, research, and time goes into each box.",
    category: "Sports/Fitness", 
    iconURL:"https://img.wethrift.com/the-gainz-box.jpg",
    url: "https://www.thegainzbox.com/",
    accountURL: "https://gainzbox.cratejoy.com/pick-plan?_ga=2.205130960.1347005855.1532144839-85070263.1532144839",
    price: [
        {planName: "Monthly", price:32.00, frequency: "month", default:true},
        {planName: "3 Month", price:31.00, frequency: "month", default:false},
        {planName: "6 Month", price:30.00, frequency: "month", default:false},
        {planName: "Year", price:29.00, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  
  {
    subscriptionName: "BJJ Box",
    description: "Just like you, we train as often as possible. We've been there, from white to black and we know the needs of grapplers. That's why every month we search high and low for the best jiu-jitsu gear at a price that allows us to get in the box for subscribers and still allows us enough to continue and grow. If you're ever unhappy with a box let us know, there's no long term commitment, you can cancel any time!",
    category: "Sports/Fitness", 
    iconURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVmeXllT-xW5aeYjTDG75xxSVr5kkioCO_IaazeKb1s-gHtIq",
    url: "https://www.thebjjbox.com/",
    accountURL: "https://www.thebjjbox.com/subscribe/",
    price: [
        {planName: "Classic", price:27.99, frequency: "month", default:true},
        {planName: "VIP", price:37.99, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Isle Box",
    description: "While fielding the same questions over and over at an outdoor e-commerce company, founder Kolin Karchon dreamt not only of going to Isle Royale National Park but also of sending hand picked gear to friends, family and strangers. By chance one day while climbing at Planet Rock, he ran into future co-founder Travis Tamez. Together, they began formulating a rough idea that would later become Isle Box. The two founded the business out of their living room in 2014 and since then, Isle Box has packed many boxes and recently even earned a nice shout out in Outside Magazine. We know how hard it can be starting out or finding the right gear for the right season / situations. From our Starter Box to the Seasonal Box to the Monthly Box, we would never send or sell something we wouldn’t use ourselves. Our gear is hand picked for you. The items sent are high quality and will absolutely be useful and not end up in the trash. Our hope is that our boxes will get you outside and empower you take on challenges you never would before. It’s time to ditch the couch, ditch your comfort zone and finally get outside and explore the world around you.",
    category: "Outdoor", 
    iconURL:"http://libertasweb.io/wp-content/uploads/2015/07/islebox-705x652.jpg",
    url: "https://www.islebox.com/",
    accountURL: "https://www.islebox.com/how-islebox-works/",
    price: [
        {planName: "Seasonal Pass 1 Quarter", price:125.00, frequency: "quarterly", default:true},
        {planName: "Seasonal Pass 2 Quarters ", price:110.00, frequency: "quarterly", default:false},
        {planName: "Seasonal Pass 4 Quarters ", price:106.25, frequency: "quarterly", default:false},
        {planName: "Starter Box", price:199.00, frequency: "once", default:true},
        {planName: "National Parks Box", price:120.00, frequency: "once", default:true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Surf Shop Box",
    description: "Surf Shop Box was founded on the belief that the surf lifestyle doesn't have to be exclusive. There are passionate surfers and lifestyle enthusiasts all over the world, and our goal is to deliver a box of style and stoke directly to their doors every 3 months, while saving an average of 50% off retail prices. Join us in sharing the stoke, worldwide. ",
    category: "Outdoor", 
    iconURL:"data:image/jpeg;base64,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",
    url: "https://www.surfshopbox.com/",
    accountURL: "https://www.surfshopbox.com/pages/whats-your-style",
    price: [
        {planName: "Big Kahuna", price:33.00, frequency: "month", default:true}
    
      ], 
    date: new Date(Date.now()),
    active: true
  },
  
  {
    subscriptionName: "Barrel and Blade Tactical Outfitters",
    description: "An awesome assortment of some of the best tactical, survival, and EDC gear on the market. No samples here! Not only do we scour the world for the hottest trending gear for you each month, we also consult with some of the nation's foremost authorities on hunting, survival, marksmanship, police, and military.",
    category: "Outdoor", 
    iconURL:"https://img.wethrift.com/barrel-and-blade.jpg",
    url: "https://www.barrelandblade.com/",
    accountURL: "https://www.barrelandblade.com/customer/login",
    price: [
        {planName: "Level 1", price:49.99 , frequency: "month", default:true},
        {planName: "Level 2", price:99.99 , frequency: "month", default: false}
      ], 
    date: new Date(Date.now()), 
    active: true
  },

  {
    subscriptionName: "Shooters Loot",
    description: "Our mission is simple here at Shooters Loot, to fin the shooting loot for you, create fun subscription boxes that contain things shooters enjoy and add a little fun in the process. You can expect products like gun gear and parts, gun cleaners, lubricants and brushes. Also high end flashlights and knives, steel targets and paper targets.",
    category: "Outdoor", 
    iconURL:"https://gun-shop.ca/wp-content/uploads/18422206_1390215511070592_1064960294464713147_o-510x510.jpg",
    url: "https://www.shootersloot.com/",
    accountURL: "https://www.shootersloot.com/customer/login",
    price: [
        {planName: "Shooter's Loot Box Subscription", price:49.95, frequency: "month", default:true},
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "National Angler's Association",
    description: "NAA partners with small businesses across the United States to provide quality lures and baits to our subscribers. We feature a new company each month to keep your box filled with new and exciting tackle that is proven to generate bigger hits and catch larger fish!",
    category: "Outdoor", 
    iconURL:"https://d3a1v57rabk2hm.cloudfront.net/nationalanglersassociati/delight_mobile/images/150090578149475.png?ts=1500905664&host=www.nationalanglersassociation.com",
    url: "https://www.nationalanglersassociation.com/",
    accountURL: "https://www.nationalanglersassociation.com/customer/login",
    price: [
        {planName: "Basic", price:39.00, frequency: "month", default:true}
        
      ], 
    date: new Date(Date.now()),
    active: false
  },
  
  {
    subscriptionName: "The Nomadik",
    description: "Our goal is to motivate people to get outside by delivering gear and inspirational/educational items to help people find the best places to explore.",
    category: "Outdoor", 
    iconURL:"https://d3a1v57rabk2hm.cloudfront.net/thenomadiksubscriptionbox/parcel-copy-7/images/ven-nomadikwhite.jpg?ts=1493077873&host=www.thenomadik.com",
    url: "https://thenomadik.com/",
    accountURL: "https://thenomadik.com/customer/login",
    price: [
        {planName: "1 Month", price: 32.95, frequency: "month", default:true},
        {planName: "6 Month", price: 31.25, frequency: "month", default:false},
        {planName: "12 Month", price:29.99, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Indego Beaux",
    description: "Indigo Beaux is a subscription box service delivering high-quality health, beauty, and relaxation products sent to you every month, indulge in a luxurious, beautifying, and refreshing experience with Indigo Beaux. Relax and revitalize with sensuous body, home, and beauty items. Luxuriate and enjoy!",
    category: "Fashion", 
    iconURL:"https://pbs.twimg.com/media/DionycJVsAIuHIt.jpg",
    url: "https://www.indigobeaux.com",
    accountURL: "https://www.indigobeaux.com/subscribe/",
    price: [
        {planName: "Monthly", price: 69.99, frequency: "month", default:true},
        {planName: "6 Months", price: 62.99, frequency: "month", default: false},
        {planName: "12 Months", price:59.99, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "The Rad Dad Box",
    description: "We want Dads and their babies to thrive - not just survive! We're here not just to help you get through fatherhood, but to enjoy it to the fullest. We know how important it is for Dads and their babies to spend time together, so we will always include at least one product (and usually two!) to foster the bond between Dad and baby. There will also be one product just for Dad and one product just for baby because sometimes you just need something for yourself only. Starting in December 2017, we also have been including activity cards for the products, which we hope will make Dad even radder!",
    category: "Children", 
    iconURL:"https://cdn.hellosubscription.com/wp-content/uploads/sites/2/2017/02/img_58a4d62aa93fc.png",
    url: "https://www.raddadbox.com/",
    accountURL: "https://www.raddadbox.com/customer/login",
    price: [
        {planName: "Rad Dad Box", price:29.00, frequency: "month", default:true},
        {planName: "Delux Rad Dad Box", price:38.00, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  
  {
    subscriptionName: "My Educrate",
    description: "centered around a different theme. Products will includeaccessories, crafts, beauty products, and much more. Every box also includes theme based stationary and our own SurPRIZE POD. We'll even send a special gift during your little girl's birthday month so be sure to sign up to our birthday club! ",
    category: "Children", 
    iconURL:"data:image/jpeg;base64,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",
    url: "https://www.myeducrate.org/",
    accountURL: "https://www.myeducrate.org/subscribe/92513992_MyEduCrate",
    price: [
        {planName: "Month By Month", price: 39.95, frequency: "month", default: true},
        {planName: "3 Month Pre-Pay", price: 38.31, frequency: "month", default: false},
        {planName: "6 Month Pre-Pay", price: 38.11, frequency: "month", default: false},
        {planName: "12 Month Pre-Pay", price: 37.11, frequency: "month", default: false}
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Em and Liz Box",
    description: "We’ll deliver 4-6 high quality products designed to foster creative and imaginative play and expression for little girls between the agesof 3-10. Each month we’ll send you carefully selected products centered around a different theme. Products will include",
    category: "Children", 
    iconURL:"data:image/jpeg;base64,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",
    url: "https://emandliz.com/",
    accountURL: "https://emandliz.com/products/monthly-plan",
    price: [
        {planName: "1 Month", price:25.00, frequency: "month", default:true},
        {planName: "3 Month", price:23.75, frequency: "month", default:false},
        {planName: "6 Month", price:22.50, frequency: "month", default:false},
        {planName: "12 Month", price:18.75, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Kid Curated Books",
    description: "Expand your child's horizons and ignite their passions with kid curated books.  Each order is delivered to your home in our signature blue box and contains books carefullu selected for your child's reading level and interests.",
    category: "Books/Periodicals", 
    iconURL:"data:image/jpeg;base64,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",
    url: "https://kidcuratedbooks.com",
    accountURL: "https://kidcuratedbooks.com/products/book-subscription",
    price: [
        {planName: "Monthly", price:35.00, frequency: "month", default:true},
      ], 
    date: new Date(Date.now()),
    active: true
  },
  
  {
    subscriptionName: "Bark Box",
    description: "BARK  launched in 2012 with BarkBox, our monthly themed subscription of all-natural treats and clever toys. Since then, we’ve shipped more than 50 million of our favorite things to the dogs in our pack, and we’ve used that accumulated expertise to create our own products, experiences, and content.",
    category: "Pets", 
    iconURL:"https://cdn.couponcabin.com/prd/www/res/img/coupons/barkbox/large_logo.png",
    url: "https://www.barkbox.com/",
    accountURL: "https://www.barkbox.com/subscribe/plan",
    price: [
        {planName: "1 Month", price:29.00, frequency: "month", default:true},
        {planName: "6 Month", price:25.00, frequency: "month", default:false},
        {planName: "6 Month-1 Billing", price:23.00, frequency: "month", default:false},
        {planName: "12 Month", price:21.00, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Bully Make",
    description: "The genius of BULLYMAKE is that you can have a box delivered to your home every month, filled with extremely durable toys and delicious treats that are catered to your chomping pup. BULLYMAKE even creates unique toys and treats monthly that aren’t found anywhere else – and they also cater around allergy preferences. BULLYMAKE is serious about durability and quality, offering a best-in-the-business 14-day guarantee on all of its products.Did Fido somehow manage to chew apart one of their toys after a couple of days? BULLYMAKE will send your dog something better suited, immediately, and at no cost to you. ",
    category: "Pets", 
    iconURL:"https://bullymake.com/wp-content/uploads/2014/07/maximustheboxerpup_5_3_2018_8_40_0_954.jpg",
    url: "https://bullymake.com/",
    accountURL: "https://bullymake.com/my-account/",
    price: [
        {planName: "1 Month", price:39.00, frequency: "month", default:true},
        {planName: "3 Month", price:36.00, frequency: "month", default:false},
        {planName: "6 Month", price:34.00, frequency: "month", default:false},
        {planName: "12 Month", price:31.00, frequency: "month", default:false}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Amazon Prime Wardrobe",
    description: "Prime Wardrobe is a Prime-exclusive program where you can try before you buy from eligible items across women’s, men’s, kids’, and baby clothing, shoes, and accessories. You get seven days to try-on the items at home and you will only be charged for the items you decide to keep.",
    category: "Fashion", 
    iconURL:"data:image/jpeg;base64,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",
    url: "https://www.amazon.com/amazonprime?_encoding=UTF8&ref=nav_prime_member_btn",
    accountURL: "https://www.amazon.com/gp/css/homepage.html/ref=footer_ya",
    price: [
        {planName: "Monthly", price:12.99, frequency: "month", default:true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  
  {
    subscriptionName: "Amazon Prime Twitch",
    description: "Twitch Prime is included with Amazon Prime in the US, Mexico, Canada, Italy, France, Germany, Belgium, Austria, Spain, Japan, Singapore, Netherlands, and the United Kingdom. Twitch Prime is included with Prime Video in over 200 other countries and territories. If you are already an Amazon Prime member, you get Twitch Prime at no additional cost by connecting your Amazon account to your Twitch account at http://www.twitchprime.com.",
    category: "Games", 
    iconURL:"https://cdn.arstechnica.net/wp-content/uploads/2016/09/Screen-Shot-2016-09-30-at-3.46.44-PM.png",
    url: "https://www.amazon.com/amazonprime?_encoding=UTF8&ref=nav_prime_member_btn",
    accountURL: "https://www.amazon.com/gp/css/homepage.html/ref=footer_ya",
    price: [
        {planName: "Monthly", price:12.99, frequency: "month", default:true}
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Amazon Prime Photos",
    description: "Prime Photos offers free online photo storage to Prime members, who can save and share unlimited photos on desktop, mobile, and tablet. Share unlimited photo storage with up to 5 people, and collect photos together in the Prime Photos Family Vault. With the Prime Photos mobile and web apps, photo backup has never been easier. Use the iOS or Android mobile apps to auto-save your photos, then safely delete them from your phone to free up space on your device. Upload photos from your desktop computer, and store them safely all in Prime Photos web app. Access your content anywhere, across desktop, mobile, and tablet.",
    category: "Photos", 
    iconURL:"https://lh3.googleusercontent.com/ag59eUU8aSZdKsrhQU-qf0j4hAxD_srU0X8-iYkmzou78pmXFZcyeStGfdpbLyvWAT4",
    url: "https://www.amazon.com/amazonprime?_encoding=UTF8&ref=nav_prime_member_btn",
    accountURL: "https://www.amazon.com/gp/css/homepage.html/ref=footer_ya",
    price: [
        {planName: "Monthly", price:12.99, frequency: "month", default:true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Amazon Prime Pantry",
    description: "Prime members in select regions can shop for groceries and household products in everyday sizes, such as a single box of cereal, with Prime Pantry. Prime Pantry offers low priced products and exclusive savings, such as deals and coupons. With our wide selection you can choose between thousands of items available, including snacks, breakfast foods, beverages, beauty and personal care items, and household products and save a trip to the store. You can shop on Prime Pantry Store or by using the free Amazon app.",
    category: "food", 
    iconURL:"https://i2.wp.com/www.gardneredge.com/wp-content/uploads/2017/12/prime-pantry.png?resize=324%2C155",
    url: "https://www.amazon.com/amazonprime?_encoding=UTF8&ref=nav_prime_member_btn",
    accountURL: "https://www.amazon.com/gp/css/homepage.html/ref=footer_ya",
    price: [
        {planName: "Monthly", price:12.99, frequency: "month", default:true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  
  {
    subscriptionName: "Amazon Prime Reading",
    description: "Prime members can now read as much as they want from over a thousand books, magazines, comics, Kindle Singles and more.  With fiction, non-fiction, children's books, short works, and magazines right off the newsstand, you'll always find something to read.",
    category: "Books/Periodicals", 
    iconURL:"https://m.media-amazon.com/images/G/01/prime/primeinsider/primereading/Reading._SX485._CB487792288_.png",
    url: "https://www.amazon.com/amazonprime?_encoding=UTF8&ref=nav_prime_member_btn",
    accountURL: "https://www.amazon.com/gp/css/homepage.html/ref=footer_ya",
    price: [
        {planName: "Monthly", price:12.99, frequency: "month", default:true}
      ], 
    date: new Date(Date.now()),
    active: true
  },

  {
    subscriptionName: "Inwego",
    description: "INWEGO is a subscription that gets you a ticket to unlimited sports, concerts, and local events in your area, all for one flat montly fee.",
    category: "Events", 
    iconURL:"http://roundhousecreative.com/wp-content/uploads/2017/11/inwego-banner.png",
    url: "https://inwego.com",
    accountURL: "https://inwego.com",
    price: [
        {planName: "Monthly", price:29.00, frequency: "month", default:true}
      ], 
    date: new Date(Date.now()),
    active: true
  },
  {
    subscriptionName: "Amazon Prime Music",
    description: "Amazon Music Unlimited is a premium music subscription service featuring tens of millions of songs and thousands of expert-programmed playlists and stations. With Amazon Music Unlimited, you can listen to any song, anytime, anywhere, on all your devices – smartphone, tablet, PC/Mac, Fire TV, and Alexa-enabled devices like Amazon Echo.",
    category: "Music Streaming Service", 
    iconURL:"https://i2.wp.com/www.aftvnews.com/wp-content/uploads/2016/01/amazon-music-logo.jpg?resize=646%2C363&quality=100",
    url: "https://www.amazon.com/amazonprime?_encoding=UTF8&ref=nav_prime_member_btn",
    accountURL: "https://www.amazon.com/gp/css/homepage.html/ref=footer_ya",
    price: [
        {planName: "Monthly", price:12.99, frequency: "month", default:true}
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


  db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
