const mongoose = require("mongoose");
const { Schema } = mongoose;

const InstitucionSchema = new Schema({
  emailRemitente: { type: String, required: false },
  fechaRegistro: { type: String, required: false },
  nombre: { type: String, required: true },
  cuit: { type: String, required: true },
  direccion: { type: String, required: false },
  email: { type: String, required: false },
  telefono: { type: String, required: false },
});

const Institucion = mongoose.model("institucion", InstitucionSchema);

module.exports = Institucion;
