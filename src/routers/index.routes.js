import { Router } from "express";
import login from "./login.routes.js";
import process from "./process.routes.js";
import user from "./user.routes.js";
import ranking from "./ranking.routes.js";

const router = Router();

router.use(login);
router.use(process);
router.use(user);
router.use(ranking);

export default router;
