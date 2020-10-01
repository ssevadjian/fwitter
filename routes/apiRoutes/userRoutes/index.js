const router = require("express").Router();

// /api/users prepended to every Route
router.route("/").get((req, res) => {
  res.send("Hello");
});

module.exports = router;
