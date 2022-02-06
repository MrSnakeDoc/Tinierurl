const { createClient } = require("redis");
const { redis_url } = require("../config/");
const db = createClient({ url: redis_url });
db.connect();
const prefix = "oparadis:";
const timeout = 10;
const keys = [];

const cache = async (request, response, next) => {
	const key = `${prefix}${request.url}`;
	if (await db.exists(key)) {
		const cachedString = await db.get(key);
		const cachedValue = JSON.parse(cachedString);
		return response.json(cachedValue);
	}
	const originalResponseJson = response.json.bind(response);
	response.json = async (data) => {
		const str = JSON.stringify(data);
		keys.push(key);
		await db.set(key, str, { EX: timeout, NX: true });
		originalResponseJson(data);
	};
	next();
};

const flush = async (request, response, next) => {
	while ((key = keys.shift())) {
		await db.del(key);
	}
	next();
};

module.exports = { cache, flush };
