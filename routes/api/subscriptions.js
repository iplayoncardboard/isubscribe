const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionsController");

//category routes
router
  .route("/music")
  .get(subscriptionsController.findMusic)

router
  .route("/food") 
  .get(subscriptionsController.findFood)

router
  .route("/fashion") 
  .get(subscriptionsController.findFashion)

router
  .route("/video") 
  .get(subscriptionsController.findVideo)

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
