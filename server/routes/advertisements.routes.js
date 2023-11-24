/*import { Router } from "express";
import {
  getAdvertisements,
  getAdvertisementsByCode,
  createAdvertisement,
  updateAdvertisement,
  deleteAdvertisement,
} from "../controllers/advertisements.controllers.js";

const router = Router();

router.get("/advertisements", getAdvertisements);

router.get("/advertisements/:code", getAdvertisementsByCode);

router.post("/advertisements", createAdvertisement);

router.put("/advertisements/:code", updateAdvertisement);

router.delete("/advertisements/:code", deleteAdvertisement);

export default router;*/
// Importa express y cualquier cosa necesaria
import { Router } from "express";
import { getAdvertisementsByCourse, getAdvertisement, createAdvertisement, updateAdvertisement, deleteAdvertisement } from "../controllers/advertisements.controllers.js";

const router = Router();

router.get("/advertisements", getAdvertisementsByCourse); // Cambiada la ruta para obtener anuncios por curso
router.get("/advertisements/:code", getAdvertisement);
router.post("/advertisements", createAdvertisement);
router.put("/advertisements/:code", updateAdvertisement);
router.delete("/advertisements/:code", deleteAdvertisement);

export default router;
