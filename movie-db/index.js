import express from "express";
import { movieRouter } from "./movie/index.js";
import morgan from "morgan";
import { createWriteStream } from "fs";

const app = express();
//logging to file
const accessLogStream = createWriteStream("access.log", { flags: "a" });

app.use(morgan("common", { immediate: true, stream: accessLogStream }));
app.use("/movie", movieRouter);
app.get("/", (req, res) => res.redirect("/movie"));
// app.get("/", (req, res) => res.send("Movie Database App"));

app.listen(8080, () => console.log("Server listening on port 8080"));
