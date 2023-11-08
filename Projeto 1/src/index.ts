import './style.css'

import icone from './img/icons8-contatos.svg'

const header = document.querySelector("header")
const img = document.createElement("img")

img.src = icone
header?.prepend(img)

function adicionarContato(nome: string, telefone: string, email: string, interesses: string[]) {
    // Acessar a tabela pelo id
    const tabelaContatos = document.getElementById("tabela-contatos") as HTMLTableElement;

    // Criar uma nova linha
    const novaLinha = tabelaContatos.insertRow();
    // Inserir células para cada coluna
    const colunaNome = novaLinha.insertCell(0);
    const colunaTelefone = novaLinha.insertCell(1);
    const colunaEmail = novaLinha.insertCell(2);
    const colunaInteresses = novaLinha.insertCell(3);
    // Preencher as células com os dados
    colunaNome.textContent = nome;
    colunaTelefone.textContent = telefone;

    // Criar um link de e-mail
    const linkEmail = document.createElement("a");
    linkEmail.href = "mailto:" + email;
    linkEmail.textContent = email;
    // Adicionar o link de e-mail à célula
    colunaEmail.appendChild(linkEmail);

    // Criar uma lista de interesses
    const listaInteresses = document.createElement("ul");
    for (const interesse of interesses) {
        const itemInteresse = document.createElement("li");
        itemInteresse.textContent = interesse;
        listaInteresses.appendChild(itemInteresse);
    }

    // Adicionar a lista de interesses à célula
    colunaInteresses.appendChild(listaInteresses);
}

const contatos = [
    {
        nome: "Joãozinho",
        telefone: "912345678",
        email: "joaozinho@gmail.com",
        interesses: ["Futebol", "video-game", "praia"]
    },
    {
        nome: "Maria",
        telefone: "912345678",
        email: "maria@gmail.com",
        interesses: ["Barbie", "amizades", "baladinha"]
    }
]

// Exemplo de uso para adicionar um contato
adicionarContato("Joãozinho", "912345678", "joaozinho@gmail.com", ["Futebol", "Video-game", "Praia"]);
adicionarContato("Maria", "912345678", "maria@gmail.com", ["Futebol", "Video-game", "Praia"]);