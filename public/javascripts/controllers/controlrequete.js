const express = require("express");
const Comments = require("../models/modcomment");

exports.postComment = (req, res, next) => {
  delete req.body._id;
  const comment = new Comments({
    ...req.body,
  });

  comment
    .save()
    .then(() => res.status(201).json({ message: "commentaire crée" }))
    .catch((err) => res.status(500).json({ err }));
};

exports.getAllComments = (req, res, next) => {
  Comments.find()
    .then((commentaires) => res.status(200).json({ commentaires }))
    .catch((err) => res.status(500).json(err));
  console.log(req.body);
};
