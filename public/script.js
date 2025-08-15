const urlAPI = '/items';

function criarCard(pessoa) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <h3>${pessoa.name}</h3>
    <p><strong>Idade:</strong> ${pessoa.age}</p>
    <p><strong>Cidade:</strong> ${pessoa.cidade}</p>
  `;

  return card;
}

fetch(urlAPI)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cards-container');
    const primeirosQuatro = data.slice(0, 4);

    primeirosQuatro.forEach(pessoa => {
      const card = criarCard(pessoa);
      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erro ao carregar dados:', error);
  });
