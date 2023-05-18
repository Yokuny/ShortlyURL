import db from "../database/db.database.js";

const rank = (req, res) => {
  res.status(200).send([
    {
      id: "id do usuário",
      name: "nome do usuário",
      linksCount: 5,
      visitCount: 100000,
    },
    {
      id: "id do usuário",
      name: "nome do usuário",
      linksCount: 3,
      visitCount: 85453,
    },
    {
      id: "id do usuário",
      name: "nome do usuário",
      linksCount: 10,
      visitCount: 0,
    },
    {
      id: "id do usuário",
      name: "nome do usuário",
      linksCount: 0,
      visitCount: 0,
    },
  ]);
};
export default rank;
