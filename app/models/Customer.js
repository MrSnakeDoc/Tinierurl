const CoreModel = require("./CoreModel");

/**
 * @typedef {Object} Customer
 * @property {number} id
 * @property {string} email
 * @property {string} firstname
 * @property {string} lastname
 * @property {string} pseudo
 * @property {string} avatar
 * @property {date} created_at
 * @property {date} updated_at
 */
module.exports = class Customer {
	constructor(obj = {}) {
		delete obj.password;
		for (const prop in obj) {
			this[prop] = obj[prop];
		}
	}

	/**
	 * Retrieves all Customers from database
	 * @static
	 * @async
	 * @returns {Array<Customer>} All Customers in database
	 * @throw {Error} An error
	 */
	static async findAll() {
		try {
			const results = await CoreModel.getArray("SELECT * FROM customer");
			return results.map((result) => new Customer(result));
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Retrieves one Customer from database
	 * @static
	 * @async
	 * @returns {Object<Customer>} One Customer in database
	 * @throw {Error} An error
	 */
	static async findOne(id) {
		try {
			const results = await CoreModel.getRow(
				"SELECT * FROM customer where id = $1",
				[id]
			);
			return results ? new Customer(results) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Creates a new Customer in database
	 * @async
	 * @returns {Object<Customer>} Creates a new Customer in database
	 * @throw {err} An err
	 */
	async save() {
		try {
			// We select the add function create a database(example function in sqitch/deploy/function)
			const result = await CoreModel.getRow("SELECT * FROM add_customer($1)", [
				this,
			]);
			return result ? new Authentication(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Updates a Customer in database
	 * @async
	 * @returns {Object<Customer>} Updates a Customer in database
	 * @throw {Error} An error
	 */
	async update() {
		try {
			// We select the update function create a database(example function in sqitch/deploy/function)
			const result = await CoreModel.getRow(
				"SELECT * FROM update_customer($1)",
				[this]
			);
			return result ? new Customer(result) : undefined;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}

	/**
	 * Delete a Customer in database
	 * @async
	 * @returns {String} Delete a Customer in database
	 * @throw {Error} An error
	 */
	static async delete(id) {
		try {
			await CoreModel.getRow("delete from customer where id = $1", [id]);
			return;
		} catch (err) {
			if (err.detail) {
				throw new Error(err.detail);
			}
			throw err;
		}
	}
};
