import { pool } from "../db.js";

//Obtain all advertisements
export const getAdvertisements = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM advertisements ORDER BY createAt ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Obtain advertisement by code
export const getAdvertisement = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM advertisements WHERE code = ?",
    [req.params.code]
  );
  if (result.length === 0) {
    return res.status(404).json({ message: "Advertisement not found" });
  }
  res.json(result[0]);
};

//Create advertisement
export const createAdvertisement = async (req, res) => {
  try {
    const { advertisement_title, advertisement_description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO advertisements (advertisement_title, advertisement_description) VALUES (?, ?)",
      [advertisement_title, advertisement_description]
    );
    res.json({
      id: result.insertId,
      advertisement_title,
      advertisement_description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Update advertisement
export const updateAdvertisement = async (req, res) => {
  try {
    const result = await pool.query(
      "UPDATE advertisements SET ? WHERE code = ?",
      [req.body, req.params.code]
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Delete advertisement
export const deleteAdvertisement = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM advertisements WHERE code = ?",
      [req.params.code]
    );
    if (result.affectedRows === 0) {
      return res.sendStatus(404).json({ message: "advertisement not found" });
    }
    return result.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
