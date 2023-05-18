import { Router } from "express";
import acess from "../controllers/login.controller.js";
import validate from "../middlewares/validation.middleware.js";
import signupSchema from "../schemas/signup.schema.js";
import signinSchema from "../schemas/signin.schema.js";

const login = Router();

login.post("/signup", validate(signupSchema), acess.signup);
login.post("/signin", validate(signinSchema), acess.signin);

export default login;
