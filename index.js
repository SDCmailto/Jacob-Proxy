var compression = require('compression')
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const request = require('request');
const dotenv = require('dotenv').config();

app.use(compression());
app.use(express.static(path.join(__dirname, '/public/dist')));

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
};

app.get('/user_image.png', (req, res) => {
  let status = 200;
  let response = request(`http://localhost:3004/user_image.png`);
  response.on('error', console.error);
  response.on('response', data => data.pipe(res));
});

app.get('/:productId', sendIndex);

app.get('*/dp/:productId', sendIndex);

app.get('/*.js', (req, res) => {
  res.sendFile(req.path);
});

app.listen(port, () => {
  console.log(`Proxy listening at http://52.53.167.132/${port}`);
});
