const db = require("../models");

module.exports = {
    create: function(req, res) {
    db.Journals
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

//   findByUser: function(req, res) {
//     db.Book
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
};