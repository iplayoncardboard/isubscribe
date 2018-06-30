const router = require("express").Router();
const cagegoriesController = require("../../controllers/cagegoriesController");

router.route('/')
.get(cagegoriesController.findAll)

module.exports = router;
