module.exports = {
	async homePage(req, res) {
		try {
			res.send();
		} catch (err) {
			res.json(new BaseError(err));
		}
	},
};
