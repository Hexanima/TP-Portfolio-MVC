const express = require("express");
const router = express.Router();
const controller = require("../controllers/mainController");

router.get("/", controller.home);
router.get("/about", controller.about);
router.get("/login", controller.about);

module.exports = router;