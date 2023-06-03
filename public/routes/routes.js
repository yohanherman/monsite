const router = require("express").Router();
const ctrl = require("../javascripts/controllers/pageroutes");
const Comments = require("../javascripts/models/modcomment");

/*affichage des pages views */

router.get("/acceuil", ctrl.acceuil);
router.get("/commentaire", ctrl.commentaire);
router.get("/connexion", ctrl.connexion);
router.get("/inscription", ctrl.inscription);

router.post("/commentaires", (req, res, next) => {
  delete req.body._id;
  const comment = new Comments({
    ...req.body,
  });

  comment
    .save()
    .then(() => res.status(201).json({ message: "commentaire crée" }))
    .catch((err) => res.status(500).json({ err }));
});

module.exports = router;
