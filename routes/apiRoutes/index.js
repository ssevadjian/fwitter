const router = require('express').Router();

// api prepended to every Route
router.get('/', (req, res) => {
  res.send('Hello');
});

module.exports = router;
