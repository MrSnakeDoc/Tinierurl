module.exports = {
	host: process.env.HOST || "localhost",
	port: process.env.PORT || 8080,
	mongo_url: process.env.MONGO_URL,
	baseUrl: process.env.DOMAIN,
	redis_url: process.env.REDISCLOUD_URL,
};
