const { Router } = require("express");
const { homePage, home, shorten } = require("./controllers/controller.js");

const router = Router();

router.get("/", homePage).get("/:code", home).post("/api/url/shorten", shorten);

module.exports = router;
