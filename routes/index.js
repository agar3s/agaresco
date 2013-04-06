function RendererService(app) {
  var fs = require("fs");
  var md = require('node-markdown').Markdown;

  app.get('/', function(req, res){

    fs.readFile('post/primer_post.md', 'utf8', function (err,data) {
      var body = "";
      if (err) {
        console.log(err);
        body = err.toString();
      }else{
        body = md(data);
      }
      console.log(body)
      res.render('index', {
        title: 'cool',
        body: body,
        otra:'<h2>la concha</h2>'
      });
    });

  });

  app.get(':id', function(req, res) {
    // Then you can use the value of the id with req.params.id
    // So you use it to get the data from your database:
    var body = 'Hello: '+req.params.id;
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Length', body.length);
    res.end(body);
  });

}

module.exports = RendererService;