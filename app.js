const express = require('express')

const app = express()

const port = 3001
app.get('/', (req, res) => {
  res.status(200).json({ Message: 'Hello From Server' })
})

app.post('/', (req, res) => {
  res.status(200).json({ Message: 'Poooost method' })
})

app.listen(port, () => {
  console.log(`app running on port ${port}`)
})
