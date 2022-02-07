const { Router } = require("express");
const { home, shorten } = require("./controllers/controller.js");

const router = Router();

router.get("/:code", home);
router.post("/api/url/shorten", shorten);

module.exports = router;
