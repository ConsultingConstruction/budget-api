const express = require('express');
const router = express.Router();
const azure = require('../../config/azure-db');
var sql = require("mssql");
var dateFormat = require('dateformat');
const request = require('request');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const passwordHash = require('../../middleware/hash-password');


router.post('/user-register', async (req, res, next) => {
  sql.connect(azure.config, async function (err) {

    if (err) console.log(err);

    var request = new sql.Request();
    let query = "exec I_U_EMPLEADOS @nombre='" + req.query.nombre +
      "', @apellidoPaterno='" + req.query.apellidoPaterno +
      "', @apellidoMaterno='" + req.query.apellidoMaterno +
      "', @iniciales='" + req.query.iniciales +
      "', @edad=" + req.query.edad +
      ", @fechaNacimiento='" + req.query.fechaNacimiento +
      "', @telefono=" + req.query.telefono +
      // ", @idDireccion=" + req.query.idDireccion +
      ", @idRol=" + req.query.idRol +
      ",@queryType='" + req.query.queryTtype +
      "',@cp=" + req.query.cp +
      ",@calle='" + req.query.calle +
      "',@numeroExt=" + req.query.numeroExt +
      ",@numeroInt=" + req.query.numeroInt +
      ",@colonia='" + req.query.colonia +
      "',@idPais=" + req.query.idPais +
      ",@idEstado=" + req.query.idEstado +
      ",@idMunicipio=" + req.query.idMunicipio +
      // ",@idUsuario=" + req.query.idUsuario +
      ", @email='" + req.query.email +
      "', @password='" + await passwordHash.encryptPassword(req.query.password) + "'"


    console.log(query)

    request.query(query, function (error, result) {
      if (error) {
        res.json(error)
        //res.json("0")
      } else {
        res.json("1")
      }

    });
  });
})

router.get('/rol', async (req, res, next) => {
  sql.connect(azure.config, function (err) {

    if (err) console.log(err);

    var request = new sql.Request();
    let query = "SELECT * FROM rol"

    request.query(query, function (error, result) {
      if (error) {
        res.json(error)
        //res.json("0")
      } else {
        res.json(result.recordsets[0])
      }

    });

  });
})

router.get('/pais', async (req, res, next) => {
  sql.connect(azure.config, function (err) {

    if (err) console.log(err);

    var request = new sql.Request();
    let query = "SELECT * FROM pais"

    request.query(query, function (error, result) {
      if (error) {
        res.json(error)
        //res.json("0")
      } else {
        res.json(result.recordsets[0])
      }

    });

  });
})

router.get('/municipio', async (req, res, next) => {
  sql.connect(azure.config, function (err) {

    if (err) console.log(err);

    var request = new sql.Request();
    let query = "SELECT * FROM municipio"

    request.query(query, function (error, result) {
      if (error) {
        res.json(error)
        //res.json("0")
      } else {
        res.json(result.recordsets[0])
      }

    });

  });
})

router.get('/estado', async (req, res, next) => {
  sql.connect(azure.config, function (err) {

    if (err) console.log(err);

    var request = new sql.Request();
    let query = "SELECT * FROM estado"

    request.query(query, function (error, result) {
      if (error) {
        res.json(error)
        //res.json("0")
      } else {
        res.json(result.recordsets[0])
      }

    });

  });
})

module.exports = router;
