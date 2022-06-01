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

router.post("/newuser", (req, res) => {
  const {
    user_name,
    name,
    email,
    student_id,
    password,
    account_type,
    a1,
    a2,
    a3,
  } = req.body;
  let sql =
    "INSERT INTO user (user_name, name, email, student_id, password, account_type, status, a1, a2, a3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  let params = [
    user_name,
    name,
    email,
    student_id,
    password,
    account_type,
    "active",
    a1,
    a2,
    a3,
  ];

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

//POSTS for Account --> Edit Profile page
router.post("/editname", (req, res) => {
  const { name, user_id } = req.body;
  let sql = "UPDATE user SET name = ? WHERE user_id = ?";
  let params = [name, user_id];

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

router.post("/editemail", (req, res) => {
  const { email, user_id } = req.body;
  let sql = "UPDATE user SET email = ? WHERE user_id = ?";
  let params = [email, user_id];

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

router.post("/editstudentid", (req, res) => {
  const { student_id, user_id } = req.body;
  let sql = "UPDATE user SET student_id = ? WHERE user_id = ?";
  let params = [student_id, user_id];

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
