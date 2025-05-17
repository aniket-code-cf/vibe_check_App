const questions = [
  {
    question: "Pick a time of day:",
    answers: ["Sunrise 🌅", "Noon ☀️", "Twilight 🌇", "Midnight 🌙"]
  },
  {
    question: "Choose a snack:",
    answers: ["Chips 🍟", "Fruit 🍓", "Cereal 🥣", "Chocolate 🍫"]
  },
  {
    question: "Pick a music vibe:",
    answers: ["Lo-fi 🎧", "Pop 🎤", "Metal 🤘", "Classical 🎻"]
  },
  {
    question: "Choose your energy:",
    answers: ["Chill 😌", "Chaotic 😵‍💫", "Focused 🧘‍♀️", "Silly 🤪"]
  }
];

const vibes = [
  "Zen Panda 🐼",
  "Party Squirrel 🐿️",
  "Mysterious Owl 🦉",
  "Sleepy Dragon 🐉",
  "Overthinking Fox 🦊",
  "Chaotic Goblin 😈"
];

let currentQuestion = 0;
let answers = [];

const questionContainer = document.getElementById("question-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const resultText = document.getElementById("vibe-result");

function showQuestion() {
  const q = questions[currentQuestion];
  questionContainer.innerHTML = `<h2>${q.question}</h2>` +
    q.answers.map((a, i) =>
      `<button class="answer-btn" data-index="${i}">${a}</button>`
    ).join("");

  document.querySelectorAll(".answer-btn").forEach(btn =>
    btn.onclick = () => {
      answers.push(btn.dataset.index);
      nextBtn.style.display = "inline-block";
    }
  );
  nextBtn.style.display = "none";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    finishQuiz();
  }
};

function finishQuiz() {
  document.getElementById("quiz-container").classList.add("hidden");
  resultContainer.classList.remove("hidden");

  const score = answers.reduce((sum, val) => sum + parseInt(val), 0);
  const vibe = vibes[score % vibes.length];

  resultText.textContent = vibe;

  // Optionally save locally for user memory
  localStorage.setItem("lastVibe", vibe);
}

showQuestion();
