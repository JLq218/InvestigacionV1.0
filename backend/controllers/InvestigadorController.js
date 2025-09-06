const Investigador = require('../models/Investigador.js');


const InvestigadorCtrl = {};

InvestigadorCtrl.buscarInvestigador2 = async (req, res) => {
    try {

        console.log(req.query.nombreapellido)

        criteria = {};
        // if (req.query.dni != null && req.query.dni != "") {
        //     criteria.dni = { $regex: req.query.dni, $options: "" };
        // }

        if (req.query.dni != null && req.query.dni != "") {
            criteria.dni = req.query.dni;
        }

        console.log(criteria)

        let investigador = await Investigador.findOne(criteria)


        console.log(investigador)

        res.status(200).json(
            {
                investigador: investigador
                ? {
                    dni: investigador.dni || null,
                    nombreapellido: investigador.nombreapellido || null,
                  }
                : null,
            }
        )
    } catch (error) {

        console.log("holaaaaaaaaaaaaaaa", error)

        res.status(500).send(
            {
                message: "OCURRIO UN PROBLEMA LIST PRODUCT"
            }
        )
    }
}



module.exports = InvestigadorCtrl; 
