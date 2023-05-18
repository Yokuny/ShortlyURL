import { Router } from "express";
import acss from "../controllers/login.controller.js";

const login = Router();

login.post("/login", acss.login);
login.post("/logina", acss.login);

export default login;
