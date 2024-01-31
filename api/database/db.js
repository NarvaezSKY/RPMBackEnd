import mongoose from "mongoose";
import { DBNAME, DBUSERNAME, DBPASSWORD } from "../config/config.js";

export const connection = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DBUSERNAME}:${DBPASSWORD}@clusterrpm.shnscek.mongodb.net/${DBNAME}`);
    console.log('DB connected successfully');
 
  } catch (error) {
    console.error(error);
  }
};