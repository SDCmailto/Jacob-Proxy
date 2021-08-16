var compression = require('compression')
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const request = require('request');
const dotenv = require('dotenv').config();
const proxy = require('express-http-proxy');
//require('newrelic');
const fetch = require('node-fetch');

app.use(compression());
app.use(express.static(path.join(__dirname, '/public/dist')));

 app.use( (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
  });

const sendIndex = (req, res) => {
  res.sendFile(path.join(__dirname, './public/dist/index.html'));
};


app.get('/loaderio-2bb14787b369428561ed66f029393790', (req, res) => {
	res.status(200).send('loaderio-2bb14787b369428561ed66f029393790');
});
app.get('/user_image.png', (req, res) => {
  let status = 200;
  let response = request(`http://localhost:3004/user_image.png`);
  response.on('error', console.error);
  response.on('response', data => data.pipe(res));
});
app.get('/overview/:productId', (req, res) => {fetch('http://54.151.82.224/overview/' + req.params.productId).then(res => res.text()).then(body =>  res.send(body))});
//app.get('/overview/:productID', proxy('http://example.com'));
app.get('/:productId', sendIndex);
//app.post('/overview', proxy('http://54.67.112.217:5984/overview'));

app.get('*/dp/:productId', sendIndex);

//app.get('/*.js', (req, res) => {
//console.log(req.path);
 // res.sendFile(req.path);
//});

app.listen(port, () => {
  console.log(`Proxy listening at ${port}`);
});
