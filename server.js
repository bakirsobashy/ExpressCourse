const express = require("express")
const cookieParser = require('cookie-parser')
const app = express()
const port = 3000

app.use(express.json())
app.use(cookieParser())



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

app.get("/", (req, res) => {
  res.send("Hello World!")
})

app.get("/sign", (req, res) => {
  const username = 'user'
  const password = 'pass'
  res.cookie(username,password).send("Cookie has been set")
})

app.get("/login", (req, res) => {
  const cookies = req.cookie
  if (cookies) {
    res.send("logged in")
    console.log(cookies)
  } else {
    res.send("No cookies found")
  }
})