import process from "../repositories/userRepository.js";

const getUser = async (req, res) => {
  try {
    const userData = await process.getUser(res.locals.user);
    if (!userData) return res.status(404).json({ message: "User not found" });

    return res.status(200).json(userData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

export default getUser;
