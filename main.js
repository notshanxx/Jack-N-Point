let yourChoice = ''
let yourScore = 0
let computerScore = 0
let normalDifficulty = true
let impossibleDifficulty = false


// Tap to start
let tapToStart = document.getElementById("tap-to-start")
tapToStart.addEventListener('click', removeCover);
function removeCover() {
  
  tapToStart.parentNode.removeChild(tapToStart)
  document.removeEventListener('click', removeCover);
}



//Choices and announces
let computerEl = document.getElementById('computer-choice')
let yourEl = document.getElementById('your-choice')
let announce = document.getElementById('announce')


//Choose Choices
document.getElementById('rock-btn').addEventListener('click', chooseRock)
document.getElementById('paper-btn').addEventListener('click', choosePaper)
document.getElementById('scissor-btn').addEventListener('click', chooseScissor)

function chooseRock(){
  yourChoice = 'rock'
  yourEl.innerHTML = '<img style="animation: readyyou .5s cubic-bezier(0.5,0.3,0.3,0.5)" src="/img/rock.png" alt="rock picture">'
}
function choosePaper(){
  yourChoice = 'paper'
  yourEl.innerHTML = '<img style="animation: readyyou .5s cubic-bezier(0.5,0.3,0.3,0.5)" src="/img/paper.png" alt="Paper Picture">'
}
function chooseScissor(){
  yourChoice = 'scissor'
  yourEl.innerHTML = '<img style="animation: readyyou .5s cubic-bezier(0.5,0.3,0.3,0.5)"  src="/img/scissor.png" alt="Scissor Picture">'
}



//Scores
document.getElementById('your-score').textContent = yourScore
document.getElementById('computer-score').textContent = computerScore



//difficulty
document.getElementById('normal-btn').addEventListener('click', normalLevel)
document.getElementById('impossible-btn').addEventListener('click', impossibleLevel)

function showSetting(){
  document.querySelector(".difficulty").classList.toggle("open-difficulty")
}

function normalLevel(){
  document.getElementById('difficulty').innerHTML = '<span style="color: #6FFF98">Normal</span>'
  normalDifficulty = true
  impossibleDifficulty = false
}
function impossibleLevel(){
  document.getElementById('difficulty').textContent = "Impossible"
  document.getElementById('difficulty').innerHTML = '<span style="color: #FF6F6F">Impossible</span>'
  normalDifficulty = false
  impossibleDifficulty = true
}


//play onclick

document.getElementById('play-game').addEventListener('click', () => {
  //check if the score is 5 
  if(yourScore === 5){
  announce.innerHTML = `here is your reward <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style="color: red">tap to see</a>`
}else if(computerScore === 5){
  return announce.innerHTML = `try again, <a style="color: red" onClick="window.location.reload()">Retry</a>`
}else{
  playGame()
}
})


//Functions

