const mongoose = require("mongoose");
const { mongo_url } = require("./config/");

module.exports = async () => {
	try {
		await mongoose.connect(mongo_url, {
			useNewUrlParser: true,
		});
		console.log("MongoDB Connected");
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};
