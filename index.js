// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

const incrementButton = document.querySelector('#incrementButton');
const decrementButton = document.querySelector('#decrementButton');
const numberElement = document.getElementById('number');
const userInput = document.getElementById('userInput');
let inputValue = userInput.value;
let numberValue = 0;
updateNumberElement();

incrementButton.addEventListener('click', increment);

decrementButton.addEventListener('click', decrement);

userInput.addEventListener('input', updateUserInput);

//connect button to number
//change inner html
function updateNumberElement() {
  numberElement.innerText = numberValue;
}

function updateUserInput(e) {
  inputValue = e.target.value;
}

function increment() {
  const inputValue = userInput.value;
  numberValue += Number(inputValue);
  updateNumberElement();
}

function decrement() {
  numberValue -= Number(inputValue);
  updateNumberElement();
}
