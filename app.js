const defaultCards = [
  {type:"Beso largo",text:"Da un beso largo en los labios y mantente muy cerca al terminar."},
  {type:"Cuello",text:"Recorre lentamente un lado del cuello con pequeños besos."},
  {type:"Mandíbula",text:"Besa desde la mejilla hasta el borde de la mandíbula."},
  {type:"Hombro",text:"Empieza en el cuello y baja con besos hasta el hombro."},
  {type:"Brazo",text:"Recorre con besos desde la muñeca hasta el hombro."},
  {type:"Espalda",text:"Da una línea de besos lentos desde los hombros hasta la cintura."},
  {type:"Pierna",text:"Empieza cerca de la rodilla y sube con besos hasta la parte superior del muslo."},
  {type:"Recorrido largo",text:"Comienza con un beso en los labios y continúa lentamente por cuello, hombro y torso hasta llegar a la parte superior del muslo."},
  {type:"Muslos",text:"Acaricia ambos muslos lentamente durante 30 segundos."},
  {type:"Cintura",text:"Rodea la cintura de tu pareja y acércala mientras mantienes contacto visual."},
  {type:"Espalda y cintura",text:"Recorre la espalda con ambas manos y termina sujetando la cintura."},
  {type:"Ojos cerrados",text:"Una persona cierra los ojos y la otra elige tres lugares para darle un beso."},
  {type:"Sin manos",text:"Dense un beso largo sin utilizar las manos durante 20 segundos."},
  {type:"Muy cerca",text:"Acérquense hasta quedar a centímetros y esperen cinco segundos antes de besarse."},
  {type:"Acariciar",text:"Tu pareja elige una parte del cuerpo donde quiere recibir caricias durante un minuto."},
  {type:"Tres lugares",text:"Elige tres zonas distintas del cuerpo y da un beso lento en cada una."},
  {type:"De arriba abajo",text:"Empieza en la frente y baja lentamente con besos por rostro, cuello, hombro y torso."},
  {type:"De abajo arriba",text:"Empieza en la pierna y sube lentamente con besos hasta llegar al cuello."},
  {type:"Abrazo por detrás",text:"Abraza a tu pareja por detrás mientras recorres su cintura con las manos."},
  {type:"Frente a frente",text:"Siéntense frente a frente, muy cerca, y mantengan contacto visual mientras se acarician."},
  {type:"Guía",text:"Una persona toma las manos de la otra y las guía hacia donde quiere recibir caricias."},
  {type:"Beso y pausa",text:"Da un beso, aléjate unos centímetros durante cinco segundos y vuelve a acercarte."},
  {type:"Recorrido libre",text:"Elige un punto del cuerpo y comienza desde allí un recorrido de besos hasta otra zona elegida por tu pareja."},
  {type:"Alternar",text:"Durante un minuto alternen entre besos y caricias, cambiando cada diez segundos."},
  {type:"Elección intensa",text:"Tu pareja elige entre un recorrido de besos, un minuto de caricias o un beso largo mientras permanecen abrazados."}
];

const STORAGE_DECK = "entreDosRouletteDeckV3";
const STORAGE_NAMES = "entreDosRouletteNamesV3";
const palette = [
  "#ff4f96","#7a3df0","#2398c9","#efa21d","#2aa573",
  "#d24978","#6855d8","#ec6d3b","#2f9e9b","#bd3b90"
];

let deck = loadDeck();
let available = [];
let used = [];
let turn = 0;
let rotation = 0;
let spinning = false;
let editorDraft = [];

const $ = selector => document.querySelector(selector);
const wheel = $("#wheel");
const labels = $("#labels");
const spin = $("#spin");
const remain = $("#remain");
const resultType = $("#resultType");
const resultText = $("#resultText");
const resultNote = $("#resultNote");
const p1 = $("#p1");
const p2 = $("#p2");
const turnName = $("#turnName");
const usedList = $("#usedList");
const usedCount = $("#usedCount");
const deckCount = $("#deckCount");
const deckBadge = $("#deckBadge");
const toast = $("#toast");

function cloneCards(cards) {
  return cards.map(card => ({type:String(card.type || "Reto"), text:String(card.text || "")}));
}

function loadDeck() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_DECK));
    if (Array.isArray(stored) && stored.length >= 2) {
      const clean = stored
        .filter(card => card && String(card.text || "").trim())
        .map(card => ({
          type:String(card.type || "Reto").trim() || "Reto",
          text:String(card.text || "").trim()
        }));
      if (clean.length >= 2) return clean;
    }
  } catch (_) {}
  return cloneCards(defaultCards);
}

