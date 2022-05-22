const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const logger = require ("morgan");
const coursesRouter = require("./routes/courses");



const app = express();


app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.use("/courses", coursesRouter);



app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));


module.exports = app;