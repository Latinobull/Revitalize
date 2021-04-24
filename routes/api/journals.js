const router = require("express").Router();
const JournalsController = require("../../controllers/journalsController");

router.route("/")
  .post(JournalsController.create)
  .get(JournalsController.findAll)

  module.exports = router;
