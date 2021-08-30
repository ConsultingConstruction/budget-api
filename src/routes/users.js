const express = require('express');
const router = express.Router();
const azure = require('../../config/azure-db');
var sql = require("mssql");

router.get('/users-register', async (req, res, next) => {
  sql.connect(azure.config, function (err) {

    if (err) console.log(err);

    var request = new sql.Request();
    let query = "exec I_U_EMPLEADOS @nombre='" + ssn + 
    "', @apellidoPaterno='" + password + 
    "', @apellidoMaterno='" + password +
    "', @iniciales='" + password +
    "', @edad='" + password +
    "', @fechaNacimiento='" + password +
    "', @telefono='" + password +
    "', @@idDireccion='" + password +
    "', @idRol='" + password +
    "';"

    conn.query(query, function (error, data) {
      if (error) console.log(error)

      res.json(data.recordsets[0])

    });
  });
})

module.exports = router;
