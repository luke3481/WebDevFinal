const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");

//imports for sqlite database calls
const usersRouter = require("./routes/users");
const usersClassRouter = require("./routes/users_class");
const classRouter = require("./routes/class");
const classTeacherRouter = require("./routes/class_teacher");
const teacherRouter = require("./routes/teacher");
const userAssignmentRouter = require("./routes/users_assignment");
const assignmentRouter = require("./routes/assignment");
const classAnnouncementRouter = require("./routes/class_announcements");
const announcementRouter = require("./routes/announcement");

//this is the object that does all the work
const app = express();

//idk what these are but I'm afraid to delete them
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middle ware that handles calls to the databases
app.use("/user", usersRouter);
app.use("/user_class", usersClassRouter);
app.use("/class", classRouter);
app.use("/class_teacher", classTeacherRouter);
app.use("/teacher", teacherRouter);
app.use("/user_assignment", userAssignmentRouter);
app.use("/assignment", assignmentRouter);
app.use("/class_announcements", classAnnouncementRouter);
app.use("/announcement", announcementRouter);

//Luke's log in call. Maybe replace with user?
// app.use('/login', (req, res) => {
//   res.send({
//     token: 'test123'
//   });
// });

app.listen(8080, () =>
  console.log("API is running on http://localhost:8080/login")
);

module.exports = app;
