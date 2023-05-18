import db from "../database/db.database.js";
import { nanoid } from "nanoid";

const registerUrl = (req, res) => {
  res.status(201).send({
    id: 1,
    shortUrl: "a8745bcf", // aqui o identificador que for gerado
  });
};

const getUrl = (req, res) => {
  const { id } = req.params;
  try {
    res.status(200).send({
      id: 1,
      shortUrl: "bd8235a0",
      url: "https://...",
    });
  } catch (error) {
    //Caso a url encurtada não exista, responder com status code 404.
    res.status(404).send({ message: "URL not found" });
  }
};

const openUrl = (req, res) => {
  //Redirecionar o usuário para o link correspondente.
  //Procure por res.redirect.
  const { shortUrl } = req.params;
  try {
    res.redirect(301, "https://...");
  } catch (error) {
    res.status(404).send({ message: "URL not found" });
  }
};
const deleteUrl = (req, res) => {
  const { id } = req.params;
  //Remover a url encurtada do banco de dados.

  // Deve responder com status code 401 quando a url encurtada não pertencer ao usuário.

  //Se a url for do usuário, deve responder com status code 204 e excluir a url encurtada.

  //Caso a url encurtada não exista, responder com status code 404.
  try {
    res.status(204).send();
  } catch (error) {
    res.status(404).send({ message: "URL not found" });
  }
};

export default { registerUrl, getUrl, openUrl, deleteUrl };
