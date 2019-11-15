var express = require('express');
var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [{
    val: ""
}];
 
app.use(express.static('public'));

app.get('/',function(req,res){
    res.status(200).send('hola mundo');
});

io.on('connection',function(socket){
    console.log('alguien se a conectado con socket');
    socket.emit('messages',messages);
    socket.on('new-message',function(data){
        messages.push(data);
        io.sockets.emit('messages',messages);
    });
});

server.listen(9095,function(){
    console.log('servidor corriendo en el puerto 8080');
});