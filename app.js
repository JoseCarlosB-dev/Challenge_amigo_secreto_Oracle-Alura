let amigos = [];

function adicionarAmigo() {
    nome = document.getElementById('amigo').value;
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    } else {
        amigos.push(nome);
        console.log("Nomes na lista:", amigos);
    }

  console.log("Nome válido:", nome);

  limparCampo();
  atualizarLista();
}

function limparCampo() {
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let posicaoAmigo = 0; posicaoAmigo < amigos.length; posicaoAmigo++) {
        lista.innerHTML += "<li>" + amigos[posicaoAmigo] + "</li>";
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione algum nome primeiro!");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    console.log("Amigo sorteado:", amigoSorteado);

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}