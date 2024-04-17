import mongoose, { Schema } from "mongoose";

const Rutas = new Schema(
  {
    NombreRuta: { type: String },
    PuntoInicioRuta: { type: String },
    PuntoFinalRuta: { type: String },
    KmTotalesRuta: { type: Number },
    PresupuestoGas: { type: Number },
    FotoRuta: { type: String },
    DescripcionRuta: { type: String },
    CalificacionRuta: { type: Number },
    Calificaciones: [{ type: Number }],
    motoviajero: { type: Schema.Types.ObjectId, ref: "Motoviajero", required:true }
  },
  {
    timestamps: true,
  }
);

Rutas.pre('save', function(next) {
  if (this.isModified('Calificaciones')) {
    // Recalcular el promedio de calificaciones
    const totalCalificaciones = this.Calificaciones.length;
    if (totalCalificaciones === 0) {
      this.CalificacionRuta = 0;
    } else {
      const sumaCalificaciones = this.Calificaciones.reduce(
        (total, calificacion) => total + calificacion,
        0
      );
      this.CalificacionRuta = sumaCalificaciones / totalCalificaciones;
    }
  }
  next();
});

export default mongoose.model("Ruta", Rutas);