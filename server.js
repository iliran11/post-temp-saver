const express = require("express");
const app = express();
const port = 3000;
let posts = {
  0: "test",
};
let id = 1;
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

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
