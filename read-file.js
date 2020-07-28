const fs = require("fs");

// Read fil synchronously
let content = fs.readFileSync("./README.md", { encoding: "utf8" });

console.log("content: ", content);

// Read fil synchronously
fs.readFile("./README.md", { encoding: "utf8" }, (error, data) => {
	if (error) {
		console.log(error.message);
	} else {
		console.log(data);
	}
});
