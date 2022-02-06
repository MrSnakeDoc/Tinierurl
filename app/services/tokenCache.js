const { createClient } = require("redis");
const { redis_url } = require("../config/");
const db = createClient({ url: redis_url });
db.connect();

// oparadis:token: for the connect to redis
const prefix = "oparadis:token:";
const timeout = 7200;

module.exports = {
	async cache(id, refreshToken) {
		try {
			//! Once the timeout is over the info will be deleted from redis
			const key = `${prefix}${id}`;
			await db.set(key, refreshToken, { EX: timeout, NX: true });
			return;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},

	async verifyToken(id, token) {
		try {
			// Checks if token exists and compar
			const verifiedToken = await db.get(`${prefix}${id}`);
			return verifiedToken === token ? true : undefined;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},

	async deleteToken(id) {
		try {
			await db.del(`${prefix}${id}`);
			return true;
		} catch (err) {
			console.log(err);
			throw err;
		}
	},
};
