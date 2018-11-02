var express = require('express');
var app = express();
var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(3000);

io.on("connection", function(socket) {
  console.log("Somebody just connected: " + socket.id);

  socket.on("client_send_color", function(data) {
    console.log("server retrieved color: " + data);
    io.sockets.emit("server_send_color", data);
  });
});