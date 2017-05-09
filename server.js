var port = 84,
express = require('express'),
app = express().use(express.static(__dirname + '/')),
http = require('http').Server(app),
io = require('socket.io')(http);
app.use(express.static(__dirname));
 
app.use('/', function(req, res){
    res.sendFile(__dirname + 'index.html');
});

 
io.on('connection', function(socket){
    console.log('a user connected');
});
 
http.listen(port, function(){
    console.log("Node server listening on port " + port);
});