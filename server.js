const express = require('express');
const app = express();
const http = require('http').createServer(app);
const path = require('path');


const PORT = process.env.PORT || 3000


app.use(express.static(__dirname + '/public'))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})




http.listen(PORT, () => {

  console.log(`listening to port number ${PORT}`);
})


//socket.io functionality

const io = require('socket.io')(http)

io.on('connection', (socket) => {
  console.log('connection received');

  socket.on('message', (msg) => {
    socket.broadcast.emit('message', msg)


  })

})
