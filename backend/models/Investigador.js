const mongoose = require("mongoose");
const { Schema } = mongoose;

const InvestigadorSchema = new Schema(
  {
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    dni: { type: String, required: true },
    nombreapellido: { type: String, required: false },

    // email: {type:String, required:true},
    // telefono: {type:Number, required:true},
    // domicilio: {type:String, required:true},
    // profesion: {type:String, required:true},
    // matricula: {type:String, required:true},
    // cv: {type:String, required:true},
    // areas_de_interes: {type:String, required:true},
    // solicitudes: [{type: Schema.ObjectId, ref: 'solicitud'}],
  },
  {
    timestamps: true,
  }
);

const Investigador = mongoose.model("investigador", InvestigadorSchema);

module.exports = Investigador;
