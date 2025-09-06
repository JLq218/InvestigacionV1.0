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
      institucion: institucion ? {cuit: institucion?.cuit || null,
      nombre: institucion?.nombre || null,} : null,
    });
  } catch (error) {
    console.log("holaaaaaaaaaaaaaaa", error);

    res.status(500).send({
      message: "OCURRIO UN PROBLEMA BUSCAR INSTITUCION",
    });
  }
};

module.exports = InstitucionCtrl;
