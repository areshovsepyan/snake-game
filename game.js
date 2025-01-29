import {
  SNAKE_SPEED,
  getSnakeHead,
  snakeIntersection,
  update as updateSnake,
  draw as drawSnake
} from './snake.js'

import { update as updateFood, draw as drawFood, drawLeftFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
let gameWon = false
let FOOD_LEFT = 10
const container = document.getElementById('container')
const gameBoard = document.getElementById('game-board')
const foodBoard = document.getElementById('food-board')

function main(currentTime) {
  if (gameOver) {
    return handleGameOver()
  }
  if (gameWon) {
    return handleGameWin()
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

  lastRenderTime = currentTime

  update()

  draw()
}
window.requestAnimationFrame(main)

function update() {
  checkWin()
  updateSnake()
  FOOD_LEFT = updateFood(FOOD_LEFT)
  checkFailure()
}
function draw() {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
  drawLeftFood(foodBoard, FOOD_LEFT)
}

function checkFailure() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
function checkWin() {
  gameWon = FOOD_LEFT === 0
}
function handleGameWin() {
  const winMessage = document.createElement('div')

  winMessage.classList.add('win-message')

  container.appendChild(winMessage)
}
function handleGameOver() {
  const lostMessage = document.createElement('div')

  lostMessage.classList.add('lost-message')

  container.appendChild(lostMessage)
}
