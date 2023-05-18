import { Router } from "express";
import rank from "../controllers/raking.controller.js";

const ranking = Router();

ranking.get("/ranking", rank);

export default ranking;