function loadNames() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_NAMES));
    if (Array.isArray(stored)) {
      p1.value = String(stored[0] || "");
      p2.value = String(stored[1] || "");
    }
  } catch (_) {}
}

function saveNames() {
  localStorage.setItem(STORAGE_NAMES, JSON.stringify([p1.value.trim(), p2.value.trim()]));
}

function names() {
  return [p1.value.trim() || "Jugador 1", p2.value.trim() || "Jugador 2"];
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("show"), 1700);
}

function normalizeAngle(value) {
  return ((value % 360) + 360) % 360;
}

function renderWheel() {
  labels.innerHTML = "";

  if (!available.length) {
    wheel.style.background = "rgba(255,255,255,.035)";
    labels.innerHTML = '<div class="empty-wheel">Sin opciones</div>';
    return;
  }

  const n = available.length;
  const step = 360 / n;
  const stops = available.map((card, index) => {
    const color = palette[(card.number - 1) % palette.length];
    return `${color} ${index * step}deg ${(index + 1) * step}deg`;
  });

  wheel.style.background = `conic-gradient(${stops.join(",")})`;

  const radius = n <= 8 ? 38 : n <= 14 ? 41 : 43.5;
  const fontSize = n <= 10 ? ".78rem" : n <= 18 ? ".68rem" : ".60rem";

  available.forEach((card, index) => {
    const angle = (index + 0.5) * step - 90;
    const rad = angle * Math.PI / 180;
    const label = document.createElement("span");
    label.className = "segment-label";
    label.textContent = card.number;
    label.style.fontSize = fontSize;
    label.style.left = `${50 + Math.cos(rad) * radius}%`;
    label.style.top = `${50 + Math.sin(rad) * radius}%`;
    label.style.transform = `translate(-50%,-50%) rotate(${angle + 90}deg)`;
    labels.appendChild(label);
  });
}

function update() {
  remain.textContent = available.length;
  usedCount.textContent = used.length;
  deckCount.textContent = deck.length;
  deckBadge.textContent = `RULETA · ${deck.length} RETOS`;
  turnName.textContent = names()[turn];

  if (!used.length) {
    usedList.innerHTML = '<div class="empty">Todavía no ha salido ninguna opción.</div>';
  } else {
    usedList.innerHTML = used.map(card =>
      `<div class="used">#${card.number} · ${escapeHtml(card.type)}</div>`
    ).join("");
  }
}

function resetGame(showMessage = false) {
  available = deck.map((card, index) => ({
    uid:`card-${index + 1}`,
    number:index + 1,
    type:card.type,
    text:card.text
  }));

  used = [];
  turn = 0;
  rotation = 0;
  spinning = false;

  wheel.style.transition = "none";
  wheel.style.transform = "rotate(0deg)";
  void wheel.offsetWidth;
  wheel.style.transition = "transform 4.5s cubic-bezier(.12,.75,.16,1)";

  resultType.textContent = "Lista para comenzar";
  resultText.textContent = "Toca “Girar” para sacar el primer reto.";
  resultNote.textContent = "Los números giran con la ruleta y desaparecen cuando son utilizados.";
  spin.disabled = available.length < 1;

  renderWheel();
  update();

  if (showMessage) showToast("Partida reiniciada");
}

function spinWheel() {
  if (spinning || !available.length) return;

  spinning = true;
  spin.disabled = true;

  const currentPlayer = names()[turn];
  const selectedIndex = Math.floor(Math.random() * available.length);
  const selectedCard = available[selectedIndex];
  const step = 360 / available.length;
  const selectedCenter = (selectedIndex + 0.5) * step;

  const desiredFinalAngle = normalizeAngle(-selectedCenter);
  const currentAngle = normalizeAngle(rotation);
  const correction = normalizeAngle(desiredFinalAngle - currentAngle);
  const extraTurns = 6 + Math.floor(Math.random() * 3);

  rotation += extraTurns * 360 + correction;

  resultType.textContent = `Girando · Turno de ${currentPlayer}`;
  resultText.textContent = "…";
  resultNote.textContent = `Buscando una opción entre ${available.length} disponibles.`;

  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    const liveIndex = available.findIndex(card => card.uid === selectedCard.uid);
    const [card] = available.splice(liveIndex, 1);
    used.push(card);

    resultType.textContent = `#${card.number} · ${card.type} · Turno de ${currentPlayer}`;
    resultText.textContent = card.text;
    resultNote.textContent = `La opción #${card.number} se eliminó de la ruleta y no volverá a salir.`;

    turn = turn === 0 ? 1 : 0;
    spinning = false;
    spin.disabled = available.length === 0;

    renderWheel();
    update();

    if (!available.length) {
      resultNote.textContent = "Ya se utilizaron todas las opciones de esta partida.";
    }
  }, 4550);
}

