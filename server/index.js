import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import Connection from "./Connection.js";

const app = express();
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(express.json());
app.use(cookieParser());
dotenv.config();

//Connection to mongoDB
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

//Hosting on PORT
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running successfully on ${port}`);
});
