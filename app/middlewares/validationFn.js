const { validateBody, validateParams } = require("./validationMW");
const { paramsSchema, bodySchema } = require("../schemas/");

module.exports = {
	bodyValidation: validateBody(bodySchema),
	paramsValidation: validateParams(paramsSchema),
};
