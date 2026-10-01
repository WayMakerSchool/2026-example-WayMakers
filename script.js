const board = document.getElementById("game-board");
const scoreEl = document.getElementById("score");
const bestScoreEl = document.getElementById("best-score");
const movesEl = document.getElementById("moves");
const timeEl = document.getElementById("time");
const messageEl = document.getElementById("message");
const restartBtn = document.getElementById("restart-btn");

const suits = [
  { symbol: "♥", color: "red" },
  { symbol: "◆", color: "red" },
  { symbol: "♠", color: "black" },
  { symbol: "♣", color: "black" },
];

const ranks = ["A", "2", "3", "4", "5", "6", "7", "8"];
const pairPool = ranks.map((rank, index) => ({
  pairKey: `${suits[index % suits.length].symbol}${rank}`,
  rank,
  suit: suits[index % suits.length].symbol,
  color: suits[index % suits.length].color,
}));

let cards = [];
let firstCard = null;
let secondCard = null;
let isLocked = false;
let score = 0;
let moves = 0;
let matchedPairs = 0;
let timer = 0;
let timerId = null;
let bestScore = Number(localStorage.getItem("memory-best-score")) || 0;

function shuffle(items) {
  const copy = [...items];

  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }

  return copy;
}

function formatTime(seconds) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const remainder = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${remainder}`;
}

function setMessage(text) {
  messageEl.textContent = text;
}

function updateStats() {
  scoreEl.textContent = String(score);
  movesEl.textContent = String(moves);
  timeEl.textContent = formatTime(timer);
  bestScoreEl.textContent = String(bestScore);
}

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    timer += 1;
    timeEl.textContent = formatTime(timer);
  }, 1000);
}

function buildDeck() {
  const deck = [];

  pairPool.forEach((item, index) => {
    deck.push({
      id: `${item.pairKey}-${index}-a`,
      pairKey: item.pairKey,
      rank: item.rank,
      suit: item.suit,
      color: item.color,
    });
    deck.push({
      id: `${item.pairKey}-${index}-b`,
      pairKey: item.pairKey,
      rank: item.rank,
      suit: item.suit,
      color: item.color,
    });
  });

  cards = shuffle(deck);
}

function renderBoard() {
  board.innerHTML = "";

  cards.forEach((card) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "memory-card";
    button.setAttribute("aria-label", "카드");
    button.dataset.id = card.id;
    button.dataset.pair = card.pairKey;
    button.innerHTML = `
      <span class="card-inner">
        <span class="card-face card-front">?</span>
        <span class="card-face card-back ${card.color === "red" ? "is-red" : "is-black"}">
          <span class="suit">${card.suit}</span>
          <span class="rank">${card.rank}</span>
        </span>
      </span>
    `;

    button.addEventListener("click", () => handleCardClick(button));
    board.appendChild(button);
  });
}

function finishGame() {
  clearInterval(timerId);
  isLocked = true;

  if (score > bestScore) {
    bestScore = score;
    localStorage.setItem("memory-best-score", String(bestScore));
  }

  updateStats();
  setMessage(`축하합니다! 모든 카드를 맞췄어요. 최종 점수: ${score}점`);
}

function handleCardClick(cardEl) {
  if (
    isLocked ||
    cardEl.classList.contains("is-flipped") ||
    cardEl.classList.contains("is-matched")
  ) {
    return;
  }

  cardEl.classList.add("is-flipped");

  if (!firstCard) {
    firstCard = cardEl;
    setMessage("한 장 더 뒤집어 보세요!");
    return;
  }

  secondCard = cardEl;
  moves += 1;
  updateStats();

  if (firstCard.dataset.pair === secondCard.dataset.pair) {
    score += 10;
    matchedPairs += 1;
    firstCard.classList.add("is-matched");
    secondCard.classList.add("is-matched");
    firstCard = null;
    secondCard = null;
    updateStats();
    setMessage("짝 맞추기 성공! 계속 가볼까요?");

    if (matchedPairs === pairPool.length) {
      finishGame();
    }

    return;
  }

  isLocked = true;
  setMessage("아쉽네요. 다시 뒤집어 보세요!");

  setTimeout(() => {
    firstCard.classList.remove("is-flipped");
    secondCard.classList.remove("is-flipped");
    firstCard = null;
    secondCard = null;
    isLocked = false;
    setMessage("카드를 다시 뒤집어 보세요!");
  }, 700);
}

function resetGame() {
  clearInterval(timerId);
  firstCard = null;
  secondCard = null;
  isLocked = false;
  score = 0;
  moves = 0;
  matchedPairs = 0;
  timer = 0;
  bestScore = Number(localStorage.getItem("memory-best-score")) || 0;
  buildDeck();
  renderBoard();
  updateStats();
  setMessage("카드를 뒤집어 보세요!");
  startTimer();
}

restartBtn.addEventListener("click", resetGame);
resetGame();
