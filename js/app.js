let participantes = [];
let sorteados = [];

function adicionar() {
  const input = document.getElementById('nome-amigo');
  const nome = input.value.trim();
  if (!nome) {
    alert('Digite um nome!');
    return;
  }

  participantes.push(nome);
  input.value = '';
  atualizarListaParticipantes();
  atualizarEstadoBotao();
  console.log('Participantes:', participantes);
}

function sortearElemento(array) {
  const indice = Math.floor(Math.random() * array.length);
  return { nome: array[indice], indice };
}

function sortear() {
  if (participantes.length === 0) {
    alert('Por favor, adicione nomes antes de sortear.');
    return;
  }

  const sorteado = sortearElemento(participantes);
  const nomeSorteado = sorteado.nome;

  // remove do array de participantes e adiciona ao array de sorteados
  participantes.splice(sorteado.indice, 1);
  sorteados.push(nomeSorteado);

  // atualiza UI
  atualizarListaParticipantes();
  atualizarListaSorteados();

  // coloca o nome sorteado no input (conforme solicitado)
  document.getElementById('nome-amigo').value = nomeSorteado;

  atualizarEstadoBotao();
  console.log('Sorteado:', nomeSorteado, 'Sorteados:', sorteados);
}

function reiniciar() {
  participantes = [];
  sorteados = [];
  document.getElementById('nome-amigo').value = '';
  atualizarListaParticipantes();
  atualizarListaSorteados();
  atualizarEstadoBotao();
}

// renderiza a lista de participantes (coluna)
function atualizarListaParticipantes() {
  const container = document.getElementById('lista-amigos');
  container.innerHTML = '';

  if (participantes.length === 0) {
    container.textContent = 'Nenhum amigo incluído.';
    return;
  }

  const ul = document.createElement('ul');
  participantes.forEach((p) => {
    const li = document.createElement('li');
    li.textContent = p;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

// renderiza a lista de sorteados em coluna
function atualizarListaSorteados() {
  const container = document.getElementById('lista-sorteio');
  container.innerHTML = '';

  if (sorteados.length === 0) {
    container.textContent = 'Nenhum sorteio realizado.';
    return;
  }

  const ul = document.createElement('ul');
  sorteados.forEach((s) => {
    const li = document.createElement('li');
    li.textContent = s;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

// habilita/desabilita botão sortear
function atualizarEstadoBotao() {
  const btn = document.getElementById('btn-sortear');
  if (!btn) return;
  btn.disabled = participantes.length === 0;
}

document.addEventListener('DOMContentLoaded', () => {
  atualizarListaParticipantes();
  atualizarListaSorteados();
  atualizarEstadoBotao();
});
