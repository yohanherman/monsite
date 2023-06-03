require("../database/database");
const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  commentaire: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("commentaire", commentSchema);
module.exports = model;
