import { Router } from "express";
import login from "./login.routes.js";
import process from "./process.routes.js";

const router = Router();

router.use(login);
router.use(process);

export default router;
