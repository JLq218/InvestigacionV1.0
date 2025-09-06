const express = require("express");
const router = express.Router();

//defino controlador para el manejo de CRUD
const InstitucionCtrl = require("../controllers/InstitucionController.js");

// definiendo rutas
router.get("/buscarInstitucion", InstitucionCtrl.buscarInstitucion);

module.exports = router;
