const { port, host } = require("./app/config/");
const app = require("./server");

app.listen(port, async () => {
	console.log(`Server is running on http://${host}:${port}`);
});
