/* eslint-disable */

// Dependencies
const express = require('express');
const bodyParser = require('body-parser');

// Build server
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Run server
app.listen(process.env.PORT || 8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log(
    `%cServer started successfully; listening on http://${host}:${port}`,
    "color: lime"
  );
});
