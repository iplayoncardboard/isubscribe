const db = require('../models');

module.exports= {
    findByEmail: function(req, res) {
        db.UserSubscription
          .find(req.params.email)
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      },
      create: (req, res) =>{
        console.log('Controller returning req.body: ' + req.body);
         db.UserSubscription
           .create(req.body)
           .then(dbModel => res.json(dbModel))
          //  .then(function(dbSub) {
          //   return db.User.findOneAndUpdate({email:req.params.email}, { $push: { subscriptions: dbSub._id } }, { new: true });
          // })
           .catch(err => res.status(422).json(err));
       }
}