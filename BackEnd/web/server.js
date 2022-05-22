const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const logger = require ("morgan");
const coursesRouter = require("./routes/courses");
const db = require("./database.js");


const app = express();


app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/courses", coursesRouter);

app.get("/api/users", (req, res, next) => {
  const sql = "select * from user"
  const params = []
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

app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));


module.exports = app;