const router = require("express").Router();
const userRoutes = require("./users");
const subscriptionRoutes = require('./subscriptions')
const categoryRoutes = require('./categories')
const usersubscriptionRoutes = require('./usersubscriptions')
// Book routes
router.use('/users', userRoutes);
router.use('/subscriptions', subscriptionRoutes);
router.use('/categories', categoryRoutes);
router.use('/usersubscriptions', usersubscriptionRoutes);

module.exports = router;
