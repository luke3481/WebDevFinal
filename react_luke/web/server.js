const express = require('express')
const app = express()

app.use(express.static("public"))
app.use(express.urlencoded( { extended: true }))
app.use(express.json())

app.set('view engine', 'ejs')

const userRouter = require('./routes/users')
const postRouter = require('./routes/posts')

app.use('/users', userRouter)
app.use('/posts', postRouter)

app.listen(3030)