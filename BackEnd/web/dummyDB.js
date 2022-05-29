

const db = require("./database.js");

// dummyDatabase.js

let courses = [
    { class_id: 1, class_name: "WebDev", description: "lego class", capacity: "30" },
    { class_id: 2, class_name: "Algos", description: "no one needs this but take it anyway", capacity: "30" },
    { class_id: 3, class_name: "ICS", description: "Marty's the goat", capacity: "35" }
  ];


module.exports = courses;


/*
const { token, setToken } = useToken();
    const [main_menu, setMain] = useState("home");
    const [sub_menu, setSub] = useState("create_c");
    const [courses, setCourses] = useState(["Course 1", "Course 2", "Course 3"]);
    const [announcements, setAnnouncements] = useState([
                                                ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."],
                                                ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."],
                                                ["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."]
                                            ]);
    const [announcement_d, setAd] = useState(["Announcement 6", "2022-05-11", "Hi all, Assignment 6 and the progress report assignments are available on Canvas."]);
*/