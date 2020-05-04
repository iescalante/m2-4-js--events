const main = document.querySelector("#main");

function toggle(event) {
  const buttonId = event.target.id;
  document.querySelector(buttonId).classList.toggle("green");
}

for (let i = 1; i <= 20; i++) {
  const button = document.createElement("button");
  button.innerText = i;
  button.id = "btn-" + i;
  button.style.left = `${Math.random() * 100}vh`;
  button.style.top = `${Math.random() * 50}vw`;
  main.appendChild(button);

  button.addEventListener("click", toggle);
}
