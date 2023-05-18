const authenticate = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization?.replace("Bearer ", "");
    if (!token) return res.sendStatus(401);

    next();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default authenticate;
