const validUrl = require("valid-url");
const { nanoid } = require("nanoid");
const Url = require("../models/Url");
const { baseUrl } = require("../config/");

module.exports = {
	async home(req, res) {
		try {
			const url = await Url.findOne({ urlCode: req.params.code });
			url ? res.redirect(url.longUrl) : res.status(404).json("No url found");
		} catch (err) {
			console.error(err);
			res.status(500).json("Server error");
		}
	},

	async shorten(req, res) {
		const { longUrl } = req.body;
		!validUrl.isUri(baseUrl) ? res.status(401).json("Invalid base url") : null;
		const urlCode = nanoid();
		if (validUrl.isUri(longUrl)) {
			try {
				let url = await Url.findOne({ longUrl });
				if (url) {
					res.json(url);
				} else {
					const shortUrl = baseUrl + "/" + urlCode;
					url = new Url({
						longUrl,
						shortUrl,
						urlCode,
						date: new Date(),
					});
					await url.save();
					res.json(url);
				}
			} catch (err) {
				console.error(err);
				res.status(500).json("Server error");
			}
		} else {
			res.status(401).json("Invalid long url");
		}
	},
};
