const client = require("../database.js");

module.exports = class Post {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	static async findAll() {
		try {
			const { rows } = await client.query(
				"SELECT * FROM post JOIN category ON (category.id = post.category_id)"
			);
			return rows.map((row) => new Post(row));
		} catch (error) {
			if (error.detail) {
				throw new Error(error.detail);
			}
			throw error;
		}
	}
	static async findOne(id) {
		const { rows } = await client.query(
			"SELECT * FROM post JOIN category ON (category.id = post.category_id) WHERE post.id=$1",
			[id]
		);
		return rows[0] ? new Post(rows) : undefined;
	}
	static async findByCategory(catId) {
		const { rows } = await client.query(
			"SELECT * FROM post JOIN category ON (category.id = post.category_id) WHERE category_id=$1",
			[catId]
		);
		return rows.map((row) => new Post(row));
	}

	static async createOne(param) {
		const { rows } = await client.query(
			'INSERT INTO post (category_id, slug, title, excerpt, "content") VALUES ($1, $2, $3, $4, $5) RETURNING *',
			[param.category_id, param.slug, param.title, param.excerpt, param.content]
		);
		return rows[0];
	}
};
