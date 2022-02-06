const basicInfo = require("./basicInfo.js");
const servers = require("./servers.js");
const tags = require("./tags.js");
const components = require("./components.js");
const paths = require("./paths.js");

module.exports = {
	...basicInfo,
	...servers,
	...tags,
	...components,
	...paths,
};
