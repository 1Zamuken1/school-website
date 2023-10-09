import { Router } from "express";
import {
  getAdvertisements,
  getAdvertisement,
  createAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
} from "../controllers/advertisements.controllers.js";

export const router = Router();

router.get("/advertisements", getAdvertisements);

router.get("/advertisement/:code", getAdvertisement);

router.post("/advertisements", createAdvertisement);

router.put("/advertisements/:code", updateAdvertisement);

router.delete("/advertisements/:code", deleteAdvertisement);
