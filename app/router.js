const { Router } = require("express");
const controller = require("./controllers/controller.js");
const {
	validateBody,
	validateQuery,
} = require("./middlewares/validationMW.js");
const { bodySchema, querySchema } = require("./schemas");

const bodyValidation = validateBody(bodySchema);
const queryValidation = validateQuery(querySchema);

const router = Router();

router.get("/").get("/findall").post("/delete");

module.exports = router;
