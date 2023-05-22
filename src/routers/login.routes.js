import { Router } from "express";
import acess from "../controllers/login.controller.js";
import validate from "../middlewares/validation.middleware.js";
import email from "../middlewares/email.middleware.js";
import user from "../middlewares/user.middleware.js";
import signupSchema from "../schemas/signup.schema.js";
import signinSchema from "../schemas/signin.schema.js";

const login = Router();

login.post("/signup", validate(signupSchema), email, acess.signup);
login.post("/signin", validate(signinSchema), user, acess.signin);

export default login;
