const express = require("express");
const CorsController = require("./corsController");

const router = express.Router();

router.route("/")
.get(CorsController.get)
.post(CorsController.post);

exports.default = router;