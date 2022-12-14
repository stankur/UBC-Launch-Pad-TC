import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import apiRouter from "./routes/apiRouter"

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
	res.send("Express + TypeScript Server");
});

app.use("/api", apiRouter);

app.listen(port, () => {
	console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
