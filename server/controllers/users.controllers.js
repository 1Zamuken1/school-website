import { pool } from "../db.js";

//Obtener todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM users ORDER BY user_name ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
// Obtener un usuario en especifico
export const getUser = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM users WHERE user_id = ?", [
    req.params.user_id,
  ]);
  if (result.length === 0) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(result[0]);
};

//Crear usuario
export const createUser = async (req, res) => {
  try {
    const { user_name, user_password } = req.body;
    const [result] = await pool.query(
      "INSERT INTO users (user_name, user_password) VALUES (?, ?)",
      [user_name, user_password]
    );
      res.json({
        user_id: result.insertId,
        user_name,
        user_password,
      });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Actualizar usuario
export const updateUser = async (req, res) => {
  try {
    const result = await pool.query("UPDATE user SET ? WHERE user_id = ?", [
      req.body,
      req.params.user_id,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar usuario
export const deleteUser = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM users WHERE user_id = ?", [
      req.params.user_id,
    ]);
    if (result.affectedRows === 0) {
      return res.sendStatus(404).json({ message: "User not found" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
