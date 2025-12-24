const express = require('express')
const app = express()
const PORT = 3000
const authMiddleware = require('./middlewares/auth')
const loggerMiddleware = require('./middlewares/logger')
const ProfileRouter = require('./routes/profile.route')
const UsersRouter = require('./routes/users.route')

app.use("/profile",authMiddleware)
app.use(loggerMiddleware)
app.use('/users',UsersRouter)
app.use('/profile',ProfileRouter)

app.get('/',(req,res) => {
    res.json({
        "message" : "Hello"
    })
})

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" })
})

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: "Something went wrong" })
})

app.listen(PORT,()=>{
    console.log(`Server is running on Port number ${PORT}`)
})