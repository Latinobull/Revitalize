const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({

  title: { type: String, required: true },
  calories: { type: String, required: true },
  ingridents: { type: String, required: true },
  url: { type: Date, required: true },
  healthLabel: { type: String, required: true },
  image: { type: String, required: true },
 
});

const recipeDB = mongoose.model("Recipe", recipeSchema);

module.exports = recipeDB;