const basicColors = ["Red", "Yellow", "Blue", "Orange", "Green", "Violet"];
const btn = document.getElementById("btn");
const heading = document.querySelector('.heading')
const colorCode = document.querySelector(".color__code");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // Change body background 
  document.body.style.backgroundColor = basicColors[randomNumber];
  // Change color code text 
  colorCode.innerText = basicColors[randomNumber];
});

// Function to get a random number from 'basicColors' length
function getRandomNumber() {
  return Math.floor(Math.random() * basicColors.length);
}
