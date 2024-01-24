//imports
import  Express  from "express";
import  cors  from "cors"
import  morgan  from "morgan";
import  cookieParser  from "cookie-parser";
import MotoviajeroRoutes from "./src/Routes/Motoviajero.Routes.js"
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

app.use(MotoviajeroRoutes)
//exporting the app
export default app