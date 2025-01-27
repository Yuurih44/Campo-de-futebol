const formEscalar = document.getElementById("form-escalar");
const formRemover = document.getElementById("form-remover");
const listaJogadores = document.getElementById("lista-jogadores");

const jogadores = [];

formEscalar.addEventListener("submit", (e) => {
  e.preventDefault();

  const posicao = document.getElementById("posicao").value;
  const nome = document.getElementById("nome").value;
  const numero = document.getElementById("numero").value;

  if (!posicao || !nome || !numero) return alert("Preencha todos os campos!");

  const jogador = { posicao, nome, numero };

  if (jogadores.some((j) => j.posicao === posicao)) {
    return alert("Já existe um jogador nesta posição!");
  }

  jogadores.push(jogador);

  atualizarLista();
  formEscalar.reset();
});

formRemover.addEventListener("submit", (e) => {
  e.preventDefault();

  const numero = document.getElementById("numero-remover").value;
  const index = jogadores.findIndex((j) => j.numero === numero);

  if (index === -1) return alert("Jogador não encontrado!");

  jogadores.splice(index, 1);

  atualizarLista();
  formRemover.reset();
});

function atualizarLista() {
  listaJogadores.innerHTML = "";
  jogadores.forEach((jogador) => {
    const li = document.createElement("li");
    li.innerText = `${jogador.nome} - ${jogador.posicao} - ${jogador.numero}`;
    listaJogadores.appendChild(li);
  });
}
