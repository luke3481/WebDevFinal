

const express = require("express");
const router = express.Router();

const db = require("../database.js");


//returns all of the rows from the class table
router.get("/list", (req, res, next) => {
    let sql = "select * from class"
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

//returns a the rows with the specified class id
router.get("/:id", (req, res, next) => {
    let sql = "select * from class where class_id = ?"
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



