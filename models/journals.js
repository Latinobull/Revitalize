const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({

  author: { type: String, required: true },
  date: { type: Date, required: true },
  feelings: { type: String, required: true },
  gratitude: { type: String, required: true },
  thoughts: { type: String, required: true },
});

const journalDB = mongoose.model("Journal", journalSchema);

module.exports = journalDB;