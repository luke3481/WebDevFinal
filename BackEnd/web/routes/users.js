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

//Login
router.post("/login", (req, res) => {
  const { username, hashedPassword } = req.body;
  let sql =
    "select user_id, user_name, student_id, name, account_type, status from user where user_name = ? and password = ?";
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

//New user
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
    "inactive",
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

//Validate with security questions
router.post("/validateques", (req, res) => {
  const { user_name, a1, a2, a3 } = req.body;
  let sql =
    "select user_id from user where user_name = ? and a1 = ? and a2 = ? and a3 = ?";
  let params = [user_name, a1, a2, a3];

  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    if (!row) {
      res.json({
        failure: "failure",
      });
    } else {
      res.json({
        message: "success",
        data: row["user_id"],
      });
    }
  });
});

//Reset password
router.post("/resetpassword", (req, res) => {
  const { new_password, user_id } = req.body;
  let sql = "UPDATE user set password = ? WHERE user_id = ?";
  let params = [new_password, user_id];

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

//Retrieve user data
router.post("/userdata", (req, res) => {
  const { user_id } = req.body;
  let sql = "SELECT name, email, student_id FROM user WHERE user_id = ?";
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

//Edit the user's name
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

//Edit the user's email
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

//Edit the user's student id
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

//change password (Account -> Change Password)
router.post("/changepassword", (req, res) => {
  const { password, user_id, hashedNewpassword } = req.body;
  let sql = "SELECT password FROM user WHERE password = ? AND user_id = ?";
  let params = [password, user_id];

  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    if (!row) {
      res.json({
        failure: "failure",
      });
    } else {
      let sql = "UPDATE user SET password = ? WHERE user_id = ?";
      let params2 = [hashedNewpassword, user_id];

      db.run(sql, params2, (err, row) => {
        if (err) {
          res.status(400).json({ error: err.message });
        }
        res.json({
          message: "success",
          data: row,
        });
      });
    }
  });
});

//validate a user's password before allowing them to update security questions
router.post("/validatepassword", (req, res) => {
  const { password, user_id } = req.body;
  let sql = "SELECT user_name FROM user WHERE password = ? AND user_id = ?";
  let params = [password, user_id];

  db.get(sql, params, (err, row) => {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    if (!row) {
      res.json({
        failure: "failure",
      });
    } else {
      res.json({
        message: "success",
        data: row,
      });
    }
  });
});

//Edit the user's security questions
router.post("/updatesec", (req, res) => {
  const { sec1, sec2, sec3, user_id } = req.body;
  let sql = "UPDATE user SET a1 = ?, a2 = ?, a3 =? WHERE user_id = ?";
  let params = [sec1, sec2, sec3, user_id];

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
