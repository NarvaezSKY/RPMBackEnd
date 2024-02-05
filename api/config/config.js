//define PORT variable from the enviroment
import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 3000;
export const DBUSERNAME = process.env.DBUSERNAME;
export const DBPASSWORD = process.env.DBPASSWORD;
export const DBNAME = process.env.DBNAME;
