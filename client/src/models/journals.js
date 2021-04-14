const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const journalSchema = new Schema({

  author: { type: String, required: true },
  title: { type: String, required: true },
  date: { type: Date, required: true },
  body: { type: String, required: true },
});

const journalDB = mongoose.model("Journal", journalSchema);

module.exports = journalDB;