const db = require('../models');

module.exports= {
    findById: function(req, res) {
        db.UserSubscription
          .findById(req.params.id)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: (req, res) =>{
        // console.log('Controller returning req.body: ' + req.body);
         db.UserSubscription
           .create(req.body)
           .then(dbModel => res.json(dbModel))
           .then(function(dbSub) {
            // If a Book was created successfully, find one library (there's only one) and push the new Book's _id to the Library's `books` array
            // { new: true } tells the query that we want it to return the updated Library -- it returns the original by default
            // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
            return db.User.findOneAndUpdate({}, { $push: { books: dbSub._id } }, { new: true });
          })
           .catch(err => res.status(422).json(err));
       }
}