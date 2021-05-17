/* eslint-disable no-console */
const fs = require("fs");
const path = require("path");
const mockMusic = require("./mockMusics");

const { songs, singers, albums } = mockMusic;
const data = JSON.stringify({ songs, singers, albums });
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function (err) {
  err ? console.log(err) : console.log("Mock DB created.");
});
