// Using the HTML provided write code that does the following:

// when the button is pressed and held down start a counter that increments by 1 every second
// When the button is released stop the counter and create an amount of text boxes equal to the counter value
// when the counter is pressed and held down again set the counter to 0, clear the text inputs and repeat the previous step

const button = document.querySelector("button");
const counter = document.querySelector(".counter");
const inputs = document.querySelector(".inputs");
const inter = 1000;

button.addEventListener("mousedown", countUp);
button.addEventListener("mouseup", createBox);

let intervalId = 0;
let value = 0;

function countUp() {
  value = 0;
  this.texContent = "Release to stop counting";
  counter.innerHTML = value;
  inputs.innerHTML = "";
  counter.innerHTML = value;

  intervalId = setInterval(function () {
    value++;
    counter.innerHTML = value;
  }, inter);
}

function createBox() {
  clearInterval(intervalId);
  for (let i = 1; i <= value; i++) {
    inputs.innerHTML += `<input name="input${i}" id="input${i}" placeholder="Input ${i}" />`;
  }
}
