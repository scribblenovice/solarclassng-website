import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getGlobals } from "common-es";
import path from "path";

const { __dirname, __filename } = getGlobals(import.meta.url);
const app = express();
const buildPath = path.join(__dirname, "dist");
app.use(express.static(buildPath));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, " index.html"));
});
app.listen(3001, () => {
  console.log("Server running on port 3001");
});

