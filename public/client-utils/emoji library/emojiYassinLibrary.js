class emojiLibrary {
  constructor(input) {
    input.value = ""
    const arr1 = [
      ..."😀 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 🥰 😘 😗 😙 😚 😋 😛 😝 😜 🤪 🤨 🧐 🤓 😎 🤩 🥳 😏 😒 😞 😔 😟 😕 🙁 😣 😖 😫 😩 🥺 😢 😭 😤 😠 😡 🤬 🤯 😳 🥵 🥶 😱 😨 😰 😥 😓 🤗 🤔 🤭 🤫 🤥 😶 😐 😑 😬 🙄 😯 😦 😧 😮 😲 🥱 😴 🤤 😪 😵 🤐 🥴 🤢 🤮 🤧 😷 🤒 🤕 🤑 🤠 😈 👿 👹 👺 🤡 💩 👻 💀 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 ".replace(
        / /g,
        ""
      ),
    ]
    const arr2 = [
      ..."👋 🤚 ✋ 🖖 👌 🤏 🤞 🤟 🤘 🤙 👈 👉 👆 👇 👍 👎 ✊ 👊 🤛 🤜 👏 🙌 👐 🤲 🤝 🙏 💅 🤳 💪 🦾 🦵 🦿 🦶 👂 🦻 👃 🧠 🦷 🦴 👀 👁 👅 👄 💋 🩸".replace(
        / /g,
        ""
      ),
    ]
    const arr3 = [..."👶👦👩‍♂️ 🏃‍♀️ 💃 🕺 🕴".replace(/ /g, "")]
    const arr4 = [
      ..."🧳 🌂 ☂️ 🧵 🧶 👓 🕶 🥽 🥼 🦺 👔 👕 👖 🧣 🧤 🧥 🧦 👗 👘 🥻 🩱 🩲 🩳 👙 👚 👛 👜 👝 🎒 👞 👟 🥾 🥿 👠 👡 🩰 👢 👑 👒 🎩 🎓 🧢 ⛑ 💄 💍 💼 ".replace(
        / /g,
        ""
      ),
    ]
    const arr5 = [
      ..."🐶 🐱 🐭 🐹 🐰 🦊 🐻 🐼 🐨 🐯 🦁 🐮 🐷 🐽 🐸 🐵 🙈 🙉 🙊 🐒 🐔 🐧 🐦 🐤 🐣 🐥 🦆 🦅 🦉 🦇 🐺 🐗 🐴 🦄 🐝 🐛 🦋 🐌 🐞 🐜 🦟 🦗 🕷 🕸 🦂 🐢 🐍 🦎 🦖 🦕 🐙 🦑 🦐 🦞 🦀 🐡 🐠 🐟 🐬 🐳 🐋 🦈 🐊 🐅 🐆 🦓 🦍 🦧 🐘 🦛 🦏 🐪 🐫 🦒 🦘 🐃 🐂 🐄 🐎 🐖 🐏 🐑 🦙 🐐 🦌 🐕 🐩 🦮 🐕‍🦺 🐈 🐓 🦃 🦚 🦜 🦢 🦩 🕊 🐇 🦝 🦨 🦡 🦦 🦥 🐁 🐀 🐿 🦔 🐾 🐉 🐲 🌵 🎄 🌲 🌳 🌴 🌱 🌿 ☘️ 🍀 🎍 🎋 🍃 🍂 🍁 🍄 🐚 🌾 💐 🌷 🌹 🥀 🌺 🌸 🌼 🌻 🌞 🌝 🌛 🌜 🌚 🌕 🌖 🌗 🌘 🌑 🌒 🌓 🌔 🌙 🌎 🌍 🌏 🪐 💫 ⭐️ 🌟 ✨ ⚡️ ☄️ 💥 🔥 🌪 🌈 ☀️ 🌤 ⛅️ 🌥 ☁️ 🌦 🌧 ⛈ 🌩 🌨 ❄️ ☃️ ⛄️ 🌬 💨 💧 💦 ☔️ ☂️ 🌊 🌫".replace(
        / /g,
        ""
      ),
    ]
    const arr6 = [
      ...`
❤️🧡💛💚💙💜🖤🤍🤎💔❣️💕💞💓💗💖💘💝💟☮️✝️☪️🕉☸️✡️🔯🕎☯️☦️🛐⛎♈️♉️♊️♋️♌️♍️♎️♏️♐️♑️♒️♓️🆔⚛️🉑☢️☣️📴📳🈶🈚️🈸🈺🈷️✴️🆚🅰️🅱️🆎🆑🅾️🆘❌⭕️🛑⛔️📛🚫💯💢♨️🚷🚯🚳🚱🔞📵🚭❗️❕❓❔‼️⁉️🔅🔆〽️⚠️🚸🔱⚜️🔰♻️✅🈯️💹❇️✳️❎🌐💠Ⓜ️🌀💤🏧🚾♿️🅿️🈳🈂️🛂🛃🛄🛅🚹🚺🚼🚻🚮🎦📶🈁🔣ℹ️🔤🔡🔠🆖🆗🆙🆒🆕🆓0️⃣1️⃣2️⃣3️⃣4️⃣5️⃣6️⃣7️⃣8️⃣9️⃣🔟🔢#️⃣*️⃣⏏️▶️⏸⏯⏹⏺⏭⏮⏩⏪⏫⏬◀️🔼🔽➡️⬅️⬆️⬇️↗️↘️↙️↖️↕️↔️↪️↩️⤴️⤵️🔀🔁🔂🔄🔃🎵🎶➕➖➗✖️♾💲💱〰️➰➿🔚🔙🔛🔝🔜✔️☑️`,
    ]
    const emojis = document.querySelector(".emojis")
    const emojisSpans = arr1.map((emoji) => {
      return emoji
    })
    const emojisSpans2 = arr2.map((emojis) => {
      return emojis
    })
    const emojisSpans3 = arr3.map((emojis) => {
      return emojis
    })
    const emojisSpans4 = arr4.map((emojis) => {
      return emojis
    })
    const emojisSpans5 = arr5.map((emojis) => {
      return emojis
    })
    const emojisSpans6 = arr6.map((emojis) => {
      return emojis
    })
    emojisSpans.forEach((emoji) => {
      const span = document.createElement("span")
      span.classList.add("emoji-icon-add-one")
      span.innerText = emoji
      emojis.append(span)
    })
    emojisSpans2.forEach((emoji) => {
      const span = document.createElement("span")
      span.classList.add("emoji-icon-add-one")
      span.innerText = emoji
      emojis.append(span)
    })
    emojisSpans3.forEach((emoji) => {
      const span = document.createElement("span")
      span.classList.add("emoji-icon-add-one")
      span.innerText = emoji
      emojis.append(span)
    })
    emojisSpans4.forEach((emoji) => {
      const span = document.createElement("span")
      span.classList.add("emoji-icon-add-one")
      span.innerText = emoji
      emojis.append(span)
    })
    emojisSpans5.forEach((emoji) => {
      const span = document.createElement("span")
      span.classList.add("emoji-icon-add-one")
      span.innerText = emoji
      emojis.append(span)
    })
    emojisSpans6.forEach((emoji) => {
      const span = document.createElement("span")
      span.classList.add("emoji-icon-add-one")
      span.innerText = emoji
      emojis.append(span)
    })
    const emojiIcon = document.querySelector(".emoji-icon")
    const drawer = document.querySelector(".drawer")
    drawer.scrollTop = 0
    const facesEmojiType = document.querySelector(".facesEmojis")
    const historyEmojis = document.querySelector(".historyEmojis")
    historyEmojis.classList.add("typ-emoji-active")
    emojiIcon.addEventListener("click", (e) => {
      input.focus()
      e.stopPropagation()
      drawer.classList.toggle("drawer-active")
      emojiIcon.classList.toggle("emoji-icon-active")
    })

    const body = document.querySelector("html")
    body.addEventListener("click", (e) => {
      if (drawer.classList.contains("drawer-active")) {
        input.focus()
        e.stopPropagation()
        if (
          !e.target.classList.contains("drawer-active") &&
          !e.target.classList.contains("emoji-icon-add-one") &&
          !e.target.classList.contains("emojis") &&
          !e.target.classList.contains("type") &&
          !e.target.classList.contains("drawer") &&
          !e.target.parentElement.classList.contains("historyEmojisDiv") &&
          !e.target.classList.contains("historyEmojisDiv")
        ) {
          emojiIcon.classList.remove("emoji-icon-active")
          drawer.classList.remove("drawer-active")
        }
      }
    })
    const handIcons = document.querySelectorAll(".emoji-icon-add-one")[104]
    let faceIcons
    const humanIcons = document.querySelectorAll(".emoji-icon-add-one")[150]
    const clothesIcons = document.querySelectorAll(".emoji-icon-add-one")[170]
    const natureIcons = document.querySelectorAll(".emoji-icon-add-one")[210]
    const loveIcons = document.querySelectorAll(".emoji-icon-add-one")[410]

    const handsEmojis = document.querySelector(".handsEmojis ")
    const humansEmojis = document.querySelector(".humansEmojis ")
    const clothesEmojis = document.querySelector(".clothesEmojis")
    const natureEmojis = document.querySelector(".natureEmojis")
    const loveEmojis = document.querySelector(".loveEmojis")

    handsEmojis.addEventListener("click", () => {
      emojis.classList.add("emojis-enabled")
      historyEmojisDiv.classList.add("historyEmojisDiv-disbaled")

      handIcons.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
      handsEmojis.classList.add("typ-emoji-active")
      humansEmojis.classList.remove("typ-emoji-active")
      clothesEmojis.classList.remove("typ-emoji-active")
      natureEmojis.classList.remove("typ-emoji-active")
      loveEmojis.classList.remove("typ-emoji-active")
      historyBtnIcon.classList.remove("typ-emoji-active")
      facesEmojiType.classList.remove("typ-emoji-active")
    })

    facesEmojiType.addEventListener("click", () => {
      emojis.classList.add("emojis-enabled")
      historyEmojisDiv.classList.add("historyEmojisDiv-disbaled")

      emojis.classList.remove("emojis-disabled")

      handsEmojis.classList.remove("typ-emoji-active")

      facesEmojiType.classList.add("typ-emoji-active")
      humansEmojis.classList.remove("typ-emoji-active")
      clothesEmojis.classList.remove("typ-emoji-active")
      natureEmojis.classList.remove("typ-emoji-active")
      loveEmojis.classList.remove("typ-emoji-active")

      if (historyBtnIcon.classList.contains("typ-emoji-active")) {
        faceIcons = document.querySelectorAll(".emoji-icon-add-one")[8]
      } else {
        faceIcons = document.querySelectorAll(".emoji-icon-add-one")[9]
      }
      faceIcons.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })

      historyBtnIcon.classList.remove("typ-emoji-active")
    })
    humansEmojis.addEventListener("click", () => {
      emojis.classList.add("emojis-enabled")
      historyEmojisDiv.classList.add("historyEmojisDiv-disbaled")

      emojis.classList.remove("emojis-disabled")

      handsEmojis.classList.remove("typ-emoji-active")
      facesEmojiType.classList.remove("typ-emoji-active")
      humansEmojis.classList.add("typ-emoji-active")
      clothesEmojis.classList.remove("typ-emoji-active")
      natureEmojis.classList.remove("typ-emoji-active")
      loveEmojis.classList.remove("typ-emoji-active")
      historyBtnIcon.classList.remove("typ-emoji-active")
      humanIcons.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    })
    clothesEmojis.addEventListener("click", () => {
      emojis.classList.remove("emojis-disabled")

      console.log(clothesIcons)
      handsEmojis.classList.remove("typ-emoji-active")
      facesEmojiType.classList.remove("typ-emoji-active")
      humansEmojis.classList.remove("typ-emoji-active")
      clothesEmojis.classList.add("typ-emoji-active")
      natureEmojis.classList.remove("typ-emoji-active")
      loveEmojis.classList.remove("typ-emoji-active")
      historyBtnIcon.classList.remove("typ-emoji-active")
      clothesIcons.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    })
    natureEmojis.addEventListener("click", () => {
      emojis.classList.add("emojis-enabled")
      historyEmojisDiv.classList.add("historyEmojisDiv-disbaled")

      emojis.classList.remove("emojis-disabled")

      console.log(natureIcons)
      handsEmojis.classList.remove("typ-emoji-active")
      facesEmojiType.classList.remove("typ-emoji-active")
      humansEmojis.classList.remove("typ-emoji-active")
      clothesEmojis.classList.remove("typ-emoji-active")
      natureEmojis.classList.add("typ-emoji-active")
      loveEmojis.classList.remove("typ-emoji-active")
      historyBtnIcon.classList.remove("typ-emoji-active")
      natureIcons.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    })
    loveEmojis.addEventListener("click", () => {
      emojis.classList.add("emojis-enabled")
      historyEmojisDiv.classList.add("historyEmojisDiv-disbaled")

      emojis.classList.remove("emojis-disabled")

      handsEmojis.classList.remove("typ-emoji-active")
      facesEmojiType.classList.remove("typ-emoji-active")
      humansEmojis.classList.remove("typ-emoji-active")
      clothesEmojis.classList.remove("typ-emoji-active")
      natureEmojis.classList.remove("typ-emoji-active")
      loveEmojis.classList.add("typ-emoji-active")
      historyBtnIcon.classList.remove("typ-emoji-active")
      loveIcons.scrollIntoView({
        behavior: "smooth",
        block: "center",
      })
    })
    //!
    const allEmojies = emojis.querySelectorAll("span")
    //
    let historyEmoji
    allEmojies.forEach((e) => {
      e.addEventListener("click", (e) => {
        input.value += e.target.innerText
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
        var x = window.matchMedia("(max-width: 750px)")
        myFunction(x)
        x.addListener(myFunction)

        if (!localStorage.getItem("emojiHistory")) {
          localStorage.setItem(
            "emojiHistory",
            JSON.stringify([...e.target.innerText])
          )
        } else {
          historyEmoji = JSON.parse(localStorage.getItem("emojiHistory"))
          historyEmoji.length = 13
          historyEmoji.forEach((one, index1) => {
            if (e.target.innerText === one) {
              console.log(one)
              if (index1 > -1) {
                historyEmoji.splice(index1, 1)
              }
            }
          })
          historyEmoji.unshift(e.target.innerText)
          localStorage.setItem("emojiHistory", JSON.stringify(historyEmoji))
        }
      })
    })
    const historyBtnIcon = document.querySelector(".historyEmojis")
    const historyEmojisDiv = document.querySelector(".historyEmojisDiv")

    //
    if (localStorage.getItem("emojiHistory")) {
      const historyData = JSON.parse(localStorage.getItem("emojiHistory"))

      for (let i = 0; i < historyData.length; i++) {
        const span = document.createElement("span")
        span.innerText = historyData[i]
        historyEmojisDiv.append(span)
      }
    }

    //
    historyBtnIcon.addEventListener("click", () => {
      emojis.classList.remove("emojis-enabled")
      historyEmojisDiv.classList.remove("historyEmojisDiv-disbaled")

      handsEmojis.classList.remove("typ-emoji-active")
      facesEmojiType.classList.remove("typ-emoji-active")
      humansEmojis.classList.remove("typ-emoji-active")
      clothesEmojis.classList.remove("typ-emoji-active")
      natureEmojis.classList.remove("typ-emoji-active")
      loveEmojis.classList.remove("typ-emoji-active")
      historyBtnIcon.classList.add("typ-emoji-active")
      emojis.classList.add("emojis-disabled")
      historyEmojisDiv.classList.add("historyEmojisDiv-active")

      historyEmojisDiv.innerHTML = ""
      if (localStorage.getItem("emojiHistory")) {
        const historyData = JSON.parse(localStorage.getItem("emojiHistory"))
        for (let i = 0; i < historyData.length; i++) {
          const span = document.createElement("span")
          span.innerText = historyData[i]
          historyEmojisDiv.append(span)
        }
        const spansOfMemory = historyEmojisDiv.querySelectorAll("span")

        if (spansOfMemory !== []) {
          spansOfMemory.forEach((e) => {
            e.addEventListener("click", (e) => {
              input.value += e.target.innerText
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
              var x = window.matchMedia("(max-width: 700px)")
              myFunction(x)
              x.addListener(myFunction)
            })
          })
        }
      }
    })

    const deleteBtn = document.querySelector(".deleteIcon")
    deleteBtn.addEventListener("click", () => {
      input.value = input.value.slice(0, -2)
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

      var x = window.matchMedia("(max-width: 750px)")
      myFunction(x)
      x.addListener(myFunction)
    })
    //
    //
    const spansOfMemory = historyEmojisDiv.querySelectorAll("span")

    if (spansOfMemory !== []) {
      spansOfMemory.forEach((e) => {
        e.addEventListener("click", (e) => {
          input.value += e.target.innerText

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

          var x = window.matchMedia("(max-width: 700px)")
          myFunction(x)
          x.addListener(myFunction)
        })
      })
    }
  }
}
