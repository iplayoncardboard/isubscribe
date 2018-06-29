const router = require("express").Router();
const userRoutes = require("./users");
const subscriptionRoutes = require('./subscriptions')
// Book routes
router.use('/users', userRoutes);
router.use('/subscriptions', subscriptionRoutes);

module.exports = router;
