const fragen = {
  general: [
    {
      frage: "Was ist die Hauptstadt von Deutschland?",
      antworten: ["Berlin", "München", "Hamburg", "Köln"],
      korrekt: "Berlin",
    },
    {
      frage: "Welche Sprache spricht man in Österreich?",
      antworten: ["Deutsch", "Französisch", "Spanisch", "Italienisch"],
      korrekt: "Deutsch",
    },
    {
      frage: "Wie viele Bundesländer hat Deutschland?",
      antworten: ["14", "16", "18", "20"],
      korrekt: "16",
    },
    {
      frage: "Was ist das größte Land der Welt?",
      antworten: ["USA", "China", "Kanada", "Russland"],
      korrekt: "Russland",
    },
    // سوالات جدید
    {
      frage: "Welches Element hat das chemische Symbol 'O'?",
      antworten: ["Wasserstoff", "Sauerstoff", "Stickstoff", "Kohlenstoff"],
      korrekt: "Sauerstoff",
    },
    {
      frage: "Wer erfand das Telefon?",
      antworten: [
        "Alexander Graham Bell",
        "Nikola Tesla",
        "Thomas Edison",
        "Marie Curie",
      ],
      korrekt: "Alexander Graham Bell",
    },
    {
      frage: "Wie viele Kontinente gibt es auf der Erde?",
      antworten: ["5", "6", "7", "8"],
      korrekt: "7",
    },
    {
      frage: "Was ist der höchste Berg der Welt?",
      antworten: ["Mount Everest", "K2", "Mont Blanc", "Kilimandscharo"],
      korrekt: "Mount Everest",
    },
    {
      frage: "Wie viele Farben hat der Regenbogen?",
      antworten: ["5", "6", "7", "8"],
      korrekt: "7",
    },
  ],

  history: [
    {
      frage: "Wann begann der Zweite Weltkrieg?",
      antworten: ["1914", "1939", "1945", "1961"],
      korrekt: "1939",
    },
    {
      frage: "Wer war der erste Präsident der USA?",
      antworten: [
        "George Washington",
        "Abraham Lincoln",
        "Thomas Jefferson",
        "John Adams",
      ],
      korrekt: "George Washington",
    },
    {
      frage: "Wer war der erste Mensch auf dem Mond?",
      antworten: [
        "Neil Armstrong",
        "Yuri Gagarin",
        "Buzz Aldrin",
        "John Glenn",
      ],
      korrekt: "Neil Armstrong",
    },
    {
      frage: "Wann wurde die Berliner Mauer gebaut?",
      antworten: ["1945", "1950", "1961", "1970"],
      korrekt: "1961",
    },
    // سوالات جدید
    {
      frage: "Wann wurde das Römische Reich gegründet?",
      antworten: ["753 v. Chr.", "500 v. Chr.", "27 v. Chr.", "476 n. Chr."],
      korrekt: "753 v. Chr.",
    },
    {
      frage: "Wer war der erste Kaiser von China?",
      antworten: ["Qin Shi Huang", "Kaiser Wu", "Li Shimin", "Emperor Gaozu"],
      korrekt: "Qin Shi Huang",
    },
    {
      frage: "Wann fiel die Sowjetunion auseinander?",
      antworten: ["1989", "1991", "1995", "2000"],
      korrekt: "1991",
    },
    {
      frage: "Wer war der erste König von Großbritannien?",
      antworten: [
        "Richard Löwenherz",
        "Henry VIII.",
        "James I.",
        "William der Eroberer",
      ],
      korrekt: "James I.",
    },
    {
      frage: "Wann wurde die Unabhängigkeitserklärung der USA unterschrieben?",
      antworten: ["1776", "1789", "1812", "1865"],
      korrekt: "1776",
    },
  ],

  sports: [
    {
      frage: "Wie viele Spieler hat ein Fußballteam?",
      antworten: ["9", "10", "11", "12"],
      korrekt: "11",
    },
    {
      frage:
        "In welchem Jahr fanden die ersten modernen Olympischen Spiele statt?",
      antworten: ["1896", "1900", "1920", "1932"],
      korrekt: "1896",
    },
    {
      frage: "Welche Mannschaft gewann die Fußball-Weltmeisterschaft 2014?",
      antworten: ["Brasilien", "Deutschland", "Argentinien", "Frankreich"],
      korrekt: "Deutschland",
    },
    {
      frage: "Wer gewann die erste Tour de France?",
      antworten: [
        "Louis Trousselier",
        "Maurice Garin",
        "Eddy Merckx",
        "Bernard Hinault",
      ],
      korrekt: "Maurice Garin",
    },
    // سوالات جدید
    {
      frage:
        "Wie viele Spieler sind in einem Basketballteam auf dem Spielfeld?",
      antworten: ["5", "6", "7", "8"],
      korrekt: "5",
    },
    {
      frage:
        "In welchem Jahr fanden die ersten Fußball-Weltmeisterschaften statt?",
      antworten: ["1920", "1930", "1940", "1950"],
      korrekt: "1930",
    },
    {
      frage: "Wer hat den Rekord für die meisten Grand-Slam-Titel im Tennis?",
      antworten: [
        "Roger Federer",
        "Rafael Nadal",
        "Novak Djokovic",
        "Serena Williams",
      ],
      korrekt: "Rafael Nadal",
    },
    {
      frage: "Wer gewann die Formel-1-Weltmeisterschaft 2020?",
      antworten: [
        "Lewis Hamilton",
        "Sebastian Vettel",
        "Max Verstappen",
        "Fernando Alonso",
      ],
      korrekt: "Lewis Hamilton",
    },
    {
      frage: "Welches Land gewann die Fußball-Weltmeisterschaft 1998?",
      antworten: ["Brasilien", "Deutschland", "Frankreich", "Argentinien"],
      korrekt: "Frankreich",
    },
  ],
};

