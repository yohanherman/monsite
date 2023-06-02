const router = require("express").Router();

router.get("/acceuil", (req, res) => {
  res.render("acceuil");
});

router.get("/form", (req, res) => {
  res.render("form");
});
router.get("/commentaire", (req, res) => {
  res.render("commentaire");
});

router.get("/inscription", (req, res) => {
  res.render("inscription");
});

module.exports = router;
