# 🎁 Challenge Amigo Secreto

Este projeto faz parte do curso **Iniciante em Programação** da **Oracle Next Education (ONE) + Alura**.
O desafio consiste em criar uma aplicação simples que permita adicionar nomes de amigos a uma lista e realizar um sorteio aleatório para definir quem é o **amigo secreto**.

Neste desafio, foi desenvolvido uma aplicação que:

* Permite ao usuário inserir nomes por meio de um campo de texto.
* Exibe os nomes adicionados em uma lista visível na página.
* Sorteia um nome aleatório ao clicar em **"Sortear Amigo"**.

---

## Funcionalidades

✔️ **Adicionar nomes**: O usuário insere um nome em um campo de texto e, ao clicar em **"Adicionar"**, o nome é incluído na lista.

✔️ **Validação de entrada**: Se o campo estiver vazio, um alerta pedirá para inserir um nome válido.

✔️ **Visualização da lista**: Os nomes digitados são exibidos em uma lista abaixo do campo de entrada.

✔️ **Sorteio aleatório**: Ao clicar no botão **"Sortear Amigo"**, um nome da lista é escolhido aleatoriamente e exibido na tela.

---

## Tecnologias utilizadas

* **HTML**
* **CSS**
* **JavaScript**

---

## Estrutura principal do código - JavaScript

```javascript
let amigos = []; 

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;
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
    let nome = document.querySelector('input');
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
```

---
## Como usar

Você pode acessar o projeto diretamente pelo navegador, sem precisar baixar os arquivos:

[https://josecarlosb-dev.github.io/Challenge\_amigo\_secreto\_Oracle-Alura/](https://josecarlosb-dev.github.io/Challenge_amigo_secreto_Oracle-Alura/) 

Passos para testar:

Abra o link acima no navegador.

Digite os nomes no campo de texto e clique em Adicionar.

Após inserir todos os nomes, clique em Sortear Amigo para descobrir o sorteado.

---

## Aprendizados

* Manipulação do DOM com **JavaScript**.
* Uso de arrays (`push`, acesso por índice e `length`).
* Laços de repetição (`for`).
* Funções auxiliares para limpar campo e atualizar lista.
* Geração de números aleatórios com `Math.random()` e `Math.floor()`.

---

## Autor

Desenvolvido por José Carlos como parte do curso **Iniciante em Programação - Oracle ONE + Alura**.

