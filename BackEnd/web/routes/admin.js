const express = require("express");
const router = express.Router();

const db = require("../database.js");

//returns all of the rows from the user_class table
router.get("/list", (req, res, next) => {
  let sql =
    "select user_id, user_name, name, email, account_type, status from user";
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

//Deletes a user
router.post("/delete", (req, res) => {
  const { user_id } = req.body;
  let sql = "DELETE FROM user WHERE user_id = ?";
  let params = [user_id];

  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.json({
      message: "success",
      data: row,
    });
  });
});

module.exports = router;
