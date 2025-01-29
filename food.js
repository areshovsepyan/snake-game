import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
const EXPANSION_RATE = 2

export function update(FOOD_LEFT) {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE)
    FOOD_LEFT--
    food = getRandomFoodPosition()
  }
  return FOOD_LEFT
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')

  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')

  gameBoard.appendChild(foodElement)
}

export function drawLeftFood(foodBoard, FOOD_LEFT) {
  foodBoard.innerHTML = ''

  for (let i = 0; i < FOOD_LEFT; i++) {
    const foodElement = document.createElement('div')
    foodElement.classList.add('food')
    foodBoard.appendChild(foodElement)
  }

  return
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
