import express from "express";
import cors from "cors";
import { connnectDB } from "./config/db.js";

// app config
const app = express();
const port = 4000;
//middleware
app.use(express.json());
app.use(cors());
//db connection
connnectDB();

app.get("/", (req, res) => {
  res.send("Hello from backend");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
