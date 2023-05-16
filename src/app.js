import express from "express";
import { config } from "dotenv";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

config();

server.listen(process.env.PORT);
