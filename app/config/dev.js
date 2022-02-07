module.exports = {
	host: process.env.HOST || "localhost",
	port: process.env.PORT || 5000,
	mongo_url: process.env.MONGO_URL,
	baseUrl: process.env.BASE_URL,
	redis_url: process.env.REDIS_URL,
};
