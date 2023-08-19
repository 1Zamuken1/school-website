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
  if (result.length == 0) {
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
export const updateCourse = (req, res) => {
  res.send("Actualizando curso");
};

//Eliminar curso
export const deleteCourse = (req, res) => {
  res.send("Eliminando curso");
};
