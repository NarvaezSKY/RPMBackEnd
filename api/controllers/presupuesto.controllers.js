import Gas from "./../models/gasPrice.models.js";

export const calculate = async (req, res) => {
  try {
    const { NumeroKm, ConsumoMoto } = req.body;
    const precioGasolina = await Gas.findOne().lean();
    console.log(precioGasolina)

    const numeroPrecio = parseFloat(precioGasolina.PrecioGas);
    
    const presupuesto =(parseFloat(NumeroKm) / 100 * parseFloat(ConsumoMoto)*numeroPrecio)

    res.status(200).json({ presupuesto });
  } catch (error) {
    console.error(error);
  }
};
