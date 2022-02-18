const validUrl = require("valid-url");
const { nanoid } = require("nanoid");
const { Url } = require("../models/");
const { baseUrl } = require("../config/");

module.exports = {
	async home(req, res) {
		try {
			const url = await Url.findParam("urlCode", req.params.code);
			url ? res.redirect(url.longurl) : res.status(404).json("No url found");
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
				const url = await Url.findParam("longUrl", longUrl);
				if (url) {
					res.json(url);
				} else {
					const shortUrl = baseUrl + "/" + urlCode;
					const result = await new Url({
						urlCode,
						longUrl,
						shortUrl,
					}).save();
					res.json(result);
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
