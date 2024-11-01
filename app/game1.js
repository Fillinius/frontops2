let randomNumber = Math.floor(Math.random() * 100) + 1

const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')

const guessSubmit = document.querySelector('.guessSubmit')
const guessField = document.querySelector('.guessField')

let guessCount = 1
let resetButton

function checkGuess() {
  const userGuess = Number(guessField.value)
  if (guessCount === 1) {
    guesses.textContent = 'Предыдущее выбранное число: '
  }
  guesses.textContent += userGuess + ' '

  if (userGuess === randomNumber) {
    lastResult.textContent = 'поздравляем, Вы выиграли!'
    lastResult.style.backgroundColor = 'green'
    lowOrHi.textContent = ''
    setGameOver()
  } else if (guessCount === 10) {
    lastResult.textContent = '!!!GAME OVER!!!'
    lowOrHi.textContent = ''
    setGameOver()
  } else {
    lastResult.textContent = 'Не верно!'
    lastResult.style.backgroundColor = 'red'
    if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Выбранное чило слишком мало!'
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Выбранное число слишком велико!'
    }
  }

  guessCount++
  guessField.value = ''
  guessField.focus()
}
guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
  guessField.disabled = true
  guessSubmit.disabled = true
  const startGame = document.getElementById('startGame')
  resetButton = document.createElement('button')
  resetButton.className = 'start'
  resetButton.textContent = 'Start new game'
  startGame.append(resetButton)
  resetButton.addEventListener('click', resetGame)
}

function resetGame() {
  guessCount = 1

  const resetParas = document.querySelectorAll('.resultParas p')
  for (const resetPara of resetParas) {
    resetPara.textContent = ''
  }
  guessField.disabled = false
  guessSubmit.disabled = false
  guessField.value = ''
  guessField.focus()

  lastResult.style.backgroundColor = 'white'

  randomNumber = Math.floor(Math.random() * 100) + 1
}
