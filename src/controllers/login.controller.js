import login from "../repositories/loginRepository.js";

const signup = async (req, res) => {
  try {
    await login.signup(req.body);

    return res.sendStatus(201);
  } catch (err) {
    return res.status(409).send({ message: err.message });
  }
};

const signin = async (req, res) => {
  const id = res.locals.user;

  try {
    const token = await login.signin(id);

    res.status(200).send({ token: token });
  } catch (err) {
    console.log(err);
    return res.status(401).send({ message: err.message });
  }
};
export default { signup, signin };
