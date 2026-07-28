const grid = document.getElementById("hero-grid");
const filterBar = document.getElementById("filters");
const alignBar = document.getElementById("alignments");
const searchBox = document.getElementById("search");
const resultCount = document.getElementById("result-count");
const emptyMsg = document.getElementById("empty");
const teamGrid = document.getElementById("team-grid");
const timelineEl = document.getElementById("timeline");
const quizBox = document.getElementById("quiz-box");
const modal = document.getElementById("modal");
const modalBody = document.getElementById("modal-body");

const state = { team: "All", alignment: "All", query: "" };

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function matches(c) {
  const q = state.query.trim().toLowerCase();
  return (
    (state.team === "All" || c.team === state.team) &&
    (state.alignment === "All" || c.alignment === state.alignment) &&
    (!q || `${c.name} ${c.alias} ${c.power} ${c.team}`.toLowerCase().includes(q))
  );
}

function render() {
  const list = CHARACTERS.filter(matches);
  grid.innerHTML = list
    .map(
      (c, i) => `
      <article class="card" data-name="${esc(c.name)}" tabindex="0" style="--i:${i}">
        <div class="card-art">
          <img src="${esc(c.img)}" alt="${esc(c.name)}" loading="lazy" />
          <span class="tag ${c.alignment}">${c.alignment}</span>
        </div>
        <div class="card-text">
          <h3>${esc(c.name)}</h3>
          <p class="alias">${esc(c.alias)}</p>
          <div class="meta"><span>${esc(c.team)}</span><span>${c.debut}</span></div>
        </div>
      </article>`
    )
    .join("");
  resultCount.textContent = `${list.length} character${list.length === 1 ? "" : "s"}`;
  emptyMsg.hidden = list.length > 0;
}

function renderFilters() {
  const teams = ["All", ...TEAMS.map((t) => t.name).filter((n) => CHARACTERS.some((c) => c.team === n))];
  filterBar.innerHTML = teams
    .map((t) => `<button data-team="${esc(t)}" class="${t === "All" ? "active" : ""}">${esc(t)}</button>`)
    .join("");
  alignBar.innerHTML = ["All", "hero", "antihero", "villain"]
    .map((a) => `<button data-align="${a}" class="${a === "All" ? "active" : ""}">${a === "All" ? "Everyone" : a}</button>`)
    .join("");
}

function bindFilterBar(bar, key) {
  bar.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    bar.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    state[key] = btn.dataset.team || btn.dataset.align;
    render();
  });
}

function renderTeams() {
  teamGrid.innerHTML = TEAMS.map(
    (t) => `
    <article class="team-card" data-team="${esc(t.name)}" tabindex="0">
      <img src="${esc(t.img)}" alt="${esc(t.name)}" loading="lazy" />
      <div class="team-info">
        <h3>${esc(t.name)}</h3>
        <p>${esc(t.blurb)}</p>
        <span class="team-count">${t.count} character${t.count === 1 ? "" : "s"}</span>
      </div>
    </article>`
  ).join("");
  teamGrid.addEventListener("click", (e) => selectTeam(e.target.closest(".team-card")));
  teamGrid.addEventListener("keydown", (e) => {
    if (e.key === "Enter") selectTeam(e.target.closest(".team-card"));
  });
}

function selectTeam(card) {
  if (!card) return;
  state.team = card.dataset.team;
  filterBar.querySelectorAll("button").forEach((b) => b.classList.toggle("active", b.dataset.team === state.team));
  render();
  document.getElementById("characters").scrollIntoView({ behavior: "smooth" });
}

function renderHeroStrip() {
  const picks = CHARACTERS.slice(0, 14);
  document.getElementById("hero-strip").innerHTML = picks
    .map((c) => `<img src="${esc(c.img)}" alt="${esc(c.name)}" loading="lazy" />`)
    .join("");
  document.getElementById("hero-count").textContent = CHARACTERS.length;
  document.getElementById("team-count").textContent = TEAMS.length;
}

function renderTimeline() {
  timelineEl.innerHTML = TIMELINE.map(
    (t) => `<li><span class="year">${t.year}</span><strong>${esc(t.title)}</strong><p class="note">${esc(t.note)}</p></li>`
  ).join("");
}

function openModal(name) {
  const c = CHARACTERS.find((x) => x.name === name);
  if (!c) return;
  modalBody.innerHTML = `
    <img class="modal-art" src="${esc(c.img)}" alt="${esc(c.name)}" />
    <div class="modal-text">
      <span class="tag ${c.alignment}">${c.alignment}</span>
      <h3 id="modal-name">${esc(c.name)}</h3>
      <p class="alias">${esc(c.alias)} · ${esc(c.team)} · first appeared ${c.debut}</p>
      <p class="bio">${esc(c.bio)}</p>
      <p class="power"><strong>Powers:</strong> ${esc(c.power)}</p>
      <a class="btn" href="${esc(c.url)}" target="_blank" rel="noopener">Official Marvel page</a>
    </div>`;
  modal.hidden = false;
  document.body.classList.add("locked");
}

function closeModal() {
  modal.hidden = true;
  document.body.classList.remove("locked");
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
    <h3>${esc(item.q)}</h3>
    <div class="options">
      ${item.options.map((o, i) => `<button data-i="${i}">${esc(o)}</button>`).join("")}
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

grid.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (card) openModal(card.dataset.name);
});
grid.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && e.target.classList.contains("card")) openModal(e.target.dataset.name);
});
document.getElementById("modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
searchBox.addEventListener("input", () => {
  state.query = searchBox.value;
  render();
});

renderFilters();
bindFilterBar(filterBar, "team");
bindFilterBar(alignBar, "alignment");
renderHeroStrip();
renderTeams();
render();
renderTimeline();
renderQuiz();
