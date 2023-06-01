const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("acceuil");
});

router.get("/form", (req, res) => {
  res.render("form");
});
router.get("/commentaire", (req, res) => {
  res.render("commentaire");
});

module.exports = router;
