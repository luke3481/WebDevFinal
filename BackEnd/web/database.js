
const sqlite3 = require('sqlite3').verbose();
const md5 = require('md5')

const DBSOURCE = "canvas.sqlite";


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        console.log(err.message)
        throw err
    } else {
        console.log('Connected to the SQLite database.')
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
            (err) => {
                if (err) {
                    // Table already created
                }else{
                    // Table just created, creating some rows
                    const insert = 'INSERT INTO user (user_name, password, name, student_id, email, account_type, status, a1, a2, a3) VALUES (?,?,?,?,?,?,?,?,?,?)'
                    db.run(insert, ["LB",md5("password1"),"Luke Birch", "532", "LukeBirch@chicagobooth.edu", "student", 'active']),
                    db.run(insert, ["SJ",md5("password2"),"Seojoon Oh", "533", "Seojoon@chicagobooth.edu", "student", 'active']),
                    db.run(insert, ["SR",md5("password3"),"Syd Reynolds", "534", "SydReynolds@chicagobooth.edu", "student", 'active'])
                }
            });

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
                }else{
                    // Table just created, creating some rows
                    const insert = 'INSERT INTO user_class (user_id, class_id, grade) VALUES (?,?,?)'
                    db.run(insert, ["1", "2", "A"]),
                    db.run(insert, ["2", "3", "B"]),
                    db.run(insert, ["3", "1", "D"])
                }
            });

        db.run(
            `CREATE TABLE class (
                class_id integer PRIMARY KEY AUTOINCREMENT,
                class_name character, 
                description character,
                capacity integer
                )`,
            (err) => {
                if (err) {
                    // Table already created
                }else{
                    // Table just created, creating some rows
                    const insert = 'INSERT INTO class (class_name, description, capacity) VALUES (?,?,?)'
                    db.run(insert, ["WebDev","lego class", "30"]),
                    db.run(insert, ["Algos","why do they make us take this?", "60"]),
                    db.run(insert, ["Python","basics", "90"])
                }
            });
    }
});


module.exports = db





/*
`CREATE TABLE class_teacher (
                class_id integer,
                teacher_id character, 
                FOREIGN KEY (class_id) REFERENCES class(class_id),
                FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id)
                )`,

            `CREATE TABLE teacher (
                teacher_id integer PRIMARY KEY AUTOINCREMENT,
                teacher_name character, 
                )`,

            `CREATE TABLE user_assignment (
                user_id integer PRIMARY KEY AUTOINCREMENT,
                assignment_id character,
                points integer,
                content character, 
                FOREIGN KEY (user_id) REFERENCES user(user_id),
                FOREIGN KEY (assignment_id) REFERENCES assignment(assignment_id)
                )`,
            
            `CREATE TABLE assignment (
                assignment_id integer PRIMARY KEY AUTOINCREMENT,
                assignment_name character,
                due_date character
                )`,

            `CREATE TABLE class_announcement (
                class_id integer,
                announcement_id interger,
                FOREIGN KEY (class_id) REFERENCES class(class_id),
                FOREIGN KEY (announcement_id) REFERENCES announcement(announcement_id)
                )`,

            `CREATE TABLE announcement (
                announcement_id integer PRIMARY KEY AUTOINCREMENT,
                announcement_title character,
                announcement_detail character,
                announcement_date character
                )`,
*/