//THIS PAGE IS FOR REFERENCE ONLY
//THIS PAGE IS FOR REFERENCE ONLY
//THIS PAGE IS FOR REFERENCE ONLY
//THIS PAGE IS FOR REFERENCE ONLY
//THIS PAGE IS FOR REFERENCE ONLY

const express = require('express')
const req = require('express/lib/request')
const router = express.Router()

router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('Luke Birch')
  })

const users = [ { name: "Luke Birch "}, { name: "Sally "}]
router.post('/', (req, res) => {
    const isValid = true
    if (isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render('users/new', { firstName: req.body.firstName})
    }
})

router.get('/new', (req, res) => {
    res.render("users/new")
  })


router
    .route("/:id")
    .get((req, res) => {
        console.log(req.user)
        res.send(`Luke Birch is User ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete with ID ${req.params.id}`)
    })

router.param("id", (req, res, next, id) => {
    console.log(req)
    req.user = users[id]
    console.log(req.user)
    next()
})

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
  }

module.exports = router