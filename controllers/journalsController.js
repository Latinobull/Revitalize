const db = require("../models");

module.exports = {
    create: function(req, res) {
      console.log(req.body)
      db.Journals
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err =>{
        res.status(422).json(err)
        console.log(err)});
  },

  findAll: function(req, res) {
    console.log("api hit")
    db.Journals
      .find(req.query)
      .then(dbModel => {
        console.log(dbModel)
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
}