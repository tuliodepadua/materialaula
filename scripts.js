document.addEventListener("keydown", (event) => {
  console.log(`Tecla pressionada: ${event.key}`);
});

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", () => {
  alert("Clicou no botão");
});

const btn2 = document.getElementById("btn2");
btn2.addEventListener("mouseover", () => {
  alert("Mouse em cima do elemento!");
});

const btn3 = document.getElementById("btn3");
btn3.addEventListener("mouseout", () => {
  alert("Mouse saiu do elemento!");
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Formulário enviado!");
});
