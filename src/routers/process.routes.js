import { Router } from "express";
import operation from "../controllers/process.controller.js";
import authenticate from "../middlewares/authenticate.middleware.js";
import validate from "../middlewares/validation.middleware.js";
import urlSchema from "../schemas/url.schema.js";
const process = Router();

process.post("/urls/shorten", authenticate, validate(urlSchema), operation.registerUrl);
process.get("/urls/:id", operation.getUrl);
process.get("/urls/open/:shortUrl", operation.openUrl);
process.delete("/urls/:id", authenticate, operation.deleteUrl);

export default process;
