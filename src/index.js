const http = require("http")
const path = require("path")
const express = require("express")
const socketio = require("socket.io")
const Filter = require("bad-words")
const { generateMessage } = require("./utils/messages")
const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
} = require("./utils/users")

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
  let defaultSender = "Room"
  console.log("New Socket is connected")

  socket.on("join", (options, callback) => {
    const { error, user } = addUser({ id: socket.id, ...options })
    if (error) {
      return callback(error)
    }
    socket.join(user.room)

    socket.emit("message", generateMessage("Joined🥳", defaultSender))
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        generateMessage(`${user.username} has joined😃`, defaultSender),
        user.username
      )

    callback()
  })

  socket.on("sendMessage", (msg, callback) => {
    const filter = new Filter()
    if (filter.isProfane(msg)) {
      return callback("Profanity isn't allowed! (Bad W*rd)")
    }

    const { username, room } = getUser(socket.id)
    io.to(room).emit("message", generateMessage(msg, username))
    callback()
  })
  socket.on("sendLocation", ({ latitude, longitude }, callback) => {
    const { username, room } = getUser(socket.id)
    io.to(room).emit(
      "location",
      generateMessage(
        `https://google.com/maps/?q=${latitude},${longitude}`,
        username
      )
    )
    callback()
    io.to(room).emit("mapbox", { latitude, longitude })
    socket.emit("mapboxSet")
  })
  socket.on("sendImage", (file, callback) => {
    const { username, room } = getUser(socket.id)
    io.to(room).emit("image", generateMessage(file, username))

    callback()
  })

  socket.on("disconnect", () => {
    const user = removeUser(socket.id)
    if (user) {
      io.to(user.room).emit(
        "message",
        generateMessage(`${user.username} has left😟`, defaultSender)
      )
    }
  })
})

server.listen(port, () => {
  console.log(`Server running on port ${port}!`)
})
