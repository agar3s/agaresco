var express = require('express');
var md = require('node-markdown').Markdown;
var fs = require("fs");
var app = express();

app.get('/', function(req, res){

  fs.readFile('post/primer_post.md', 'utf8', function (err,data) {
  	var body = "";
	if (err) {
	  console.log(err);
	  body = err.toString();
	}else{
	  body = md(data);
	}
	res.setHeader('Content-Type', 'text/html; charset=utf-8');
	res.setHeader('Content-Length', body.length);
	res.end(body);
  });

});

app.get('/:id', function(req, res) {
  // Then you can use the value of the id with req.params.id
  // So you use it to get the data from your database:
  var body = 'Hello: '+req.params.id;
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

app.listen(8000);
console.log('Server running at http://127.0.0.1:8000/');
