var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
app.listen(port, function(){
  console.log('server started on port ' + port + '!');
});

app.use(express.static('public'));
