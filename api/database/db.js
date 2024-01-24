import mongoose from "mongoose";
import { DBNAME, DBUSERNAME, DBPASSWORD } from "../config/config.js";

// const URI = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@clustertal.nubhn3b.mongodb.net/${process.env.DBNAME}`;
export const connection = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${DBUSERNAME}:${DBPASSWORD}@clusterrpm.shnscek.mongodb.net/${DBNAME}`);
    console.log('DB connected successfully');
 
  } catch (error) {
    console.error(error);
  }
};