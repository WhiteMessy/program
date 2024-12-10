const gameList = document.getElementById('game-list');
  
  // Loop door de games array en maak voor elke game een card
  dataset.forEach(game => {
    const gameCard = document.createElement('div');
    gameCard.classList.add('game-card');
  
    gameCard.innerHTML = `
      <img src="${game.image}" alt="${game.name}">
      <h3>${game.name}</h3>
      <p>${game.description}</p>
    `;
  
    gameList.appendChild(gameCard);
  });
  