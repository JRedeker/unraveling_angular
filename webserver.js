var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();
app.use(serveStatic("/home/jon/dev/unraveling_angular"));
app.listen(5100);