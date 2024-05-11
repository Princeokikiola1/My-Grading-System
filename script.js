function gradeChecker(){
  var score = appear.value
  var song1 = new Audio("audio/clap.wav")
  var song2 = new Audio("audio/make.mp3")
  var song3 = new Audio("audio/shout.mp3")
  var song4 = new Audio("audio/pity.mp3")
  var song5 = new Audio("audio/play.mp3")
  var song6 = new Audio("audio/defend.mp3")
  if (score == "") {
    show.innerHTML =("Field can not be Empty");
  } else {
    if (score >= 0 && score <= 39) {
        show.innerHTML =("F-You are a failure 😂");
        show.style.color = "red"
        song2.play()
    }
    if (score >= 40 && score <= 50) {
        show.innerHTML = ("E- Poor 😒")
        song3.play()
        show.style.color = "orange"
    }
    if (score >= 51 && score <= 60) {
        show.innerHTML = ("D- Fair 😆")
        song4.play()
        show.style.color = "yellow"
    }
    if (score >= 61 && score <= 70) {
        show.innerHTML = ("C- Good 😛")
        song5.play()
    }
    if (score >= 71 && score <= 80) {
        show.innerHTML = ("B-Very Good 😎")
        show.style.color = "blue"
        song6.play()
    }
    if (score >= 81 && score <= 100) {
        show.innerHTML = ("A-Excellence ✔")
        song1.play()
        show.style.color = "green"
    }
    if (score > 100 ) {
      show.innerHTML = ("Invalid input")
    }
  }
  appear.value = ""
}