require("dotenv").config();
const { Pool } = require("pg");
// POOL allows you to limit connections to the database
let conf;

process.env.ONLINE === "true" || process.env.NODE_ENV === "prod"
	? (conf = {
			connectionString: process.env.DATABASE_URL,
			ssl: {
				rejectUnauthorized: false,
			},
	  })
	: (conf = {
			connectionString: process.env.PG_URL,
	  });

module.exports = new Pool(conf);
