const { port, host } = require("./app/config/");
const database = require("./app/database");
const app = require("./server");

database();

app.listen(port, async () => {
	console.log(`Server is running on http://${host}:${port}`);
});
