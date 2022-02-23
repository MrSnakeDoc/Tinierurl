const Joi = require("joi");

module.exports = Joi.object({
	guest_id: Joi.number().integer().min(1).required(),
});
