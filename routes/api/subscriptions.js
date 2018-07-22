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

  router
  .route("/art") 
  .get(subscriptionsController.findArt)

  router
  .route("/games") 
  .get(subscriptionsController.findGames)

  router
  .route("/books") 
  .get(subscriptionsController.findBooks)

  router
  .route("/outdoor") 
  .get(subscriptionsController.findOutdoor)

  router
  .route("/sport") 
  .get(subscriptionsController.findSport)

  router
  .route("/pets") 
  .get(subscriptionsController.findPets)

  router
  .route("/children") 
  .get(subscriptionsController.findChildren)

  router
  .route("/photos") 
  .get(subscriptionsController.findPhotos)
 
  // router
  // .route("/events") 
  // .get(subscriptionsController.findEvents)

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
