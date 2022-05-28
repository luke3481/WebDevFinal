

const express = require("express");
const router = express.Router();

const db = require("../database.js");


//returns all of the rows from the announcement table
router.get("/list", (req, res, next) => {
    let sql = "select * from announcement"
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

//returns a the rows with the specified announcement id
router.get("/:id", (req, res, next) => {
    let sql = "select * from announcement where announcement_id = ?"
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

router.post("/insert", (req, res, next) => {
    let errors=[]
    if (!req.body.atitle){
        errors.push("No announcemnet specified");
    }
    if (!req.body.adetail){
        errors.push("No detail specified");
    }
    if (errors.length){
        res.status(400).json({"error":errors.join(",")});
        return;
    }
    var data = {
        announcement_title: req.body.atitle,
        announcement_detail: req.body.adetail
    }
    let sql ='INSERT INTO user (name, announcement_title, announcement_detail, announcement_date) VALUES (?,?,?)'
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let insDate = date + '/' + month + '/' + year 
    let params =[data.name, data.email, insDate]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": data,
            "id" : this.announcement_id
        })
    });
})


module.exports = router;



