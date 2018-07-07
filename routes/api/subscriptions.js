const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionsController");
router
  .route("/music") //ADDED
  .get(subscriptionsController.findMusic)

//matches with "/api/subscriptions"
router.route("/")
  .get(subscriptionsController.findAll)
  .post(subscriptionsController.create);

// Matches with "/api/subscriptions/:id"
router
  .route("/:id")
  .get(subscriptionsController.findById)
 // .put(subscriptionsController.update)
  // .delete(subscriptionsController.remove);



  module.exports = router;
