require("express").Router();

exports.acceuil = (req, res) => {
  res.render("acceuil");
};
exports.commentaire = (req, res) => {
  res.render("commentaire");
};

exports.connexion = (req, res, next) => {
  res.render("connexion");
};
exports.inscription = (req, res, next) => {
  res.render("inscription");
};
