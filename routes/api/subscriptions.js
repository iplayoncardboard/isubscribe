const router = require("express").Router();
const subscriptionsController = require("../../controllers/subscriptionsController");


router.route("/")
  .post(subscriptionsController.create);



  module.exports = router;
