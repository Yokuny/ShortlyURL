import db from "../database/db.database.js";

const getUser = (req, res) => {
  res.status(200).send({
    id: "id do usuário",
    name: "nome do usuário",
    visitCount: "soma da quantidade de visitas de todos os links do usuário",
    shortenedUrls: [
      {
        id: 1,
        shortUrl: "...",
        url: "...",
        visitCount: "soma da quantidade de visitas do link",
      },
      {
        id: 2,
        shortUrl: "...",
        url: "...",
        visitCount: "soma da quantidade de visitas do link",
      },
    ],
  });
};
export default getUser;
