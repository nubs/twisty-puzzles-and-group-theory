var express = require('express');
var app = express();

app.use(express.static(__dirname));

var port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log('Listening on port ' + port);
});
