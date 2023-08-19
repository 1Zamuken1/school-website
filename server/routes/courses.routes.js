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

router.get("/courses/:code", getCourse); //obtener una única tarea

router.post("/courses", createCourse); //crear

router.put("/courses/:code", updateCourse);

router.delete("/courses/:code", deleteCourse); //borrar una única tarea

export default router;
