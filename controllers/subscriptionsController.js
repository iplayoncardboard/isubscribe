const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Subscription
      .find(req.query)
      .sort({ date: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Subscription
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //CATEGORY FILTERS
  findMusic: function(req, res) {  
    db.Subscription
    .find({category: "Music Streaming"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findFood: function(req, res) {  
    db.Subscription
    .find({category: "Food"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findFashion: function(req, res) {  
    db.Subscription
    .find({category: "Fashion"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findVideo: function(req, res) {  
    db.Subscription
    .find({category: "Video Streaming Service"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findArt: function(req, res) {  
    db.Subscription
    .find({category: "Arts and Crafts"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findGames: function(req, res) {  
    db.Subscription
    .find({category: "Games"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findBooks: function(req, res) {  
    db.Subscription
    .find({category: "Books/Periodicals"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findOutdoor: function(req, res) {  
    db.Subscription
    .find({category: "Outdoor"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findPets: function(req, res) {  
    db.Subscription
    .find({category: "Pets"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findChildren: function(req, res) {  
    db.Subscription
    .find({category: "Children"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  findPhotos: function(req, res) {  
    db.Subscription
    .find({category: "Photos"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },
  // findEvents: function(req, res) {  
  //   db.Subscription
  //   .find({category: "Events"})
  //   .sort({ date: -1 })
  //   .then(dbModel => res.json(dbModel))
  //   .catch(err => res.status(422).json(err));
  // },
  findSport: function(req, res) {  
    db.Subscription
    .find({category: "Sports/Fitness"})
    .sort({ date: -1 })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },



  create: (req, res) =>{
   // console.log('Controller returning req.body: ' + req.body);
    db.Subscription
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
  // remove: (req, res) =>{
  //   db.Subscription.remove()
  // }
};