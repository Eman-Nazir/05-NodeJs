const fs = require("fs");
const path = require("path");
const baseFolder = __dirname;
// Create Folder
const folderPath = path.join(baseFolder, "my-docs/first/second");
fs.mkdirSync(folderPath, { recursive: true });
console.log("Folder created at:", folderPath);
// File paths INSIDE base folder
const writeFilePath = path.join(baseFolder, "write.txt");
const copyFilePath = path.join(baseFolder, "copy.txt");
// Write File (Sync)
fs.writeFileSync(writeFilePath, "Hello Node.js Sync\n");
// Write File (Async)
fs.writeFile(writeFilePath, "Hello Async Node.js\n", (err) => {
    if (err) console.log(err);
    else console.log("Async Write Completed");
});
// Read File (Sync)
const data = fs.readFileSync(writeFilePath, "utf-8");
console.log("Sync Read:\n", data);
// Read File (Async)
fs.readFile(writeFilePath, "utf-8", (err, result) => {
    if (err) console.log(err);
    else console.log("Async Read:\n", result);
});
// Append File
fs.appendFileSync(writeFilePath, "Appending new line via appendFileSync\n");
// Copy File
fs.copyFileSync(writeFilePath, copyFilePath);
console.log("File copied to:", copyFilePath);
// ----------------------
// Delete Copied File
fs.unlinkSync(copyFilePath);
console.log("Copied file deleted");
// ----------------------
// Check if File exists
console.log("Is write.txt a file?", fs.statSync(writeFilePath).isFile());
