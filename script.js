let tela = document.querySelector(".resultado");
let botoes = document.querySelectorAll("button");

for (let botao of botoes) {
  botao.addEventListener("click", function () {
    if (this.id === "c") {
      tela.innerHTML = "";
    } else if (this.id === "=") {
      tela.innerHTML = Math.floor(eval(tela.innerHTML));
    } else if (this.id === "<") {
      tela.innerHTML = tela.innerHTML.substring(0, tela.innerHTML.length - 1);
    } else {
      tela.innerHTML += this.id;
    }
  });
}