let highScores = JSON.parse(localStorage.getItem("highScores")) || {
  general: 0,
  history: 0,
  sports: 0,
};

let currentCategory = "general"; // پیش‌فرض دسته‌بندی عمومی است

document.getElementById("category").addEventListener("change", (e) => {
  currentCategory = e.target.value;
  startQuiz(); // وقتی دسته‌بندی تغییر کرد، بازی دوباره شروع می‌شود
  updateCategoryHighscore();
});

const hardModeCheckbox = document.getElementById("hard-mode");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const timerElement = document.getElementById("timer");
const categoryHighscore = document.getElementById("category-highscore");

let aktuelleFrageIndex = 0;
let punkte = 0;
let timer;
let zeit = 30;

function updateCategoryHighscore() {
  categoryHighscore.innerText = `Highscore für ${currentCategory}: ${
    highScores[currentCategory] || 0
  }`;
}

const backgroundMusic = new Audio("sounds/background.mp3");
backgroundMusic.loop = true; // پخش مداوم
backgroundMusic.volume = 0.3; // تنظیم ولوم (از 0 تا 1)

const sounds = {
  click: new Audio("sounds/click.mp3"),
  correct: new Audio("sounds/correct.mp3"),
  wrong: new Audio("sounds/wrong.mp3"),
  finish: new Audio("sounds/finish.mp3"),
};

function startQuiz() {
  aktuelleFrageIndex = 0;
  punkte = 0;
  localStorage.removeItem("quizPunkte");
  nextButton.innerHTML = "Nächste Frage";
  zeigeFrage();
}

