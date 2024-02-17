//imports
import Express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import MotoviajeroRoutes from "./routes/Motoviajero.Routes.js";
import MotoRouter from "./routes/motos.routes.js";
import RutaRouter from "./routes/rutas.routes.js";
import AdminRouter from './routes/admin.routes.js'

//express variable
const app = Express();

//CORS Options
const corsOptions = {
  origin: "*",
  credentials: true,
  optionsSuccessStatus: 200,
};

//middlewares
app.use(Express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(cookieParser());
//API Endpoints
app.use("/api", MotoviajeroRoutes);
app.use("/api", MotoRouter);
app.use("/api", RutaRouter);
app.use('/api', AdminRouter)

//exporting the app
export default app;
