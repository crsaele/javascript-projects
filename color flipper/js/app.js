// Almacena los colores en una variable
const colors = ["green", "red", "blue", "yellow"];
// Selecciona el boton
const btn = document.getElementById("btn");
// Selecciona la clase color
const color = document.querySelector(".color");


// Se le agrega a la variable btn un addEventListener
btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}