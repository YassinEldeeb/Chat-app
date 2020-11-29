const users = []
const addUser = ({ id, username, room }) => {
  if (!username || !room) {
    return {
      error: "username and room are required!",
    }
  }

  username = username.trim().toLowerCase()
  username = username.slice(0, 1).toUpperCase() + username.slice(1)
  room = room.trim().toLowerCase()

  const existingUser = users.find((user) => {
    return username === user.username && room === user.room
  })

  if (existingUser) {
    return {
      error: "username is used in that room!",
    }
  }

  const user = { id, username, room }
  users.push(user)
  return { user }
}

const removeUser = (id) => {
  const index = users.findIndex((user) => id === user.id)

  if (index !== -1) {
    return users.splice(index, 1)[0]
  }
}
const getUser = (id) => users.find((user) => user.id === id)

const getUsersInRoom = (room) => users.filter((user) => user.room === room)

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
}
