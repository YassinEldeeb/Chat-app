function recordAudio() {
  let counter
  let stopWatch
  const Start = document.querySelector(".startRecordingButton")
  const statusRecording = document.querySelector(".status-recording-options")
  const stopWatchRec = document.querySelector(".stopWatch-rec")

  Start.addEventListener("click", () => {
    if (Start.classList.contains("startRec")) {
      stopWatchRec.innerText = `0:00`
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        let mediaRecorder = new MediaRecorder(stream)
        const audioChunks = []

        mediaRecorder.addEventListener("dataavailable", (event) => {
          audioChunks.push(event.data)
        })
        Start.innerHTML = `<svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M27.2729 11.5024L3.87498 0.250462C2.88927 -0.223616 1.77565 -0.0150661 0.968806 0.79445C0.16196 1.6041 -0.175506 2.85159 0.0882135 4.05004L2.17084 13.5153H12.3676C12.8368 13.5153 13.2173 13.9562 13.2173 14.5C13.2173 15.0438 12.8369 15.4848 12.3676 15.4848H2.17084L0.0882135 24.95C-0.175506 26.1485 0.161903 27.396 0.968806 28.2056C1.7773 29.0167 2.89102 29.2227 3.87504 28.7495L27.273 17.4976C28.3383 16.9854 29 15.8367 29 14.5C29 13.1633 28.3383 12.0146 27.2729 11.5024Z" fill="white"/>
</svg>
`
        statusRecording.classList.add("status-recording-options-active")

        Start.classList.remove("startRec")
        mediaRecorder.start()
        counter = 1

        stopWatch = setInterval(() => {
          stopWatchRec.innerText = `0:0${counter}`
          counter++
        }, 1000)

        Start.addEventListener("click", () => {
          if (!Start.classList.contains("startRec")) {
            mediaRecorder.stop()
            Start.innerHTML = `<svg width="20" height="34" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20 17.453C20 16.7771 19.5221 16.2603 18.8971 16.2603C18.2721 16.2603 17.7941 16.7771 17.7941 17.453C17.7941 22.1045 14.3015 25.8813 10 25.8813C5.69853 25.8813 2.20588 22.1045 2.20588 17.453C2.20588 16.7771 1.72794 16.2603 1.10294 16.2603C0.477941 16.2603 0 16.7771 0 17.453C0 22.9791 3.82353 27.6306 8.89706 28.227V31.4075H4.88971C4.26471 31.4075 3.78677 31.9244 3.78677 32.6002C3.78677 33.2761 4.26471 33.7929 4.88971 33.7929H15.1103C15.7353 33.7929 16.2132 33.2761 16.2132 32.6002C16.2132 31.9244 15.7353 31.4075 15.1103 31.4075H11.1029V28.227C16.1765 27.6306 20 22.9791 20 17.453Z" fill="white"/>
<path d="M10.0001 0C6.61771 0 3.86035 2.98174 3.86035 6.63935V17.4134C3.86035 21.1107 6.61771 24.0527 10.0001 24.0925C13.3824 24.0925 16.1398 21.1107 16.1398 17.4531V6.63935C16.1398 2.98174 13.3824 0 10.0001 0Z" fill="white"/>
</svg>
`

            statusRecording.classList.remove("status-recording-options-active")

            Start.classList.add("startRec")
            mediaRecorder.addEventListener("stop", () => {
              const audioBlob = new Blob(audioChunks)
              const audioUrl = URL.createObjectURL(audioBlob)
              socket.emit("voiceRecorded", audioUrl)
            })

            stream.getTracks().forEach((track) => {
              track.stop()

              mediaRecorder = null
              clearInterval(stopWatch)
              stopWatch = null
            })
          }
        })
      })
    }
  })
}
