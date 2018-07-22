const router = require("express").Router();
const userSubscriptionController = require("../../controllers/userSubscriptionController");

// Matches with "/api/users"
router.route("/")
  .get(userSubscriptionController.findByEmail)
  .post(userSubscriptionController.create)
  .delete(userSubscriptionController.delete);

// // Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(usersController.findById)
//   .put(usersController.update)
//   .delete(usersController.remove);

module.exports = router;
