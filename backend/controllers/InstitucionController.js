const Institucion = require("../models/Institucion.js");

const InstitucionCtrl = {};

InstitucionCtrl.buscarInstitucion = async (req, res) => {
  try {
    criteria = {};
    if (req.query.cuit != null && req.query.cuit != "") {
      criteria.cuit = req.query.cuit;
    }

    console.log(criteria);

    let institucion = await Institucion.findOne(criteria);

    console.log(institucion);

    res.status(200).json({
      institucion: institucion
        ? {
            cuit: institucion?.cuit || null,
            nombre: institucion?.nombre || null,
          }
        : null,
    });
  } catch (error) {
    console.log("holaaaaaaaaaaaaaaa", error);

    res.status(500).send({
      message: "OCURRIO UN PROBLEMA BUSCAR INSTITUCION",
    });
  }
};

InstitucionCtrl.createInstitucion = async (req, res) => {
  let InstitucionC = new Institucion(req.body);

  // console.log(req.body);

  try {
    await InstitucionC.save();
    res.json({
      status: "1",
      msg: "Institucion guardada.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

module.exports = InstitucionCtrl;
