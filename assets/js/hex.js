const hexDigit = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color__code");

// When user clicks the button, content of '.color__code' span and website background color will change
btn.addEventListener("click", function () {
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexDigit[getRandomNumber()];
  }
  color.textContent = hex;
  document.body.style.backgroundColor = hex;
});

// Function to get a random number from 'hexDigit' length
function getRandomNumber() {
  return Math.floor(Math.random() * hexDigit.length);
}
