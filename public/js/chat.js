const socket = io()

//Selectors
const messageForm = document.querySelector("#chattingForm")
const input = messageForm.querySelector("input")
const sendBtn = messageForm.querySelector("button")
const locationBtn = document.querySelector("#sendLocation")
const chatDiv = document.querySelector(".chat-messages")
const imageUploadIcon = document.querySelector("#fileLabel")
const iconImage = document.querySelector("#imgUploadIcon")
const sendBtnMobile = document.querySelector("#sendBtn-mobile")

input.focus()

//QueryString
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
})
const me = username.slice(0, 1).toUpperCase() + username.slice(1)

socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error)
    location.href = "/"
  }
})

if (localStorage.getItem("dir") !== []) {
  const dir = localStorage.getItem("dir")
  if (dir === "RTL") {
    input.style.direction = dir
  } else if (dir === "LTR") {
    input.style.direction = dir
    input.placeholder = "Message"
  }
}

//?Message Template
class message {
  constructor(content, time, type = "text", senderName) {
    const div = document.createElement("div")
    div.classList.add("message")
    const info = document.createElement("div")
    info.classList.add("info")
    const sender = document.createElement("p")
    sender.classList.add("sender")
    if (senderName === me) {
      div.classList.add("me")
      sender.innerText = "me"
    } else {
      sender.innerText = senderName
    }

    info.append(sender)
    const timeStamp = document.createElement("p")
    timeStamp.classList.add("timestamp")
    timeStamp.innerText = moment(time).format("h:mm a")
    info.append(timeStamp)

    div.append(info)
    if (type === "text") {
      const text = document.createElement("p")
      text.innerText = content
      if (
        content !== "Joined🥳" &&
        !content.includes("has joined😃") &&
        !content.includes("has left😟")
      ) {
        console.log(content, content !== "Joined")
        text.setAttribute("dir", localStorage.getItem("dir"))
      } else {
        text.setAttribute("dir", "LTR")
      }

      text.classList.add("message-text")
      chatDiv.append(div)
      div.append(text)
    } else if (type === "location") {
      const link = document.createElement("a")
      link.href = content
      link.innerText = "Google map"
      link.setAttribute("target", "_blank")

      div.append(link)

      chatDiv.append(div)
    } else if (type === "image") {
      let img = document.createElement("img")
      img.classList.add("image-added")
      let div1 = document.createElement("div")
      div1.append(img)

      img.src = `data:image/png;base64, ${content}`
      div.append(div1)
      div.classList.add("image-sent-cont")
      chatDiv.append(div)
    }
  }
}
const membersMobileDiv = document.querySelector(".mobile-room-members")

function roomMembers(room, members) {
  const container = document.querySelector(".chat-room")
  const membersContainer = container.getElementsByClassName("member")
  const mobileTitle = document.querySelector(".mobile-room-title")

  container.innerHTML = ""
  membersMobileDiv.innerHTML = ""
  mobileTitle.innerText = room

  const title = document.createElement("h1")
  title.classList.add("room-title")
  title.innerText = room
  container.append(title)

  members.forEach((member) => {
    const memberSpan = document.createElement("span")
    memberSpan.classList.add("member")
    memberSpan.innerText = member.username
    container.append(memberSpan)
  })
  members.forEach((member) => {
    const memberSpan = document.createElement("span")
    memberSpan.classList.add("mobile-member")
    memberSpan.innerText = member.username
    membersMobileDiv.append(memberSpan)
  })

  console.log(membersContainer.length, membersContainer)
  if (membersContainer.length > 1) {
    let lastMember = membersContainer[membersContainer.length - 1]
    console.log(membersContainer)
    lastMember.classList.add("member-animation")
  }
}
const mobileChatRoom = document.querySelector(".chat-room-mobile")
mobileChatRoom.addEventListener("click", () => {
  membersMobileDiv.classList.toggle("mobile-room-members-active")
})
socket.on("message", (msg) => {
  console.log(msg)
  new message(msg.text, msg.createdAt, "text", msg.sender)
})
socket.on("location", (link) => {
  console.log(link)
  new message(link.text, link.createdAt, "location", link.sender)
})
socket.on("image", (file) => {
  new message(file.text, file.createdAt, "image", file.sender)
})
socket.on("roomMembers", ({ room, members }) => {
  roomMembers(room, members)
})

function checkRTL(s) {
  let ltrChars =
      "A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02B8\u0300-\u0590\u0800-\u1FFF" +
      "\u2C00-\uFB1C\uFDFE-\uFE6F\uFEFD-\uFFFF",
    rtlChars = "\u0591-\u07FF\uFB1D-\uFDFD\uFE70-\uFEFC",
    rtlDirCheck = new RegExp("^[^" + ltrChars + "]*[" + rtlChars + "]")

  return rtlDirCheck.test(s)
}
//
input.addEventListener("input", keypress)

