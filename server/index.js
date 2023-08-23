import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import indexRoutes from "./routes/index.routes.js";
import courseRoutes from "./routes/courses.routes.js";

const app = express();

app.use(cors(
    //{ origin: 'https://localhost:5173'}
));
app.use(express.json());

app.use(indexRoutes);
app.use(courseRoutes);

app.listen(PORT);
console.log(`Server listening on port ${PORT}`);


