import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

const h1Score = document.querySelector('h1'); // Selects the first <h1> element

let food = randomGridPosition(); // Ensure this function is properly defined
const EXPANSION_RATE = 1;
let score = 0;

export function update() {
  if (onSnake(food)) {
    expandSnake(EXPANSION_RATE);
    food = randomGridPosition();
    score++;
    h1Score.textContent = score; // Updates the content of the <h1> element directly
  }
}



export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
  //
}
 
function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
   
  }
  return newFoodPosition
}