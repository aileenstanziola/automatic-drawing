var app = require("express")()
var http = require("http").Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  console.log('an user connected');

socket.on("keyup", keyCode => {
  
  socket.broadcast.emit('broadcastedKeyup', keyCode)

  })
});

http.listen(3000, function(){
    console.log(io.eventNames())
  console.log('listening on *:3000 sdf');
});