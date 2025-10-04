const Investigador = require("../models/Investigador.js");

const InvestigadorCtrl = {};

InvestigadorCtrl.buscarInvestigador2 = async (req, res) => {
  try {
    console.log(req.query.nombreapellido);

    criteria = {};
    // if (req.query.dni != null && req.query.dni != "") {
    //     criteria.dni = { $regex: req.query.dni, $options: "" };
    // }

    if (req.query.dni != null && req.query.dni != "") {
      criteria.dni = req.query.dni;
    }

    console.log(criteria);

    let investigador = await Investigador.findOne(criteria);

    console.log(investigador);

    res.status(200).json({
      investigador: investigador
        ? {
            dni: investigador.dni || null,
            nombreapellido: investigador.nombreapellido || null,
          }
        : null,
    });
  } catch (error) {
    console.log("holaaaaaaaaaaaaaaa", error);

    res.status(500).send({
      message: "OCURRIO UN PROBLEMA LIST PRODUCT",
    });
  }
};

InvestigadorCtrl.createInvestigador = async (req, res) => {
  let InvestigadorC = new Investigador(req.body);
  //   console.log(req.body);

  try {
    await InvestigadorC.save();
    res.json({
      status: "1",
      msg: "Investigador guardado.",
    });
  } catch (error) {
    res.status(400).json({
      status: "0",
      msg: "Error procesando operacion.",
    });
  }
};

module.exports = InvestigadorCtrl;
