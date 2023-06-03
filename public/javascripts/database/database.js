const mongoose = require("mongoose");

const modcomment = require("../models/modcomment");

require("../../../app");

(async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/mysite");
    console.log("base de données monsite connectée");
  } catch (err) {
    console.log(err.message);
  }
})();

//model pour les commentaires

/*const commentSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  commentaire: {
    type: String,
    required: true,
  },
}); */

//const model = mongoose.model("commentaire", commentSchema);
//module.exports = model;
