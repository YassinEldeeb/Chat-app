const http = require("http")
const path = require("path")
const express = require("express")
const socketio = require("socket.io")
const Filter = require("bad-words")
const { generateMessage } = require("./utils/messages")

const app = express()

const server = http.createServer(app)
const io = socketio(server, {
  pingInterval: 10000,
  pingTimeout: 99999999,
})

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, "../public")

app.use(express.static(publicDirectoryPath))

io.on("connection", (socket) => {
  console.log("New Socket is connected")

  socket.broadcast.emit("message", generateMessage("a new user has joined!"))
  socket.emit("message", generateMessage("Joined"))

  socket.on("sendMessage", (msg, callback) => {
    const filter = new Filter()
    if (filter.isProfane(msg)) {
      return callback("Profanity isn't allowed! (Bad W*rd)")
    }

    io.emit("message", generateMessage(msg))
    callback()
  })
  socket.on("sendLocation", ({ latitude, longitude }, callback) => {
    io.emit(
      "location",
      generateMessage(`https://google.com/maps/?q=${latitude},${longitude}`)
    )
    callback()
    io.emit("mapbox", { latitude, longitude })
    socket.emit("mapboxSet")
  })
  socket.on("sendImage", (file, callback) => {
    io.emit("image", generateMessage(file))

    callback()
  })
  socket.on("voiceRecorded", (audio) => {
    io.emit("voice", generateMessage(audio))
  })

  socket.on("disconnect", () => {
    io.emit("message", generateMessage("a user has left!"))
  })
})

server.listen(port, () => {
  console.log(`Server running on port ${port}!`)
})
