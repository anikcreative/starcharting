/* eslint-disable */

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Build server
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '../public')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
app.get('/test', function (req, res) {
  return res.send("Hello World!");
});

// Run server
app.listen(process.env.PORT || 8080, function () {
  console.log(
    `%cServer started successfully`,
    "color: lime"
  );
});
