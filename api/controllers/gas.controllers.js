import Gas from "./../models/gasPrice.models.js";

export const getGasoline = async (req, res) => {
  try {
    const PrecioGas = await Gas.find();
    return res.status(200).json({ PrecioGas });
  } catch (error) {
    console.error(error);
    return 
  }
};

export const uploadGasolinePrice = async (req, res) => {
  try {
    const body = req.body;
    const existingGas = await Gas.findOne();

    if (existingGas) {
      return res.status(400).json({ error: "Ya hay un precio subido" });
    }

    const gas = await new Gas({
      PrecioGas: body.PrecioGas,
    }).save();

    return res.status(200).json({ message: gas });
  } catch (error) {
    console.error(error);
    return res.status(400).json;
  }
};

export const updateGasolinePrice = async (req, res) => {
  try {
    const gasId = req.params.id;
    const body = req.body;

    let newPrice = {
      PrecioGas: body.PrecioGas,
    };

    const priceUpdate = await Gas.findByIdAndUpdate(gasId, newPrice, {
      new: true,
      runValidators: true,
    });
    if (!priceUpdate) {
      return res.status(404).json({ error: "GasPrice not found" });
    }

    return res.status(200).json({ priceUpdate });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error });
  }
};
