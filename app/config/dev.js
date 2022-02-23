module.exports = {
	host: process.env.HOST || "localhost",
	port: process.env.PORT || 5000,
	pg_url: process.env.PG_URL,
	baseUrl: process.env.BASE_URL,
	secret: process.env.SECRET,
};