function keypress(e) {
  function myFunction(x) {
    if (x.matches) {
      if (input.value !== "") {
        sendBtnMobile.classList.add("sendBtn-mobile-active")
        imageUploadIcon.classList.add("fileLabel-disabled")
        imageUploadIcon.classList.add("fileLabel-transition-ready")
      } else {
        sendBtnMobile.classList.remove("sendBtn-mobile-active")
        imageUploadIcon.classList.remove("fileLabel-disabled")
        imageUploadIcon.classList.add("fileLabel-active")
      }
    }
  }

  let x = window.matchMedia("(max-width: 750px)")
  myFunction(x)
  x.addListener(myFunction)

  setTimeout(function () {
    let isRTL = checkRTL(input.value)
    let dir = isRTL ? "RTL" : "LTR"

    localStorage.setItem("dir", dir)
    input.style.direction = dir

    if (e.charCode == 32) dir = "SPACE"
  }, 0)
}
//
messageForm.addEventListener("submit", (e) => {
  e.preventDefault()
  sendBtn.setAttribute("disabled", "disabled")
  sendBtnMobile.setAttribute("disabled", "disabled")
  sendBtn.classList.add("sendingMessage")
  sendBtnMobile.classList.add("sendingMessage")
  input.focus()

  socket.emit("sendMessage", input.value, (error) => {
    sendBtn.removeAttribute("disabled")
    sendBtnMobile.removeAttribute("disabled")
    sendBtnMobile.classList.remove("sendingMessage")
    sendBtn.classList.remove("sendingMessage")
    input.value = ""
    sendBtnMobile.classList.remove("sendBtn-mobile-active")
    imageUploadIcon.classList.remove("fileLabel-disabled")
    imageUploadIcon.classList.add("fileLabel-active")
    console.log("yeeeh")
    input.focus()
    if (error) {
      return console.log(error)
    }

    console.log("Message delivered!")
  })
})

locationBtn.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation isn't supported by your browser.")
  }
  locationBtn.setAttribute("disabled", "disabled")
  locationBtn.classList.add("sendingLocation")

  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords
    socket.emit("sendLocation", { latitude, longitude }, () => {
      locationBtn.removeAttribute("disabled")
      locationBtn.classList.remove("sendingLocation")
      console.log("Location link shared!")
    })
  })
})

let counter = 0
socket.on("mapbox", ({ latitude, longitude }) => {
  //?Map Template
  const mapDiv = document.createElement("div")
  mapDiv.id = `map${counter}`
  mapDiv.classList = "Mapbox-map"

  //?Message Template
  const div = document.createElement("div")
  div.classList.add("message")
  div.classList.add("location-message")
  div.append(mapDiv)
  chatDiv.append(div)

  //mapbox location
  const token =
    "pk.eyJ1IjoieWFzc2luNzg5IiwiYSI6ImNraGNiZDc2cjBjcXoycm5nZDQzeWh5MGsifQ.vZNRBIwM6P8fwbZvoPgp1A"
  mapboxgl.accessToken = token

  const map = new mapboxgl.Map({
    container: `map${counter}`,
    style: "mapbox://styles/mapbox/streets-v11",
    center: [longitude, latitude],
    zoom: 15,
    pitch: 40,
  })
  //mapbox marker
  new mapboxgl.Marker().setLngLat([longitude, latitude]).addTo(map)
  socket.on("mapboxSet", () => {
    console.log("map set to everybody successfully")
  })
  counter++
})
//!

const inputElement = document.querySelector('input[type="file"]')

inputElement.addEventListener("change", (e) => {
  const file = e.target.files[0]
  console.log(file)
  function removeClass() {
    imageUploadIcon.classList.add("fileUpload-active")
    setTimeout(() => {
      imageUploadIcon.classList.remove("fileUpload-active")
    }, 700)
  }
  if (file.size > 10000000) {
    removeClass()
    return console.log("File is too big")
  } else if (!file.type.includes("image")) {
    removeClass()
    return console.log("Please insert an image")
  }
  iconImage.classList.add("progress-Image")

  imageUploadIcon.classList.add("imageUploadIcon-active")
  sendBtnMobile.classList.add("imageUploadIcon-active2")
  const compress = new Compress()
  compress
    .compress([...e.target.files], {
      size: 4, // the max size in MB, defaults to 2MB
      quality: 0.65, // the quality of the image, max is 1,
      maxWidth: 1920, // the max width of the output image, defaults to 1920px
      maxHeight: 1920, // the max height of the output image, defaults to 1920px
      resize: true, // defaults to true, set false if you do not want to resize the image width and height
    })
    .then((file) => {
      console.log("Processed")
      socket.emit("sendImage", file[0].data, () => {
        iconImage.classList.remove("progress-Image")
        sendBtnMobile.classList.remove("imageUploadIcon-active2")
        imageUploadIcon.classList.remove("imageUploadIcon-active")
        console.log("image sent!!")
      })
    })
})
//!
const inputChatIcons = document.querySelector("#chattingForm .div input")
console.log(inputChatIcons)

new emojiLibrary(inputChatIcons)
