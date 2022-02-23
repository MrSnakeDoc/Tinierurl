const db = require("../database");

module.exports = class CoreModel {
	constructor(data = {}) {
		for (const prop in data) {
			this[prop] = data[prop];
		}
	}

	static async getArray(...args) {
		try {
			return (await db.query(...args)).rows;
		} catch (err) {
			console.log(err.message);
			throw err;
		}
	}

	static async getRow(...args) {
		try {
			return (await this.getArray(...args))[0];
		} catch (err) {
			console.log(err.message);
			throw err;
		}
	}
};
