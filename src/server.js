const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  }
});
const { v4: uuidv4 } = require('uuid')



var videoCallId = null;

// Set up PeerJ
app.set('view engine', 'ejs')
app.use(express.static('public'))
 
// Provide the video call ID to the client through a route
app.get('/video-call', (req, res) =>{
      //Generate a unique ID for the video call
  videoCallId = generateVideoCallID();
  res.json({ videoCallId}); // reply with the id of the call
});

// Connect to a room
app.get('/:room', (req, res) => {
  res.render('room', { roomId: req.params.room })
})

io.on('connection', socket => {
  socket.on('join-room', (roomId, userId) => {
    socket.join(roomId)
    socket.to(roomId).emit('user-connected', userId)

    socket.on('disconnect', () => {
      socket.to(roomId).emit('user-disconnected', userId)
    })
  })
})



server.listen(3300, '0.0.0.0', ()=>console.log("app is running"));


function generateVideoCallID(){ // Id generator 
  return uuidv4();
}