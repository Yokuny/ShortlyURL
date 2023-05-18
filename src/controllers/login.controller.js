const signup = (req, res) => {
  //Caso exista algum usuário cadastrado com o e-mail enviado no corpo da requisição, responder com status code 409.
  res.sendStatus(201);
};
const signin = (req, res) => {
  //Caso o usuário/senha não seja compatível (ou não exista), retornar o status code 401.
  res.status(200).send({ token: "MEUTOKEN" });
};
export default { signup, signin };
