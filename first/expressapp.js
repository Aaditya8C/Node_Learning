const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This is first express app!')
})
app.get('/contact', (req, res) => {
  res.send('This is contact page!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})