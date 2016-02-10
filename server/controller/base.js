fs = require('fs')

module.exports = {
  index: function(req, res) {
    var filename = __dirname + '/../../public/index.html';

    fs.readFile(filename, 'binary', function(err, file){
      if(err){
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write(err + "\n");
        res.end();
      }
      else{
        res.writeHead(200);
        res.write(file, 'binary');
        res.end();
      }
    });
  }
}
