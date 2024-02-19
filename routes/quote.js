const express = require("express");
const controller = require("../controller/quote");
const router = express.Router();

router
  .post("/", controller.create)
  .get("/", controller.getAll)
  .get("/:id", controller.get)
  .put("/:id", controller.update)
  .delete("/:id", controller.remove);

exports.router = router;
