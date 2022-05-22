

const express = require("express");
const router = express.Router();

const db = require("../database.js");


//returns all of the rows from the user_class table
router.get("/list", (req, res, next) => {
    let sql = "select * from user_class"
    let params = []
    db.all(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
  });

//returns the rows where the user_id is specified
router.get("/user/:id", (req, res, next) => {
    let sql = "select * from user_class where user_id = ?"
    let params = [req.params.id]
    db.get(sql, params, (err, rows) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":rows
        })
      });
  });

//returns a the rows where class id is specified
router.get("/class/:id", (req, res, next) => {
  let sql = "select * from user_class where class_id = ?"
  let params = [req.params.id]
  db.get(sql, params, (err, rows) => {
      if (err) {
        res.status(400).json({"error":err.message});
        return;
      }
      res.json({
          "message":"success",
          "data":rows
      })
    });
});

module.exports = router;



