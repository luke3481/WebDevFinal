const sqlite3 = require("sqlite3").verbose();
const md5 = require("md5");

const DBSOURCE = "canvas.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    console.log(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE user (
                user_id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_name character, 
                password character, 
                student_id integer, 
                name character,
                email character,
                account_type character,
                status character,
                a1 character,
                a2 character,
                a3 character
                )`,
<<<<<<< HEAD
            (err) => {
                if (err) {
                    // Table already created
                }else{
                    // Table just created, creating some rows
                    const insert = 'INSERT INTO user (user_id, user_name, password, name, student_id, email, account_type, status, a1, a2, a3) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
                    db.run(insert, [1, "LB",md5("password1"),"Luke Birch", "532", "LukeBirch@chicagobooth.edu", "student", 'active']),
                    db.run(insert, [2, "SJ",md5("password2"),"Seojoon Oh", "533", "Seojoon@chicagobooth.edu", "student", 'active']),
                    db.run(insert, [3, "SR",md5("password3"),"Syd Reynolds", "534", "SydReynolds@chicagobooth.edu", "student", 'active'])
                }
            });
=======
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          const insert =
            "INSERT INTO user (user_name, password, name, student_id, email, account_type, status, a1, a2, a3) VALUES (?,?,?,?,?,?,?,?,?,?)";
          db.run(insert, [
            "LB",
            md5("password1"),
            "Luke Birch",
            "532",
            "LukeBirch@chicagobooth.edu",
            "student",
            "active",
          ]),
            db.run(insert, [
              "SJ",
              md5("password2"),
              "Seojoon Oh",
              "533",
              "Seojoon@chicagobooth.edu",
              "student",
              "active",
            ]),
            db.run(insert, [
              "SR",
              md5("password3"),
              "Syd Reynolds",
              "534",
              "SydReynolds@chicagobooth.edu",
              "student",
              "active",
            ]);
        }
      }
    );
>>>>>>> 9eb01d7ceba1d61aee0490ca540a29838e5c54dc

    db.run(
      `CREATE TABLE user_class (
                user_id integer,
                class_id integer, 
                grade character,
                FOREIGN KEY (user_id) REFERENCES user(user_id),
                FOREIGN KEY (class_id) REFERENCES class(class_id) 
                )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          const insert =
            "INSERT INTO user_class (user_id, class_id, grade) VALUES (?,?,?)";
          db.run(insert, ["1", "2", "A"]),
            db.run(insert, ["2", "3", "B"]),
            db.run(insert, ["3", "1", "D"]);
        }
      }
    );

    db.run(
      `CREATE TABLE class (
                class_id integer PRIMARY KEY AUTOINCREMENT,
                class_name character, 
                description character,
                capacity integer
                )`,
<<<<<<< HEAD
            (err) => {
                if (err) {
                    // Table already created
                }else{
                    // Table just created, creating some rows
                    const insert = 'INSERT INTO class (class_id, class_name, description, capacity) VALUES (?,?,?,?)'
                    db.run(insert, [1, "WebDev","lego class", "30"]),
                    db.run(insert, [2, "Algos","why do they make us take this?", "60"]),
                    db.run(insert, [3, "Python","basics", "90"])
                }
            });
        
        db.run(
            `CREATE TABLE class_teacher (
=======
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          const insert =
            "INSERT INTO class (class_name, description, capacity) VALUES (?,?,?)";
          db.run(insert, ["WebDev", "lego class", "30"]),
            db.run(insert, ["Algos", "why do they make us take this?", "60"]),
            db.run(insert, ["Python", "basics", "90"]);
        }
      }
    );

    db.run(
      `CREATE TABLE class_teacher (
>>>>>>> 9eb01d7ceba1d61aee0490ca540a29838e5c54dc
                class_id integer,
                teacher_id character, 
                FOREIGN KEY (class_id) REFERENCES class(class_id),
                FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id)
                )`,
      (err) => {
        if (err) {
          // Table is already created
        } else {
          // Table just created, creating some rows
          const insert =
            "INSERT INTO class_teacher (class_id, teacher_id) VALUES (?,?)";
          db.run(insert, ["1", "1"]), db.run(insert, ["2", "2"]);
        }
      }
    );

    db.run(
      `CREATE TABLE teacher (
                teacher_id integer PRIMARY KEY AUTOINCREMENT,
                teacher_name character
                )`,
      (err) => {
        if (err) {
          // Table is already created
        } else {
          // Table just created, creating some rows
          const insert = "INSERT INTO teacher (teacher_name) VALUES (?)";
          db.run(insert, ["Jimmy"]), db.run(insert, ["Rick"]);
        }
      }
    );

    db.run(
      `CREATE TABLE user_assignment (
                user_id integer,
                assignment_id integer,
                points integer,
                content character, 
                FOREIGN KEY (user_id) REFERENCES user(user_id),
                FOREIGN KEY (assignment_id) REFERENCES assignment(assignment_id)
                )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          const insert =
            "INSERT INTO user_assignment (user_id, assignment_id, points, content) VALUES (?,?,?,?)";
          db.run(insert, ["1", "1", "100", "good job!"]);
        }
      }
    );

    db.run(
      `CREATE TABLE assignment (
                assignment_id integer PRIMARY KEY AUTOINCREMENT,
                assignment_name character,
                due_date character
                )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          const insert =
            "INSERT INTO assignment (assignment_name, due_date) VALUES (?,?)";
          db.run(insert, ["final project", "05/23/22"]);
        }
      }
    );

    db.run(
      `CREATE TABLE class_announcement (
                class_id integer,
                announcement_id interger,
                FOREIGN KEY (class_id) REFERENCES class(class_id),
                FOREIGN KEY (announcement_id) REFERENCES announcement(announcement_id)
                )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          const insert =
            "INSERT INTO class_announcement (class_id, announcement_id) VALUES (?,?)";
          db.run(insert, ["1", "1"]);
        }
      }
    );

    db.run(
      `CREATE TABLE announcement (
                announcement_id integer PRIMARY KEY AUTOINCREMENT,
                announcement_title character,
                announcement_detail character,
                announcement_date character
                )`,
      (err) => {
        if (err) {
          // Table already created
        } else {
          // Table just created, creating some rows
          const insert =
            "INSERT INTO announcement (announcement_id, announcement_title, announcement_detail, announcement_date) VALUES (?,?,?,?)";
          db.run(insert, ["1", "1", "stuff", "05/20/22"]);
        }
      }
    );
  }
});

module.exports = db;
