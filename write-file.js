const fs = require("fs");

// Write fil synchronously
// let content = fs.readFileSync("./README.md", { encoding: "utf8" });

// console.log("content: ", content);

// Write fil synchronously
// Will overwrite file with the same name
fs.writeFile("test.txt", "coucou", (error) => {
	if (error) {
		console.log(error.message);
	} else {
		console.log("File successfully written");
	}
});

// Write at the end of a file asynchronously
fs.appendFile("test.txt", "loleke", (error) => {
	if (error) {
		console.log(error.message);
	} else {
		console.log("File successfully written");
	}
});
