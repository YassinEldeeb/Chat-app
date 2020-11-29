const generateMessage = (text, sender) => {
  const time = new Date()
  return {
    sender,
    text,
    createdAt: time.getTime(),
  }
}
module.exports = {
  generateMessage,
}
