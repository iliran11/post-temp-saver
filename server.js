const express = require("express");
const app = express();
const port = 3000;
var bodyParser = require("body-parser");

let posts = {};
let id = 1;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", (req, res) => res.send(posts));
app.post("/", (req, res) => {
  posts = {
    ...posts,
    [id]: {
      body: req.body,
      headers: req.headers,
    },
  };
  res.send(200);
});

app.listen(process.env.PORT || port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
