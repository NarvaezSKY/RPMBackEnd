import Express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import MotoviajeroRoutes from "./routes/Motoviajero.Routes.js";
import MotoRouter from "./routes/motos.routes.js";
import RutaRouter from "./routes/rutas.routes.js";
import AdminRouter from './routes/admin.routes.js';
import PQRSRouter from './routes/PQRS.routes.js';
import gasRouter from './routes/gas.routes.js'
import presupuestoRouter from './routes/presupuesto.routes.js'

const app = Express();

const corsOptions = {
  origin: ["http://localhost:5173", "https://rpm-back-end.vercel.app/", "https://rutasparamoteros.vercel.app"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(Express.json());
app.use(morgan("dev"));
app.use(cors(corsOptions));
app.use(cookieParser());

app.options("*", cors(corsOptions));

app.use("/api", MotoviajeroRoutes);
app.use("/api", MotoRouter);
app.use("/api", RutaRouter);
app.use('/api', AdminRouter)
app.use('/api', PQRSRouter)
app.use('/api', gasRouter)
app.use('/api', presupuestoRouter)

export default app;
