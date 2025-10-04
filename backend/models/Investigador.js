const mongoose = require("mongoose");
const { Schema } = mongoose;

const InvestigadorSchema = new Schema({
  emailRemitente: { type: String, required: false },
  fechaRegistro: { type: String, required: false },
  nombreapellido: { type: String, required: true },
  dni: { type: String, required: true },
  email: { type: String, required: false },
  telefono: { type: String, required: false },
  direccion: { type: String, required: false },
  tituloProfesional: { type: String, required: false },
  ocupacion: { type: String, required: false },
  nivelEducativo: { type: String, required: false },
  matriculaProfesional: { type: String, required: false },
  enlace_cv: { type: String, required: false },
  aptitudes: { type: String, required: false },
  intereses: { type: String, required: false },
  comentarios: { type: String, required: false },
});

const Investigador = mongoose.model("investigador", InvestigadorSchema);

module.exports = Investigador;
