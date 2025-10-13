document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('target');
  const gameArea = document.getElementById('game-area');
  const timeDisplay = document.getElementById('time');
  const scoreDisplay = document.getElementById('score');
  const startBtn = document.getElementById('start-btn');

  let score = 0;
  let timeLeft = 30;
  let gameInterval;
  let countdownInterval;

  function getRandomPosition() {
    const maxX = gameArea.clientWidth - target.offsetWidth;
    const maxY = gameArea.clientHeight - target.offsetHeight;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    return { x, y };
  }

  function moveTarget() {
    const pos = getRandomPosition();
    target.style.left = pos.x + 'px';
    target.style.top = pos.y + 'px';
  }

  function startGame() {
    score = 0;
    timeLeft = 30;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    target.style.display = 'block';
    startBtn.disabled = true;

    gameInterval = setInterval(moveTarget, 800);

    countdownInterval = setInterval(() => {
      timeLeft--;
      timeDisplay.textContent = timeLeft;
      if (timeLeft <= 0) {
        endGame();
      }
    }, 1000);
  }

  function endGame() {
    clearInterval(gameInterval);
    clearInterval(countdownInterval);
    target.style.display = 'none';
    startBtn.disabled = false;
    alert(`Temps écoulé! Votre score est ${score}.`);
  }

  target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveTarget();
  });

  startBtn.addEventListener('click', startGame);
});
