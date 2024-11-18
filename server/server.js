const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const employees = require('./data')
const cors = require('cors')

const PORT = 8000

const app = express()

app.use(cors())

app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(bodyParser.json())

app.get('/users', (req, res) => {
  res.send(employees)
})

app.post('/users/:id', (req, res) => {
  const index = employees.findIndex((obj) => obj.id === +req.params.id)
  employees[index].status = req.body.status
  res.send(employees)
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
