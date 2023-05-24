import process from "../repositories/rankingRepository.js";

const rank = async (req, res) => {
  try {
    const rankingData = await process.ranking();
    if (!rankingData) return res.status(404).json({ message: "Ranking not found" });

    return res.status(200).json(rankingData);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};
export default rank;
