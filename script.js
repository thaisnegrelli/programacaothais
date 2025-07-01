function inserirNome(){
   let nomeUsuário = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuário");
   elemento.textContent = nomeUsuário

}
inserirNome();

let linguagens = ["JavaScript","Python","C++"];
console.log(linguagens[0]) 
console.log(linguagens[1])
console.log(linguagens[2])

const item = document.querySelector("#lista");
item.textContent = linguagens[0]

