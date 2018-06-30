const router = require("express").Router();
const userRoutes = require("./users");
const subscriptionRoutes = require('./subscriptions')
const categoryRoutes = require('./categories')
// Book routes
router.use('/users', userRoutes);
router.use('/subscriptions', subscriptionRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
