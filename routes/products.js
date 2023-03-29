const express = require('express');
const app = require('../app')
const router = express.Router();

const mysql = require("mysql");

/* GET users listing. */
router.get('/category', function(req, res, next) {

  req.app.locals.con.connect(function(err) {
    if (err) {
      console.log(err);
    }

    let sql = `SELECT productLine FROM productlines`

    req.app.locals.con.query(sql, function(err, result) {
      if (err) {
        console.log(err);
      }
      console.log("result", result);
      res.send(result);
    })
  })
});

router.get('/', function(req, res, next) {

    req.app.locals.con.connect(function(err) {
      if (err) {
        console.log(err);
      }
  
      let sql = `SELECT * FROM products`
  
      req.app.locals.con.query(sql, function(err, result) {
        if (err) {
          console.log(err);
        }
        console.log("result", result);
        res.send(result);
      })
    })
  });

  router.get('/category/:productLine', function(req, res, next) {

    req.app.locals.con.connect(function(err) {
      if (err) {
        console.log(err);
      }
  
      let sql = `SELECT * FROM products WHERE productLine = "${req.params.productLine}"`
  
      req.app.locals.con.query(sql, function(err, result) {
        if (err) {
          console.log(err);
        }
        console.log("result", result);
        res.send(result);
      })
    })
  });

module.exports = router;
