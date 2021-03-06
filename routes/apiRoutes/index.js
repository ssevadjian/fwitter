const router = require('express').Router();
const userRoutes = require('./userRoutes');

// /api/users prepended to every Route
router.use('/users', userRoutes);

module.exports = router;
