const express = require('express');
const router = express.Router();

//defino controlador para el manejo de CRUD
const investigadorCtrl = require('../controllers/InvestigadorController.js');

// definiendo rutas
router.get('/buscarInvestigador2', investigadorCtrl.buscarInvestigador2);

module.exports = router;
