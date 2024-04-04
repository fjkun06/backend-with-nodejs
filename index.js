import express from "express";

const app = express();

app.get("/", (req, res) => res.send("My first Express application"));

app.listen(8080, () =>
  console.log("Movie database accessible at http://localhost:8080")
);
