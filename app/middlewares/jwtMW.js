const jwt = require("../services/jwt");
const { host_online } = require('../config/');

module.exports = (req, res, next) => {
	try {
		if (
			req.headers.host === "localhost:5000" ||
			req.headers.host ===  host_online ||
			req.headers.host.startsWith(`127.0.0.1`)
		) {
			next();
		} else {
			const token =
				req.headers.authorization && req.headers.authorization.split(" ")[1];
			if (!token) {
				return res.sendStatus(401);
			}
			const payload = jwt.validateToken(token);
			if (!payload.data) {
				return res.sendStatus(403);
			}
			req.user = payload.data;
			next();
		}
	} catch (error) {
		console.log(error);
		res.status(401).json(error);
	}
};
