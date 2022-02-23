const sanitizer = require("sanitizer");

module.exports = (req, res, next) => {
	if (req.body) {
		for (let propName in req.body) {
			req.query[propName] = sanitizer.escape(req.body[propName]);
		}
	}
	next();
};
