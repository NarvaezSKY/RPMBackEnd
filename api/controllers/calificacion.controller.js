import Ruta from '../models/rutas.models.js';

export const updateRutaCalificacion = async (req, res) => {
  const { calificacion } = req.body;

  try {
    // Encuentra la ruta por su ID
    const ruta = await Ruta.findById(req.params.id);
    
    if (!ruta) {
      return res.status(404).json({ message: 'Ruta not found' });
    }
    console.log(ruta)
    // Agrega la nueva calificación al array de calificaciones de la ruta
    ruta.Calificaciones.push(calificacion);

    // Guarda la ruta actualizada en la base de datos
    await ruta.save();
    console.log(calificacion)

    return res.status(200).json({ message: 'Ruta calificación updated successfully', calificacion });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: 'Internal server error' });
  }
};
