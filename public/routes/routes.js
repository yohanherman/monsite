const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("acceuil");
});

router.get("/sell", (req, res) => {
  res.render("sell");
});

module.exports = router;
