const router = require("express").Router();
const ctrl = require("../javascripts/controllers/pageroutes");
const ctrl2 = require("../javascripts/controllers/controlrequete");

/*affichage des pages views */

router.get("/acceuil", ctrl.acceuil);
router.get("/commentaire", ctrl.commentaire);
router.get("/connexion", ctrl.connexion);
router.get("/inscription", ctrl.inscription);

router.post("/commentaires", ctrl2.postComment);
router.get("/commentaires", ctrl2.getAllComments);

module.exports = router;
