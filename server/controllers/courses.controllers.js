import { pool } from "../db.js";

export const getCourses = (req, res) => {
  res.send("Obteniendo cursos");
};

export const getCourse = (req, res) => {
  res.send("Obteniendo un curso");
};

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

export const updateCourse = (req, res) => {
  res.send("Actualizando curso");
};

export const deleteCourse = (req, res) => {
  res.send("Eliminando curso");
};
