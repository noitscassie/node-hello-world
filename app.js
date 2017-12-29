var express = require('express');
var app = express();

app.set('views', './public/views');
app.set('view engine', 'pug');

app.use(express.static('public/views'));

app.get('/', function(req, res) {
  res.send('index');
});

app.route('/test')
  .get(function(req, res) {
    res.send('test')
  })
  .post(function(req, res) {
    res.send('Hello, world')
  })

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