function playGame(){
  
 if(yourChoice === '' && yourScore === -100){
   announce.style.color = "#81E7D7"
    return announce.innerHTML = `Uhmmm, It looks like you love the Play button to much, It started to avoid you. It leaves a video message <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style="color: red">HERE</a>`
    
  }else if(yourChoice === ''){
    yourScore--
    announce.style.color = "#FFADAD"
    announce.textContent = "You failed to choose, You lose score :D"
  }
  
  if (yourScore <= -20) {
    announce.style.color = "#BBFFAD"
    announce.textContent = `You can do it ${yourScore + 101} more`
  } else if (yourScore <= -15) {
    announce.textContent = "Don't try to get -100"
  } else if (yourScore <= -5) {
    announce.textContent = `Stop spamming play button :)`
  }
  
  
  let computerChoice = computerMove()
  
  
  if(computerChoice === 'rock'){
    computerEl.innerHTML = '<img style="animation: readycomp .5s cubic-bezier(0.5,0.3,0.3,0.5)" src="/img/computer-rock.png" alt="rock picture">'
  }else if(computerChoice === 'paper'){
    computerEl.innerHTML = '<img style="animation: readycomp .5s cubic-bezier(0.5,0.3,0.3,0.5)" src="/img/computer-paper.png" alt="Paper Picture">'
  }else if(computerChoice === 'scissor'){
    computerEl.innerHTML = '<img style="animation: readycomp .5s cubic-bezier(0.5,0.3,0.3,0.5)"  src="/img/computer-scissor.png" alt="Scissor Picture">'
  }
  
  if (yourChoice === 'rock') {
    if (computerChoice === 'rock') {

      announce.textContent = "You both choose ROCK, It's a Tie"
    } else if (computerChoice === 'paper') {

      computerScore++
      announce.style.color = "#FFADAD"
      announce.textContent = "Computer choose PAPER, You Lose"
    } else if (computerChoice === 'scissor') {

      yourScore++
      announce.textContent = "Computer choose SCISSOR, You Win"
    }
  }
  if (yourChoice === 'paper') {
    if (computerChoice === 'rock') {

      yourScore++
      announce.textContent = "Computer choose ROCK, You win"
    } else if (computerChoice === 'paper') {


      announce.textContent = "You both choose PAPER, It's a Tie"
    } else if (computerChoice === 'scissor') {

      computerScore++
      announce.style.color = "#FFADAD"
      announce.textContent = "Computer choose SCISSORS, You Lose"
    }
  }
  if (yourChoice === 'scissor') {
    if (computerChoice === 'rock') {

      computerScore++
      announce.style.color = "#FFADAD"
      announce.textContent = "Computer choose ROCK, You Lose"
    } else if (computerChoice === 'paper') {

      yourScore++
      announce.textContent = "Computer choose PAPER, You Win"
    } else if (computerChoice === 'scissor') {

      announce.textContent = "You both choose SCISSOR, It's a Tie"
    }
  }
  
displayScore()

computerChoice = ''
yourChoice = ''

setTimeout(function(){
  yourEl.innerHTML = '<img style="animation: opacity .5s ease-in-out" src="/img/default.png" alt="rock picture">'
  computerEl.innerHTML = '<img style="transform: rotateY(180deg); animation: opacity .5s ease-in-out" src="/img/default.png" alt="rock picture">'
}, 600)

  if(yourScore === 5){
  announce.innerHTML = `here is your reward <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ' style="color: red">tap to see</a>`
}else if(computerScore === 5){
  return announce.innerHTML = `try again, <a style="color: red" onClick="retry()">Retry</a>`
}
}




function computerMove(){
  if (normalDifficulty === true && impossibleDifficulty === false) {
   let choices = ["rock", "paper", "scissor"]
   let randomChoice = choices[Math.floor(Math.random() * choices.length)]
   return randomChoice
 } else if(normalDifficulty === false && impossibleDifficulty === true){
   if(yourChoice === 'rock'){
     return 'paper'
     computerEl.textContent = 'paper'
   }else if(yourChoice === 'paper'){
     return 'scissor'
   }else if(yourChoice === 'scissor'){
     return 'rock'
   }
 }
}

//??

function retry(){
  setTimeout(function (){window.location.reload()}, 400)
  announce.innerHTML = ''
  computerScore = 0
  yourScore = 0
  displayScore()
  
    yourEl.innerHTML = '<img style="animation: opacity .5s ease-in-out" src="/img/default.png" alt="rock picture">'
    computerEl.innerHTML = '<img style="transform: rotateY(180deg); animation: opacity .5s ease-in-out" src="/img/default.png" alt="rock picture">'
  
  document.querySelector("body").style.animation = "opacity 1s"
}

document.querySelector(".feather-rotate-ccw").addEventListener('click', function(){
  document.querySelector(".feather-rotate-ccw").style.animation = "rotate-ccw .8s cubic-bezier(0.5,0.3,0.3,0.5)"
})

function displayScore(){
document.getElementById('your-score').textContent = yourScore
document.getElementById('computer-score').textContent = computerScore
}
