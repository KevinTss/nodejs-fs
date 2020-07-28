const fs = require("fs");

// Delete file synchronously
try {
	fs.unlinkSync("./example.txt");
} catch (error) {
	console.log("Error", error.message);
} finally {
	console.log("Deleting done.");
}

// Delete file asynchronously
fs.unlink("./example.txt", (error) => {
	if (error) {
		console.log("lol", error.message);
	} else {
		console.log("File successfully deleted!");
	}
});
