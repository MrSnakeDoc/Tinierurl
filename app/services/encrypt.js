const bcrypt = require("bcrypt");
const { salt } = require("../config");
module.exports = {
	async encrypt(password) {
		try {
			return await bcrypt.hash(password, salt);
		} catch (error) {
			throw error;
		}
	},
	async compare(password, hash) {
		return await bcrypt.compare(password, hash);
	},
};
