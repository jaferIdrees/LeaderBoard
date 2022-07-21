export const populateScores = (scoresArray) => {
  const scoresTable = document.getElementById('scores_table');
  scoresArray.sort((a, b) => (a.score > b.score ? -1 : 1));
  scoresTable.innerHTML = '';
  for (let i = 0; i < scoresArray.length; i += 1) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.append(`${scoresArray[i].user}:${scoresArray[i].score}`);
    tr.appendChild(td);
    scoresTable.appendChild(td);
  }
};

export const newGame = () => {
};