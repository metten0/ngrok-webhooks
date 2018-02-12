const express = require('express');
const bodyParse = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 3030;

const server = express();
server.use(cors());

server.get('/', (req, res) => {
  res.send(`Hello world from ${port}. You guys are crazy. I am enjoying working with you.`);
});

server.post('/payload', (req, res) => {
  res.json(req.body);
});

server.listen(port, err => {
  if (err) console.error(err);
  console.log(`Magic happening on ${port}`);
});
