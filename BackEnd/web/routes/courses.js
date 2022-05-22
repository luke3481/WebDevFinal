

const express = require("express");
const router = express.Router();

let courses = require('../dummyDB');


router.get("/list", async (req, res) => {
    try {
        res.status(200).json({
            data: courses  
        });
    } catch (err) {
        res.status(400).json({
            message: "Some error occured",
            err
        });
    }
});



module.exports = router;