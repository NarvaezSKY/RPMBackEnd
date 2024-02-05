import Moto from "../models/motos.model.js";

export const getAllMotos = async (req, res) => {
  try {
    const moto = await Moto.find();
    res.status(200).json({ moto });
  } catch (error) {
    console.error(error);
  }
};

export const getMoto = async (req, res) => {
  try {
    const foundMoto = await Moto.findById({ _id: req.params.id });
    if (!foundMoto) return res.status(404).send("No se encontró esa moto");
    res.json(foundMoto);
  } catch (error) {
    console.error(error);
  }
};

export const deleteMoto = async (req, res) => {
  try {
    const foundMoto = await Moto.findByIdAndDelete({ _id: req.params.id });
    if (!foundMoto) return res.status(404).send("No se encontró esa moto");
    res.status(200).json({ message: "Moto eliminada:", foundMoto });
  } catch (error) {
    console.error(error);
  }
};
