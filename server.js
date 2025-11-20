const express = require("express")
const app = express()
const port = 3000

const arr = [1,2,3,4,5]

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
})

app.get("/", (req, res) => {
  const {name , id} = req.query
  console.log(arr[parseInt(id)])
  res.send(req.query)
})