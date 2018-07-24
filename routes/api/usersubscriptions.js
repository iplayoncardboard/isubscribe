const router = require("express").Router();
const userSubscriptionController = require("../../controllers/userSubscriptionController");

// Matches with "/api/users"
router.route("/")
  .post(userSubscriptionController.create)
  .delete(userSubscriptionController.delete);

  router.route('/:email')
  .get(userSubscriptionController.findByEmail)
// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
