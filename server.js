/**
 * Created by levabala on 25.11.2015.
 */

var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    sendFile("sinus.html", res);
});

server.listen(1337, '127.0.0.1');

function sendFile(fileName,res){
    var fileStream = fs.createReadStream(fileName);
    console.log('Loading ' + fileName);
    fileStream
        .on('error', function(){
            res.statusCode = 500;
            res.end('Server error');
        })
        .pipe(res);
    //res.end('Страница загружена');
}