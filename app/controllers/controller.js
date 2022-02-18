const validUrl = require("valid-url");
const { nanoid } = require("nanoid");
const { Url } = require("../models/");
const { baseUrl } = require("../config/");

module.exports = {
	homePage(req, res) {
		res.render("home");
	},

	async home(req, res) {
		try {
			const url = await Url.findParam("urlCode", req.params.code);
			url
				? res.redirect(301, url.longurl)
				: res.render("error", {
						error_title: "ERROR 404",
						error: "Error 404, are you lost ? Try another URL!",
				  });
		} catch (err) {
			res.render("error", {
				error_title: "ERROR 500",
				error: "Error 500",
			});
		}
	},

	async shorten(req, res) {
		const { longUrl } = req.body;
		if (!longUrl) {
			res.render("error", {
				error_title: "ERROR 400",
				error: "Error 400, are you sure you have paste the URL ?",
			});
		}
		!validUrl.isUri(baseUrl)
			? res.render("error", {
					error_title: "ERROR 400",
					error: "Error 400, are you sure you it's an URL ?",
			  })
			: null;
		const urlCode = nanoid();
		if (validUrl.isUri(longUrl)) {
			try {
				const url = await Url.findParam("longUrl", longUrl);
				if (url) {
					res.render("short", { shortUrl: url.shorturl });
				} else {
					const shortUrl = baseUrl + "/" + urlCode;
					const result = await new Url({
						urlCode,
						longUrl,
						shortUrl,
					}).save();
					res.render("short", { shortUrl: result.shorturl });
				}
			} catch (err) {
				res.render("error", {
					error_title: "ERROR 500",
					error: "Error 500",
				});
			}
		} else {
			res.render("error", {
				error_title: "ERROR 400",
				error: "Error 400, are you sure you it's an URL ?",
			});
		}
	},
};
