module.exports = {
	host: process.env.HOST || "localhost",
	port: process.env.PORT || 8080,
	pg_url: process.env.DATABASE_URL,
};
