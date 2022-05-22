

const express = require("express");
const router = express.Router();

const db = require("../database.js");


//returns all of the rows from the class_announcement table
router.get("/list", (req, res, next) => {
    let sql = "select * from class_announcement"
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

//returns the rows where the class_id is specified
router.get("/class/:id", (req, res, next) => {
    let sql = "select * from class_announcement where class_id = ?"
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

//returns the rows where announcement_id is specified
router.get("/teacher/:id", (req, res, next) => {
  let sql = "select * from class_announcement where announcement_id = ?"
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



