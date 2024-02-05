import mongoose from "mongoose";

// se cres y se exporta una funcio db que hace coneccion a la base de datos de mongo
export const Db = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://aldairtorres507:chepe31278@cluster0.1fbto0o.mongodb.net/RpmBack"
    );
    console.log("db connection established");
  } catch (error) {
    console.log(error);
  }
};
