//THIS PAGE IS FOR REFERENCE ONLY
//THIS PAGE IS FOR REFERENCE ONLY
//THIS PAGE IS FOR REFERENCE ONLY
//THIS PAGE IS FOR REFERENCE ONLY
//THIS PAGE IS FOR REFERENCE ONLY

const express = require('express')
const res = require('express/lib/response')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('example')
  })
  
router.get('/update', (req, res) => {
    res.send("This is an update")
  })


module.exports = router