var express = require('express');
var fs = require('fs'); //http://nodejs.org/api/fs.html#fs_file_system

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var buffer = fs.readFileSync('index.html'); //http://nodejs.org/api/fs.html#fs_fs_readfilesync_filename_options
  var output = buffer.toString();  //http://nodejs.org/api/buffer.html#buffer_buf_tostring_encoding_start_end 
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});