function zeigeFrage() {
  resetState();
  let aktuelleFrage = fragen[currentCategory][aktuelleFrageIndex];
  questionElement.innerText = aktuelleFrage.frage;
  questionElement.classList.add("fade-in");

  if (currentCategory === "history") {
    zeit = 20;
  } else if (currentCategory === "sports") {
    zeit = 25;
  } else {
    zeit = 30;
  }

  timerElement.innerText = zeit;
  timerStarten();

  aktuelleFrage.antworten.forEach((antwort) => {
    const button = document.createElement("button");
    button.innerText = antwort;
    button.classList.add("answer-btn", "fade-in");
    if (antwort === aktuelleFrage.korrekt) {
      button.dataset.korrekt = true;
    }
    button.addEventListener("click", antwortWählen);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  clearInterval(timer);
  nextButton.style.display = "none";
  questionElement.classList.remove("fade-in");
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function antwortWählen(e) {
  sounds.click.play();
  const ausgewähltButton = e.target;
  const korrekt = ausgewähltButton.dataset.korrekt === "true";

  if (korrekt) {
    punkte++;
    ausgewähltButton.classList.add("correct");
    sounds.correct.play();
  } else {
    ausgewähltButton.classList.add("wrong");
    sounds.wrong.play();

    // 🔔 نمایش گزینه درست:
    Array.from(answerButtons.children).forEach((button) => {
      if (button.dataset.korrekt === "true") {
        button.classList.add("correct");
      }
    });
  }

  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });
  clearInterval(timer);
  nextButton.style.display = "block";
}

function nächsteFrage() {
  aktuelleFrageIndex++;
  if (aktuelleFrageIndex < fragen[currentCategory].length) {
    zeigeFrage();
  } else {
    quizBeenden();
  }
}

function quizBeenden() {
  clearInterval(timer);
  quizContainer.classList.add("hidden");
  resultContainer.classList.remove("hidden");

  resultName.innerText = `👤 ${playerName}`;
  resultScore.innerText = `Du hast ${punkte} von ${fragen[currentCategory].length} Punkten.`;

  // if (punkte > highScore) {
  //   highScore = punkte;
  //   localStorage.setItem("highScore", highScore);
  // }
  // highScoreSpan.innerText = `Highscore: ${highScore}`;

  sounds.finish.play();
  resetState();
  nextButton.innerHTML = "Nochmal spielen";
  nextButton.style.display = "block";
  document.getElementById("choose-category-btn").style.display = "block";
  if (punkte > highScores[currentCategory]) {
    highScores[currentCategory] = punkte;
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
  document.getElementById(
    "high-score"
  ).innerText = `Highscore für ${currentCategory}: ${highScores[currentCategory]}`;

  localStorage.setItem("quizPunkte", punkte);
  resultContainer.classList.remove("hidden"); // بخش نتایج نمایش داده می‌شود
  quizContainer.classList.add("hidden"); // بخش سوالات مخفی می‌شود

  document.getElementById("choose-category-btn").style.display = "block";
}

function timerStarten() {
  timer = setInterval(() => {
    zeit--;
    timerElement.innerText = zeit;
    if (zeit <= 0) {
      clearInterval(timer);
      zeitAbgelaufen();
    }
  }, 1000);
}

function zeitAbgelaufen() {
  Array.from(answerButtons.children).forEach((button) => {
    button.disabled = true;
  });
  nextButton.style.display = "block";
  questionElement.innerText += " (Zeit abgelaufen!)";
}

nextButton.addEventListener("click", () => {
  sounds.click.play();
  if (aktuelleFrageIndex < fragen[currentCategory].length) {
    nächsteFrage();
  } else {
    startQuiz();
  }
});

let playerName = "";
let highScore = localStorage.getItem("highScore") || 0;

const startContainer = document.getElementById("start-container");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

const startBtn = document.getElementById("start-btn");
const restartBtn = document.getElementById("restart-btn");
const playerNameSpan = document.getElementById("player-name");
const resultName = document.getElementById("result-name");
const resultScore = document.getElementById("result-score");
const highScoreSpan = document.getElementById("high-score");
const themeToggle = document.getElementById("theme-toggle");
const exitBtn = document.getElementById("exit-btn");

exitBtn.addEventListener("click", () => {
  const confirmExit = confirm(
    "Bist du sicher, dass du das Spiel verlassen möchtest?"
  );
  if (confirmExit) {
    clearInterval(timer); // توقف تایمر
    backgroundMusic.pause(); // قطع موزیک (اگر استفاده کردی)
    backgroundMusic.currentTime = 0;
    punkte = 0; // صفر کردن امتیاز
    aktuelleFrageIndex = 0; // ریست سوالات
    quizContainer.classList.add("hidden"); // مخفی کردن صفحه بازی
    startContainer.classList.remove("hidden"); // نمایش صفحه شروع
    currentCategory = "general"; // برگشت به دسته پیش‌فرض
    document.getElementById("category").value = currentCategory;
  }
});

startBtn.addEventListener("click", () => {
  const inputName = document.getElementById("username").value.trim();
  if (inputName === "") {
    alert("Bitte gib deinen Namen ein!");
    return;
  }
  playerName = inputName;
  playerNameSpan.textContent = `👤 ${playerName}`;
  startContainer.classList.add("hidden");
  quizContainer.classList.remove("hidden");
  startQuiz();
});

// دکمه "Nochmal spielen" - شروع دوباره بازی
restartBtn.addEventListener("click", () => {
  resultContainer.classList.add("hidden"); // مخفی کردن صفحه نتایج
  quizContainer.classList.remove("hidden"); // نمایش صفحه سوالات
  // punkte = 0; // امتیازها را بازنشانی می‌کنیم
  // aktuelleFrageIndex = 0; // سوالات را از اول شروع می‌کنیم
  startQuiz(); // شروع دوباره بازی
  updateCategoryHighscore();
  backgroundMusic.play();
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeToggle.textContent = document.body.classList.contains("dark")
    ? "☀️"
    : "🌙";
});

const chooseCategoryBtn = document.getElementById("choose-category-btn");
backgroundMusic.pause();
backgroundMusic.currentTime = 0; // برگرد به اول

chooseCategoryBtn.addEventListener("click", () => {
  resultContainer.classList.add("hidden");
  startContainer.classList.remove("hidden");
  currentCategory = "general";
  document.getElementById("category").value = currentCategory;
});

const musicToggle = document.getElementById("music-toggle");

musicToggle.addEventListener("click", () => {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    musicToggle.textContent = "🔊";
  } else {
    backgroundMusic.pause();
    musicToggle.textContent = "🔇";
  }
});
