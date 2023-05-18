import express from "express";
import { config } from "dotenv";
import cors from "cors";
import routes from "./routers/index.routes.js";

const server = express();
config();

server.use(express.json());
server.use(cors());

server.use(routes);
server.listen(process.env.PORT);
