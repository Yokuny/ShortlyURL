import { Router } from "express";
import validate from "../middlewares/validation.middleware.js";
import authenticate from "../middlewares/authenticate.middleware.js";

const process = Router();

process.post("/urls/shorten", authenticate(), (req, res) => {
  res.send("Shorten URL");
});

export default process;
