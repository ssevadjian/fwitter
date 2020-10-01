const router = require('express').Router();
const userRoutes = require('/userRoutes');

// /api/users prepended to every Route
router.user('/users', userRoutes);
// api prepended to every Route
router.get('/', (req, res) => {
  res.send('Hello');
});

module.exports = router;
