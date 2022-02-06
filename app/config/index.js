const devConfig = require("./dev.js");
const prodConfig = require("./prod.js");

const env = process.env.NODE_ENV;

let envConfig = {};

switch (env) {
	case "development":
	case "dev":
		module.exports = devConfig;
		break;

	case "production":
	case "prod":
		module.exports = prodConfig;
		break;

	default:
		module.exports = devConfig;
}
