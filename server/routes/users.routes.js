import { Router } from "express";
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/users.controllers.js";

const router = Router();

router.get("/users", getUsers);

router.get("/users/:user_id", getUser);

router.post("/users/", createUser);

router.put("/users/:user_id", updateUser);

router.delete("/users/:user_id", deleteUser);

export default router;
