const express = require('express')
const cors = require('cors')
const products = require('./products')

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Welcome to our online shop')
  console.log(products)
})
app.get('/products', (req, res) => {
  res.json(products)
})

const port = process.env.PORT || 5000

app.listen(port, console.log(`Server running on port ${port}`))