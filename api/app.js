//imports
import  Express  from "express";
import  cors  from "cors"
import  morgan  from "morgan";
import  cookieParser  from "cookie-parser";
import  MotoRouter  from "./routes/motos.routes.js";
import RutaRouter from './routes/rutas.routes.js'

//express variable
const app=Express()

//CORS Options
const corsOptions={
    origin: 'https://localhost:5173',
    credentials: true,
    optionsSuccessStatus: 200,
}

//middlewares
app.use(Express.json())
app.use(morgan('dev'))
app.use(cors(corsOptions))
app.use(cookieParser())


//API Endpoints
app.use('/api', MotoRouter)
app.use('/api', RutaRouter)

//exporting the app
export default app