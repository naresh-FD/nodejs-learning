/* eslint-disable no-undef */
import express from 'express';
const fs = require('fs');
const app = express();
app.use(express.json());
let tours_wp = fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`);

const tours = JSON.parse(tours_wp);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    result: tours.length,
    data: { tours: tours },
  });
});
app.post('/api/v1/tours', (req, res) => {
  console.log('req.body');
  res.send('DOne');
});

const port = 3001;
app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
