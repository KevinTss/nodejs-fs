var fs = require("fs");
var path = require("path");

const emptyDirectory = (directory) => {
	if (!fs.existsSync(directory)) {
		return;
	}

	fs.readdir(directory, (err, files) => {
		if (err) throw err;

		for (const file of files) {
			if (fs.lstatSync(file).isDirectory()) {
				emptyDirectory(path.join(directory, path.basename(file)));
			} else {
				fs.unlink(path.join(directory, file), (err) => {
					if (err) throw err;
				});
			}
		}
	});
};

const copyFileSync = (source, target) => {
	let targetFile = target;

	if (fs.existsSync(target)) {
		if (fs.lstatSync(target).isDirectory()) {
			targetFile = path.join(target, path.basename(source));
		}
	}

	fs.writeFileSync(targetFile, fs.readFileSync(source));
};

const copyFolderRecursivelySync = (source, target) => {
	let files = [];
	let targetFolder = target;

	if (!fs.existsSync(targetFolder)) {
		fs.mkdirSync(targetFolder);
	}

	if (fs.lstatSync(source).isDirectory()) {
		files = fs.readdirSync(source);

		files.forEach((file) => {
			const currentSource = path.join(source, file);

			if (fs.lstatSync(currentSource).isDirectory()) {
				copyFolderRecursivelySync(
					currentSource,
					path.join(targetFolder, path.basename(currentSource))
				);
			} else {
				copyFileSync(currentSource, targetFolder);
			}
		});
	} else {
		console.log("Source is not a directory");
	}
};

emptyDirectory("./target");
copyFolderRecursivelySync("./source", "./target");
