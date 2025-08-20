//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listaAmigos = [];

function adicionarAmigo() {
  let nome = document.getElementById("amigo").value;
  if (nome === "") {
    alert("Eita, algo de errado aqui. Digite um nome válido!");
    return
  } // Previne erro em caso de não ser digitado um nome

  for (let i = 0; i < listaAmigos.length; i++) {
    if (listaAmigos[i] === nome) {
      alert("Um amigo secreto com esse mesmo nome já foi cadastrado!");
      return;
    }
  }

  listaAmigos.push(nome);
  document.getElementById("amigo").value = ""; // Deixa o campo vazio para o próximo nome

  console.log(listaAmigos);

  let lista = document.getElementById("lista");
  lista.innerHTML = "";

  for (let i = 0; i < listaAmigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = listaAmigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (listaAmigos.length === 0) {
    alert("Opa, ninguém vai participar? Nenhum nome cadastrado até agora. Seja o primeiro!");
    return;
  }
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let amigoSorteado = listaAmigos[indice];

    document.getElementById("resultado").textContent = amigoSorteado;

  }

