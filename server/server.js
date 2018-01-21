var express = require('express');
var path = require('path');

var app = express();
var appPort = 3000;

// send css, images, .js bundle, etc.
app.use('/', express.static(path.resolve(__dirname, '../client/_dist')));

/*
 * NOTE: this route catches all requests not explicitly matched by other endpoints.
 * This includes any view requests or 404 garbage (all handled client-side by react-router).
 */
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/_dist/index.html'));
});

app.listen(appPort, () => {
  console.log('Listening on port 3000...')
});
