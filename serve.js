const express = require('express');
const path = require('path');
const port =  process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname,'./index.html'))
});
app.listen(port);
/* var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, function(error, data) {
        if (error) {
            response.writeHead(404);
            response.write('File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000); */
console.log('server run');