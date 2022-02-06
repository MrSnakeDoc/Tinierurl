const client = require("../database.js");

/**
 * @typedef {Object} Boardgame
 * @property {number} id
 * @property {string} name
 * @property {string} author
 * @property {string} editor
 * @property {number} min_players
 * @property {number} max_players
 * @property {number} min_age
 */

module.exports = class Category {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all boardgames from database
	 * @static
	 * @async
	 * @returns {Array<Boardgame>} all boardgames in database
	 * @throws {Error} An error
	 */
	static async findAll() {
		const { rows } = await client.query(
			"SELECT * FROM category JOIN post ON (post.category_id = category.id)"
		);
		return rows.map((row) => new Category(row));
	}
};
