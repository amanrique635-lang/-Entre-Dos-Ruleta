const defaultCards = [
  {type:"Camino descendente",text:"Comienza con un beso apasionado en la boca y baja lentamente con besos húmedos por el cuello, el pecho y el abdomen, hasta llegar a la cara interna de sus muslos y detenerte a rozar su piel con tus labios."},
  {type:"Ascenso sensual",text:"Comienza besando los tobillos de tu pareja y sube trazando una línea continua de besos por sus pantorrillas y rodillas, hasta hundir tu rostro en la parte más sensible e interna de sus muslos."},
  {type:"Presión de caderas",text:"Con ambos desnudos y de pie, tómala fuertemente de las caderas, pégala hacia ti sintiendo la fricción de sus cuerpos y dale un beso largo e intenso."},
  {type:"Control de manos",text:"Inmoviliza suavemente las manos de tu pareja sobre su cabeza mientras usas la otra mano para masajear lentamente su zona íntima y la besas en el cuello."},
  {type:"Exploración mutua",text:"Recuéstense frente a frente y tóquense al mismo tiempo. Cada uno usa sus dedos para masajear y acariciar la zona íntima del otro, aumentando la velocidad según los gemidos que escuchen."},
  {type:"El que termine pierde",text:"Recuéstense frente a frente y tóquense al mismo tiempo. Cada uno usa sus dedos para masajear y acariciar la zona íntima del otro, el primero que se corra pierde."},
  {type:"Garganta descubierta",text:"Haz que tu pareja deje caer su cabeza hacia atrás por el borde de la cama y besa toda la línea de su cuello y pecho con succión constante."},
  {type:"Rastro de labios",text:"Trama una línea de besos que vaya desde el ombligo de tu pareja, baje por la cadera, recorra la cara interna de la pierna izquierda hasta la rodilla y suba de nuevo."},
  {type:"Beso intimo",text:"Colócate en una posición cómoda y enfócate en darle un beso o frotar tu lengua en la zona intima baja de tu pareja por mínimo 30 segundos."},
  {type:"Fricción manual mutua",text:"Colóquense uno al lado del otro. Tomen la zona intima del otro con las manos humedecidas y comiencen a frotarse mutuamente a un ritmo acelerado y sincronizado."},
  {type:"Besos en L invertida",text:"Besa apasionadamente la boca de tu pareja, desciende en línea recta hasta su ombligo y luego muévete horizontalmente besando la ingle hasta llegar al muslo interno."},
  {type:"Devoción oral",text:"Haz que tu pareja se recuesta cómodamente al borde de la cama. Arrodíllate y sumérgete en su intimidad, lamiendo y succionando con fuerza su zona más sensible."},
  {type:"Caricias íntimas en pareja",text:"Recuéstense frente a frente. Mientras se besan en la boca con intensidad, metan las manos entre las piernas del otro para acariciar sus zonas íntimas de forma simultánea."},
  {type:"Ritmo acelerado",text:"Estimula manualmente la zona íntima de tu pareja aumentando la velocidad progresivamente mientras muerdes suavemente su labio inferior."},
  {type:"Recorrido desde el pie",text:"Toma el pie de tu pareja y dale besos suaves, subiendo lentamente por la pierna y el muslo por el lado externo hasta llegar a los labios de tu pareja."},
  {type:"69 íntimo",text:"Colóquense en posición 69. Dense sexo oral el uno al otro al mismo tiempo, buscando que ambos sientan la misma velocidad e intensidad en la lengua."},
  {type:"Sin ropa",text:"Cada uno debe quitarle la ropa completa a su pareja de la forma mas apasionada posible."},
  {type:"Estimulación manual dirigida",text:"Masturba a tu pareja con la mano, mientras usas tu otra mano para sostener la suya y mantener un beso francés profundo."},
  {type:"Succión oral lenta",text:"Usa tu boca para envolver la zona más sensible de tu pareja, aplicando una succión suave y continua mientras recorres el área con la punta de la lengua."},
  {type:"Espalda relajada",text:"Tu pareja debe recostarse boca abajo mientras besas y juegas su espalda de manera apasionada."},
  {type:"Besos de la rodilla hacia arriba",text:"Recorre con la lengua la curva detrás de la rodilla de tu pareja y sube lentamente besando toda la cara interna del muslo hasta hacerla temblar."},
  {type:"Ritmo de lengua",text:"Recuesta a tu pareja mientras decide sobre que parte de su cuerpo lamiaras de forma apasionada."},
  {type:"Acariciarse en el regazo",text:"Sienta a tu pareja en tu regazo frente a ti. Mantengan un beso largo mientras ambos deslizan las manos para acariciarse mutuamente."},
  {type:"Recorrido cruzado",text:"Besa el lado izquierdo de los labios de tu pareja, baja cruzando el torso hasta la cadera derecha y desciende besando la parte interna del muslo derecho."},
  {type:"Beso y mordidas",text:"Toma a tu pareja boca arriba y empieza besar y darle mordiscos suaves a su cuello mientras sientes como cambia su respiración desliza tu mano hasta su zona intima."},
  {type:"Estimulación doble",text:"Masajea los pezones de tu pareja con una mano mientras con la otra acaricias su zona íntima, combinando el ritmo con besos en su cuello."},
  {type:"Línea de besos interna",text:"Abre las piernas de tu pareja y besa la piel desde la mitad del muslo hacia arriba, rozando los bordes de su intimidad con la punta de la lengua."},
  {type:"Acariciarse al borde",text:"Colóquense recostados de lado. Masturben al otro simultáneamente y detengan el movimiento cada vez que sientan que la pareja está a punto de llegar al orgasmo."},
  {type:"Final oral intenso",text:"Dedícate a darle sexo oral a tu pareja aumentando la velocidad de las succiones y lametones hasta llevarla al clímax únicamente con tu boca."}
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
