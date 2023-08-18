import { Router } from "express";
import {
  getCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse,
} from "../controllers/courses.controllers.js";

const router = Router();

router.get("/courses", getCourses); //obtener

router.get("/courses/:id", getCourse); //obtener una única tarea

router.post("/courses", createCourse); //crear

router.put("/courses/:id", updateCourse);

router.delete("/courses/:id", deleteCourse); //borrar una única tarea

export default router;
