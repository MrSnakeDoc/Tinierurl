const bodySchema = require("./bodySchema.js");
const querySchema = require("./querySchema.js");

module.exports = {
	...bodySchema,
	...querySchema,
};
