require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const bodySanitizer = require("./app/middlewares/bodySanitizer");
const router = require("./app/router.js");
const docs = require("./app/docs/");

const app = express();

app.use("/docs", swaggerUi.serve, swaggerUi.setup(docs));

app.use(cors());

app.use(express.json());

app.use(bodySanitizer);

app.use(router);

app.use((_, res) => {
	res.status(404).send("404 not found");
});

module.exports = app;
