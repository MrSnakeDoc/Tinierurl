require("dotenv").config();
const express = require("express");
const session = require("express-session");
const cors = require("cors");
const { secret } = require("./app/config/index.js");
const bodySanitizer = require("./app/middlewares/bodySanitizer");
const router = require("./app/router.js");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "pug");
app.set("views", "./app/templates");

app.use(express.static("./app/public"));

app.use(
	session({
		secret: secret,
		resave: true,
		saveUninitialized: true,
		cookie: {
			secure: false,
			maxAge: 2000 * 60 * 60,
		},
	})
);

app.use(bodySanitizer);

app.use(router);

app.use((_, res) => {
	res.status(404).send("404 not found");
});

module.exports = app;
