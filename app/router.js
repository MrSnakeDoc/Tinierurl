const { Router } = require("express");
const { homePage, home, shorten } = require("./controllers/controller.js");

const router = Router();

router.use("/favicon.ico", (req, res) => {
	res.status(204);
	res.end();
});

router.get("/", homePage).get("/:code", home).post("/api/url/shorten", shorten);

module.exports = router;
