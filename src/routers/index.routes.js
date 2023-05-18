import { Router } from "express";
import login from "./login.routes.js";

const router = Router();

router.use(login);

export default router;
