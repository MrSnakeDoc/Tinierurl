const { host_online } = require('../config/');

module.exports = (req, res, next) => {
	if (
		req.headers.host === "localhost:5000" ||
		req.headers.host === host_online ||
		req.headers.host.startsWith(`127.0.0.1`)
	) {
		next();
	} else {
		req.user.isadmin ? next() : res.sendStatus(403);
	}
};
