function RendererService(app) {
  var fs = require("fs")
     ,marked = require("marked");


  app.get('/', function(req, res){

    fs.readFile('post/primer_post.md', 'utf8', function (err, post) {
      var body = "";
      if (err) {
        console.log(err);
        post = err.toString();
      }else{
        post = marked(post);
      }

      res.render('index', {
        title: 'cool',
        post: post,
        otra:'<h2>la concha</h2>'
      });
    });

  });

  app.get('posts/', function(req, res){
    fs.readdir('post/', function(err, files){
      res.render('list', {
        files: files
      });
    });
  });

  app.get('posts/:post_name', function(req, res) {
    var post_name = req.params.post_name;
    console.log(post_name);
    fs.readFile('post/'+post_name, 'utf8', function (err, post) {
      if (err) {
        redirect('posts/');
      }
      
      var post = marked(post);
      
      res.render('index', {
        title: post_name, 
        post: post
      });

    });
  });
}

module.exports = RendererService;