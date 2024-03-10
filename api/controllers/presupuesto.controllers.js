import Gas from "./../models/gasPrice.models.js";

export const calculate = async (req, res) => {
  try {
    const { NumeroKm, ConsumoMoto } = req.body;
    const precioGasolina = await Gas.findOne().lean();
    console.log(precioGasolina)

    const numeroPrecio = parseInt(precioGasolina.PrecioGas);
    
    const presupuesto =(parseInt(NumeroKm) / 100 * parseInt(ConsumoMoto)*numeroPrecio)

    res.status(200).json({ presupuesto });
  } catch (error) {
    console.error(error);
  }
};
