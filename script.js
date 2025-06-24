function inserirNome(){
   let nomeUsuário = prompt("Qual o seu nome");
   let elemento = document.querySelector("#nome-usuário");
   elemento.textContent = nomeUsuário

}
inserirNome();
