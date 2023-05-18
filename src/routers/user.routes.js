import { Router } from "express";
import authenticate from "../middlewares/authenticate.middleware.js";
import getUser from "../controllers/user.controller.js";
const user = Router();

user.get("/users/me", authenticate, getUser);

export default user;
