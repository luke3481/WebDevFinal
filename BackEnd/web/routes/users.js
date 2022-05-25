const express = require("express");
const router = express.Router();

const db = require("../database.js");

//returns all of the users from the user table
router.get("/list", (req, res, next) => {
  let sql = "select * from user";
  let params = [];
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

//returns a single user from the user table
router.get("/:user_name", (req, res, next) => {
  let sql = "select * from user where user_name = ?";
  let params = [req.params.user_name];
  db.get(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

router.post("/login", (req, res) => {
  const { username, hashedPassword } = req.body;
  let sql = "select * from user where user_name = ? and password = ?";
  let params = [username, hashedPassword];

  db.get(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.json({
      message: "success",
      data: rows,
    });
  });
});

module.exports = router;
