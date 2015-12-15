var express = require('express');
var Canvas = require('canvas');
var Image = Canvas.Image;
var Chart = require('nchart');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/', function (req, res) {
    var canvas = new Canvas(200, 200);
    var ctx = canvas.getContext('2d');
    var data = req.body;
    var myLineChart = new Chart(ctx).Line(data, {});
    res.setHeader('Content-Type', 'image/png');
    canvas.pngStream().pipe(res);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});

