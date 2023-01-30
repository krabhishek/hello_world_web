import express, { Express, Request, Response } from "express";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import compression from "compression";

const app: Express = express();
app.use(morgan("dev"));
app.use(cors());
app.disable("x-powered-by");
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "./www")));
app.get("*", (_, res) => {
  res.setHeader("content-type", "text/html");
  res.sendFile(path.resolve(__dirname, "./www/index.html"));
});
const PORT = process.env.PORT || 8080;
const HOST = "localhost";

app.listen(PORT, () => {
  console.log(`Starting proxy server at ${HOST}:${PORT}`);
});
