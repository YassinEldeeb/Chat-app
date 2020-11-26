const generateMessage = (text) => {
  const time = new Date()
  return {
    text,
    createdAt: time.getTime(),
  }
}
module.exports = {
  generateMessage,
}
