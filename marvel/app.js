const heroGrid = document.getElementById("hero-grid");
const filterBar = document.getElementById("filters");
const timelineEl = document.getElementById("timeline");
const quizBox = document.getElementById("quiz-box");

const initials = (name) => name.split(/[\s-]/).map((w) => w[0]).join("").slice(0, 2).toUpperCase();

function renderHeroes(team) {
  const list = team === "All" ? HEROES : HEROES.filter((h) => h.team === team);
  heroGrid.innerHTML = list
    .map(
      (h) => `
      <article class="card">
        <div class="badge" style="background:${h.color}">${initials(h.name)}</div>
        <h3>${h.name}</h3>
        <p class="alias">${h.alias}</p>
        <p class="bio">${h.bio}</p>
        <div class="meta"><span>${h.power}</span><span>${h.debut}</span></div>
      </article>`
    )
    .join("");
}

function renderFilters() {
  const teams = ["All", ...new Set(HEROES.map((h) => h.team))];
  filterBar.innerHTML = teams
    .map((t, i) => `<button data-team="${t}" class="${i === 0 ? "active" : ""}">${t}</button>`)
    .join("");
  filterBar.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    filterBar.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderHeroes(btn.dataset.team);
  });
}

function renderTimeline() {
  timelineEl.innerHTML = TIMELINE.map(
    (t) => `<li><span class="year">${t.year}</span><strong>${t.title}</strong><p class="note">${t.note}</p></li>`
  ).join("");
}

let quizIndex = 0;
let quizScore = 0;

function renderQuiz() {
  if (quizIndex >= QUIZ.length) {
    quizBox.innerHTML = `
      <p class="result">You scored ${quizScore} / ${QUIZ.length}</p>
      <div class="options"><button id="quiz-restart">Play again</button></div>`;
    document.getElementById("quiz-restart").addEventListener("click", () => {
      quizIndex = 0;
      quizScore = 0;
      renderQuiz();
    });
    return;
  }
  const item = QUIZ[quizIndex];
  quizBox.innerHTML = `
    <p class="progress">Question ${quizIndex + 1} of ${QUIZ.length} · Score ${quizScore}</p>
    <h3>${item.q}</h3>
    <div class="options">
      ${item.options.map((o, i) => `<button data-i="${i}">${o}</button>`).join("")}
    </div>`;
  quizBox.querySelectorAll(".options button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const picked = Number(btn.dataset.i);
      quizBox.querySelectorAll(".options button").forEach((b) => (b.disabled = true));
      quizBox.querySelector(`[data-i="${item.answer}"]`).classList.add("correct");
      if (picked === item.answer) quizScore++;
      else btn.classList.add("wrong");
      setTimeout(() => {
        quizIndex++;
        renderQuiz();
      }, 900);
    });
  });
}

renderFilters();
renderHeroes("All");
renderTimeline();
renderQuiz();
