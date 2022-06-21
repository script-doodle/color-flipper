const btn = document.getElementById("btn");
const colorCode = document.querySelector(".color__code");

// When user clicks the button, content of '.color__code' span and website background color will change
btn.addEventListener("click", function () {
  const hsl = getRandomColor();

  colorCode.textContent = hsl;
  document.body.style.backgroundColor = hsl;
});

// Function to get a random number
function getRandomNumber(min, max) {
  return Math.floor(min + Math.random() * (max - min));
}

// Function to get a random color value
function getRandomColor() {
  let h = getRandomNumber(1, 360);
  let s = getRandomNumber(0, 100);
  let l = getRandomNumber(0, 100);

  return `hsl(${h}, ${s}%, ${l}%)`;
}