function openStatus() {
  $("#sheetTitle").textContent = available.length ? "Ruleta activa" : "Partida terminada";
  $("#sheetText").textContent = available.length
    ? `El siguiente turno es de ${names()[turn]}. Quedan ${available.length} de ${deck.length} tarjetas. Cada número usado ya fue retirado de la ruleta.`
    : `Ya se utilizaron las ${deck.length} tarjetas. Reinicia la partida para volver a jugar.`;

  $("#sheetRemaining").textContent = available.length;
  $("#sheetUsed").textContent = used.length;
  $("#statusOverlay").classList.add("show");
}

function openEditor() {
  if (spinning) {
    showToast("Espera a que termine el giro");
    return;
  }
  editorDraft = cloneCards(deck);
  renderEditor();
  $("#cardsOverlay").classList.add("show");
}

function renderEditor() {
  const list = $("#cardEditorList");
  list.innerHTML = "";

  editorDraft.forEach((card, index) => {
    const row = document.createElement("div");
    row.className = "card-row";
    row.dataset.index = index;

    row.innerHTML = `
      <div class="card-number">${index + 1}</div>
      <div class="card-fields">
        <input class="card-field card-type" maxlength="40" value="${escapeAttr(card.type)}" placeholder="Título">
        <textarea class="card-field card-text" maxlength="280" placeholder="Escribe el reto...">${escapeHtml(card.text)}</textarea>
      </div>
      <button class="delete-card" type="button" aria-label="Eliminar tarjeta">✕</button>
    `;

    row.querySelector(".delete-card").addEventListener("click", () => {
      if (editorDraft.length <= 2) {
        showToast("La ruleta necesita al menos 2 tarjetas");
        return;
      }
      syncEditorDraft();
      editorDraft.splice(index, 1);
      renderEditor();
    });

    list.appendChild(row);
  });
}

function syncEditorDraft() {
  const rows = [...document.querySelectorAll(".card-row")];
  editorDraft = rows.map(row => ({
    type:row.querySelector(".card-type").value.trim() || "Reto",
    text:row.querySelector(".card-text").value.trim()
  }));
}

function addCard() {
  syncEditorDraft();

  if (editorDraft.length >= 50) {
    showToast("Máximo 50 tarjetas");
    return;
  }

  editorDraft.push({type:"Nueva tarjeta", text:""});
  renderEditor();

  const list = $("#cardEditorList");
  list.scrollTop = list.scrollHeight;

  const rows = list.querySelectorAll(".card-row");
  const last = rows[rows.length - 1];
  last?.querySelector(".card-text")?.focus();
}

function saveCards() {
  syncEditorDraft();

  const clean = editorDraft
    .map(card => ({
      type:card.type.trim() || "Reto",
      text:card.text.trim()
    }))
    .filter(card => card.text);

  if (clean.length < 2) {
    showToast("Necesitas al menos 2 tarjetas con texto");
    return;
  }

  deck = clean;
  localStorage.setItem(STORAGE_DECK, JSON.stringify(deck));
  $("#cardsOverlay").classList.remove("show");
  resetGame(false);
  showToast(`${deck.length} tarjetas guardadas`);
}

function restoreCards() {
  deck = cloneCards(defaultCards);
  localStorage.removeItem(STORAGE_DECK);
  editorDraft = cloneCards(deck);
  renderEditor();
  showToast("Se restauraron las 25 originales");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;");
}

function escapeAttr(value) {
  return escapeHtml(value)
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

spin.addEventListener("click", spinWheel);
$("#status").addEventListener("click", openStatus);
$("#reset").addEventListener("click", () => resetGame(true));
$("#editCards").addEventListener("click", openEditor);

$("#closeStatus").addEventListener("click", () => $("#statusOverlay").classList.remove("show"));
$("#statusOverlay").addEventListener("click", event => {
  if (event.target.id === "statusOverlay") $("#statusOverlay").classList.remove("show");
});

$("#closeEditor").addEventListener("click", () => $("#cardsOverlay").classList.remove("show"));
$("#cardsOverlay").addEventListener("click", event => {
  if (event.target.id === "cardsOverlay") $("#cardsOverlay").classList.remove("show");
});

$("#addCard").addEventListener("click", addCard);
$("#saveCards").addEventListener("click", saveCards);
$("#restoreCards").addEventListener("click", restoreCards);

[p1,p2].forEach(input => {
  input.addEventListener("input", () => {
    saveNames();
    update();
  });
});

loadNames();
resetGame(false);
