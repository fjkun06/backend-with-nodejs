import express from "express";
import { movieRouter } from "./movie/index.js";

const app = express();

function log(req, res, next) {
  console.log(req.url);
  next();
}

app.use(log)
app.use("/movie", movieRouter);
app.get("/", (req, res) => res.redirect("/movie"));
// app.get("/", (req, res) => res.send("Movie Database App"));

app.listen(8080, () => console.log("Server listening on port 8080"));
