const CoreModel = require("./CoreModel");

/**
 * @typedef {Object} Animal
 * @property {number} id
 * @property {string} urlCode
 * @property {string} longUrl
 * @property {string} shortUrl
 * @property {date} created_at
 * @property {date} updated_at
 */
module.exports = class Url {
	constructor(obj = {}) {
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Animals from database
	 * @static
	 * @async
	 * @returns {Array<Url>} All Animals in database
	 * @throw {err} An err
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM url");
			return results.map((result) => new Url(result));
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Retrieves one Animal from database
	 * @static
	 * @async
	 * @returns {Object<Url>} One Animal in database
	 * @throw {err} An err
	 */
	static async findOne(id) {
		try {
			const result = await CoreModel.getRow("SELECT * FROM url WHERE id=$1", [
				id,
			]);
			return result ? new Url(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Retrieves one Animal from database
	 * @static
	 * @async
	 * @returns {Object<Url>} One Animal in database
	 * @throw {err} An err
	 */
	static async findParam(param, code) {
		try {
			const result = await CoreModel.getRow(
				`SELECT * FROM url WHERE ${param}=$1`,
				[code]
			);
			return result ? new Url(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Creates a new Animal in database
	 * @async
	 * @returns {Object<Url>} Creates a new Animal in database
	 * @throw {err} An err
	 */
	async save() {
		try {
			// We select the add function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM add_url($1)", [
				this,
			]);
			return result ? new Url(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Updates a Animal in database
	 * @async
	 * @returns {Object<Url>} Updates a Animal in database
	 * @throw {err} An err
	 */
	async update() {
		try {
			// We select the update function create a database(example function in migrations/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM update_url($1)", [
				this,
			]);
			return result ? new Url(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
	/**
	 * Delete a Animal in database
	 * @async
	 * @returns {null} Delete an Animal in database
	 * @throw {err} An err
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from url where id = $1", [id]);
			return;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
};
