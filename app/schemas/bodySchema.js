const Joi = require("joi");

module.exports = Joi.object({
	guest_id: Joi.number().integer().min(1).required(),
	attraction_id: Joi.number().integer().min(1).required(),
	seats_number: Joi.number().integer().min(1).required(),
	booking_time: Joi.string(),
});
