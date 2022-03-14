const express = require("express");
var cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
var fs = require("fs");
const booksRead = require("./src/db/booksRead.json");

const port = 4000;

app.post("/add", (res, req) => {
  console.log(res.body);

  fs.readFile("./src/db/booksRead.json", function (err, data) {
    var json = JSON.parse(data);
    json.push(res.body);

    fs.writeFile("./src/db/booksRead.json", JSON.stringify(json), (err) => {
      if (err) console.log(err);
    });
  });
});

app.listen(port);
console.log("Port running at " + port);
