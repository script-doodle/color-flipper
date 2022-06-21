const btn = document.getElementById("btn");
const color = document.querySelector(".color__code");

// When user clicks the button, content of '.color__code' span and website background color will change
btn.addEventListener("click", function () {
  const rgb = getRandomColor();

  color.textContent = rgb;
  document.body.style.backgroundColor = rgb;
});

// Function to get a random color value
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}
