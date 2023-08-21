import { pool } from "../db.js";

// Obtener todos los cursos
export const getCourses = async (req, res) => {
  const [result] = await pool.query(
    "SELECT * FROM courses ORDER BY course_title ASC"
  );
  res.json(result);
};

// Obtener un curso en específico
export const getCourse = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM courses WHERE code = ?", [
    req.params.code,
  ]);

  // Devolver error si no existe el curso solicitado
  if (result.length === 0) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(result[0]);
};

// Crear curso
export const createCourse = async (req, res) => {
  const { course_title, course_description } = req.body;
  const [result] = await pool.query(
    "INSERT INTO courses (course_title, course_description) VALUES (?, ?)",
    [course_title, course_description]
  );
  res.json({
    id: result.insertId,
    course_title,
    course_description,
  });
};

// Actualizar curso
export const updateCourse = async (req, res) => {
  try {
    const result = await pool.query("UPDATE courses SET ? WHERE code = ?", [
      req.body,
      req.params.code,
    ]);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Eliminar curso
export const deleteCourse = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM courses WHERE code = ?", [
      req.params.code,
    ]);
    if (result.affectedRows == 0) {
      return res.sendStatus(404).json({ message: "course not found" });
    }
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
