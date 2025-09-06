const mongoose = require("mongoose");
const { Schema } = mongoose;

const InstitucionSchema = new Schema(
  {
    nombre: { type: String, required: true },
    tipo: { type: String, required: true }, // 1) institucion afiliada al invest 2) institucion vinculada 3) institucion donde se realiza la invest
    rol: { type: String, required: false }, //difusion, financiamiento, regulador, etc
    direccion: { type: String, required: true },
    cuit: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Institucion = mongoose.model("institucion", InstitucionSchema);

module.exports = Institucion;
