import process from "../repositories/processRepository.js";

const registerUrl = async (req, res) => {
  try {
    const line = await process.registerUrl(res.locals.user, req.body.url);

    res.status(201).send({
      id: line.id,
      shortUrl: line.shortUrl,
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const getUrl = async (req, res) => {
  try {
    const line = await process.getUrl(req.params.id);
    if (!line) return res.status(404).send({ message: "URL not found" });

    res.status(200).send({
      id: line.id,
      shortUrl: line.shortUrl,
      url: line.url,
    });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const openUrl = async (req, res) => {
  try {
    const url = await process.openUrl(req.params.shortUrl);
    if (!url) return res.status(404).send({ message: "URL not found" });

    return res.redirect(302, url);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const deleteUrl = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(401).send({ message: "Missing url id" });

  try {
    const line = await process.getUrl(id);
    if (!line) return res.status(404).send({ message: "URL not found" });

    if (line.userId !== parseInt(res.locals.user)) return res.status(401).send({ message: "Unauthorized" });

    await process.deleteUrl(id);

    res.sendStatus(204);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { registerUrl, getUrl, openUrl, deleteUrl };
