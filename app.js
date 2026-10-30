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

// ============================================================
// NUEVO MODO: RULETA POSICIONES
// Las posiciones pueden usar:
// - svg: `<svg ...></svg>` para una ilustración embebida.
// - image: "images/positions/archivo.webp" para un archivo externo.
// Los nombres, frases y la lógica de la Ruleta juego de arriba no se modifican.
// ============================================================

const positionCards = [
  {
    id: "poses-01",
    type: "El Loto Profundo",
    text: "Él sentado con las piernas cruzadas; ella se sienta sobre su regazo de frente, rodeando su cintura con las piernas para mantener un contacto pecho a pecho y un roce directo.",
    illustration: "poseLoto",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="El Loto Profundo"><defs><linearGradient id="pg" x1="0" x2="1"><stop stop-color="#ff4f96"/><stop offset="1" stop-color="#b05cff"/></linearGradient></defs><circle cx="125" cy="54" r="12" fill="#38509a"/><path d="M 125 72 L 125 116 L 95 142 M 125 106 L 163 124" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="180" cy="54" r="12" fill="#ff4f96"/><path d="M 180 72 L 180 116 L 150 142 M 180 106 L 218 124" stroke="#ff4f96" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M142 96 Q155 108 170 96" stroke="#f4a4c6" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    id: "poses-02",
    type: "Acceso Abierto",
    text: "Ella se recuesta boca arriba al borde de la cama dejando caer las piernas; él se sitúa de pie o arrodillado frente a ella con un ángulo abierto y directo.",
    illustration: "poseAccesoAbierto",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="Acceso Abierto"><line x1="40" y1="135" x2="180" y2="135" stroke="rgba(255,255,255,.2)" stroke-width="6" stroke-linecap="round"/><circle cx="70" cy="95" r="11.52" fill="#ff4f96"/><path d="M 83 106.52 Q 123.5 122.36 150.14 125.96 M 122.36 123.08 L 164.14 141.8" stroke="#ff4f96" stroke-width="10.08" stroke-linecap="round" fill="none"/><circle cx="205" cy="75" r="12" fill="#38509a"/><path d="M 205 95 L 205 140 L 230 160 M 205 120 L 183 135" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`
  },
  {
    id: "poses-03",
    type: "Piernas al Hombro",
    text: "Ella se recuesta boca arriba y eleva sus piernas apoyándolas firmemente sobre los hombros de él, logrando un ángulo abierto y expuesto.",
    illustration: "posePiernasHombro",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="Piernas al Hombro"><circle cx="80" cy="105" r="12" fill="#ff4f96"/><path d="M 93 117 Q 135 133.5 162.7 137.25 M 135 134.25 L 178.5 153.75" stroke="#ff4f96" stroke-width="10.5" stroke-linecap="round" fill="none"/><path d="M140 120 L185 85" stroke="#ff4f96" stroke-width="14" stroke-linecap="round"/><circle cx="210" cy="75" r="12" fill="#38509a"/><path d="M 210 95 L 210 140 L 235 160 M 210 120 L 188 135" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`
  },
  {
    id: "poses-04",
    type: "En Cuatro",
    text: "Ella se apoya firme sobre sus manos y rodillas en la cama; él se coloca arrodillado justo detrás sujetándola de las caderas para marcar el ritmo.",
    illustration: "poseEnCuatro",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="En Cuatro"><circle cx="70" cy="100" r="11.2" fill="#ff4f96"/><path d="M 85 112.6 L 120 115.4 M 95 114 L 95 145.5 M 116 115.4 L 116 145.5" stroke="#ff4f96" stroke-width="9.8" stroke-linecap="round" fill="none"/><circle cx="185" cy="80" r="12" fill="#38509a"/><path d="M 185 100 L 185 145 L 210 165 M 185 125 L 163 140" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M165 110 Q145 115 130 105" stroke="#f4a4c6" stroke-width="5" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    id: "poses-05",
    type: "La Cucharita Intensa",
    text: "Ambos recostados de lado mirando en la misma dirección; él se pega por completo a la espalda de ella rodeándola con sus brazos para un roce constante.",
    illustration: "poseCucharita",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="La Cucharita Intensa"><circle cx="80" cy="105" r="12" fill="#38509a"/><path d="M 93 117 Q 135 133.5 162.7 137.25 M 135 134.25 L 178.5 153.75" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" fill="none"/><circle cx="110" cy="90" r="12" fill="#ff4f96"/><path d="M 123 102 Q 165 118.5 192.7 122.25 M 165 119.25 L 208.5 138.75" stroke="#ff4f96" stroke-width="10.5" stroke-linecap="round" fill="none"/><path d="M110 120 Q135 128 155 118" stroke="#f4a4c6" stroke-width="6" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    id: "poses-06",
    type: "La Misionera Elevada",
    text: "Ella se recuesta boca arriba con una almohada bajo sus caderas para elevar la pelvis; él se coloca encima apoyando sus brazos a los lados cara a cara.",
    illustration: "poseMisioneraElevada",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="La Misionera Elevada"><ellipse cx="115" cy="142" rx="30" ry="10" fill="rgba(255,255,255,.25)"/><circle cx="75" cy="95" r="12" fill="#ff4f96"/><path d="M 88 107 Q 130 123.5 157.7 127.25 M 130 124.25 L 173.5 143.75" stroke="#ff4f96" stroke-width="10.5" stroke-linecap="round" fill="none"/><circle cx="105" cy="70" r="12" fill="#38509a"/><path d="M 118 82 Q 160 98.5 187.7 102.25 M 160 99.25 L 203.5 118.75" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" fill="none"/></svg>`
  },
  {
    id: "poses-07",
    type: "El Jinete Invertido",
    text: "Él se recuesta boca arriba; ella se sube a horcajadas sobre sus caderas pero dándole la espalda, mientras él aprovecha para acariciar sus caderas y glúteos.",
    illustration: "poseJineteInvertido",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="El Jinete Invertido"><circle cx="80" cy="110" r="12" fill="#38509a"/><path d="M 93 122 Q 135 138.5 162.7 142.25 M 135 139.25 L 178.5 158.75" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" fill="none"/><circle cx="155" cy="65" r="11.52" fill="#ff4f96"/><path d="M 155 77.96 L 155 109.64 L 133.4 128.36 M 155 102.44 L 182.36 115.4" stroke="#ff4f96" stroke-width="10.08" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>`
  },
  {
    id: "poses-08",
    type: "Fricción de Pie",
    text: "Ella se apoya de espaldas contra la pared; él se acerca de frente, levanta una de sus piernas para sostenerla por el muslo y mantiene el contacto estrecho.",
    illustration: "posePared",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="Fricción de Pie"><line x1="220" y1="30" x2="220" y2="190" stroke="rgba(255,255,255,.2)" stroke-width="6"/><circle cx="190" cy="48" r="12" fill="#ff4f96"/><path d="M 190 63 L 190 106.5 M 190 81.75 L 169 97.5 M 190 81.75 L 211 97.5 M 190 106.5 L 173.5 138 M 190 106.5 L 206.5 138" stroke="#ff4f96" stroke-width="10.5" stroke-linecap="round" fill="none"/><circle cx="135" cy="48" r="12" fill="#38509a"/><path d="M 135 63 L 135 106.5 M 135 81.75 L 114 97.5 M 135 81.75 L 156 97.5 M 135 106.5 L 118.5 138 M 135 106.5 L 151.5 138" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" fill="none"/><path d="M185 115 Q160 100 145 115" stroke="#ff4f96" stroke-width="12" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    id: "poses-09",
    type: "Ángulo Oral Abierto",
    text: "Ella se sienta al borde de la cama con las piernas abiertas; él se arrodilla directamente entre sus muslos para darle placer oral con la boca.",
    illustration: "poseTronoOral",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="Trono Oral"><line x1="50" y1="130" x2="160" y2="130" stroke="rgba(255,255,255,.2)" stroke-width="6"/><circle cx="95" cy="60" r="12" fill="#ff4f96"/><path d="M 95 73.5 L 95 106.5 L 72.5 126 M 95 99 L 123.5 112.5" stroke="#ff4f96" stroke-width="10.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/><circle cx="180" cy="95" r="11.52" fill="#38509a"/><path d="M 180 114.4 L 180 157.6 L 204 176.8 M 180 138.4 L 158.8 152.8" stroke="#38509a" stroke-width="10.08" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M165 115 L130 115" stroke="#f4a4c6" stroke-width="4" stroke-dasharray="4 4"/></svg>`
  },
  {
    id: "poses-10",
    type: "Apertura Lateral",
    text: "Ambos recostados de lado frente a frente; ella levanta la pierna superior y la apoya sobre la cadera de él, dejando un espacio apretado para besarse y frotarse.",
    illustration: "poseAperturaLateral",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="Apertura Lateral"><circle cx="75" cy="100" r="12" fill="#38509a"/><path d="M 88 112 Q 130 128.5 157.7 132.25 M 130 129.25 L 173.5 148.75" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" fill="none"/><circle cx="115" cy="80" r="12" fill="#ff4f96"/><path d="M 128 92 Q 170 108.5 197.7 112.25 M 170 109.25 L 213.5 128.75" stroke="#ff4f96" stroke-width="10.5" stroke-linecap="round" fill="none"/><path d="M140 100 Q120 75 100 95" stroke="#ff4f96" stroke-width="12" fill="none" stroke-linecap="round"/></svg>`
  },
  {
    id: "poses-11",
    type: "Rostro en la Intimidad",
    text: "Él se recuesta boca arriba en la cama; ella se coloca de rodillas entre sus piernas e inclina su torso para darle sexo oral a un ritmo constante.",
    illustration: "poseOralAEl",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="Oral a Él"><circle cx="75" cy="110" r="12" fill="#38509a"/><path d="M 88 122 Q 130 138.5 157.7 142.25 M 130 139.25 L 173.5 158.75" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" fill="none"/><circle cx="145" cy="80" r="11.52" fill="#ff4f96"/><path d="M 145 99.4 L 145 142.6 L 169 161.8 M 145 123.4 L 123.8 137.8" stroke="#ff4f96" stroke-width="10.08" stroke-linecap="round" stroke-linejoin="round" fill="none"/><path d="M130 100 L105 115" stroke="#f4a4c6" stroke-width="4" stroke-dasharray="4 4"/></svg>`
  },
  {
    id: "poses-12",
    type: "El 69 Simultáneo",
    text: "Ambos recostados en posición invertida, la cabeza de uno frente a los genitales del otro, entregándose a un placer oral simultáneo y sincronizado.",
    illustration: "pose69Simultaneo",
    for: "both",
    svg: `<svg viewBox="0 0 320 220" role="img" aria-label="69 Simultáneo"><circle cx="80" cy="110" r="12" fill="#38509a"/><path d="M 93 122 Q 135 138.5 162.7 142.25 M 135 139.25 L 178.5 158.75" stroke="#38509a" stroke-width="10.5" stroke-linecap="round" fill="none"/><g transform="translate(240,160) rotate(180)"><circle cx="80" cy="110" r="12" fill="#ff4f96"/><path d="M 93 122 Q 135 138.5 162.7 142.25 M 135 139.25 L 178.5 158.75" stroke="#ff4f96" stroke-width="10.5" stroke-linecap="round" fill="none"/></g></svg>`
  }
];

let positionAvailable = [];
let positionUsed = [];
let positionTurn = 0;
let positionRotation = 0;
let positionSpinning = false;

const homeScreen = $("#homeScreen");
const gameScreen = $("#gameScreen");
const positionsScreen = $("#positionsScreen");
const positionWheel = $("#positionWheel");
const positionLabels = $("#positionLabels");
const positionSpin = $("#spinPosition");
const positionRemain = $("#positionRemain");
const positionTurnName = $("#positionTurnName");
const positionResultType = $("#positionResultType");
const positionResultTitle = $("#positionResultTitle");
const positionResultText = $("#positionResultText");
const positionUsedList = $("#positionUsedList");
const positionUsedCount = $("#positionUsedCount");
const positionDeckCount = $("#positionDeckCount");
const positionBadge = $("#positionBadge");
const positionImage = $("#positionImage");
const positionSvg = $("#positionSvg");
const positionImagePlaceholder = $("#positionImagePlaceholder");
const positionImagePath = $("#positionImagePath");
const positionP1 = $("#positionP1");
const positionP2 = $("#positionP2");

function showScreen(screen) {
  homeScreen.hidden = screen !== "home";
  gameScreen.hidden = screen !== "game";
  positionsScreen.hidden = screen !== "positions";
  window.scrollTo({top:0, behavior:"auto"});
}

function syncPositionNamesFromGame() {
  positionP1.value = p1.value;
  positionP2.value = p2.value;
  updatePositions();
}

function syncGameNamesFromPositions() {
  p1.value = positionP1.value;
  p2.value = positionP2.value;
  saveNames();
  update();
  updatePositions();
}

function positionNames() {
  return [positionP1.value.trim() || "Jugador 1", positionP2.value.trim() || "Jugador 2"];
}

function renderPositionWheel() {
  positionLabels.innerHTML = "";

  if (!positionAvailable.length) {
    positionWheel.style.background = "rgba(255,255,255,.035)";
    positionLabels.innerHTML = '<div class="empty-wheel">Sin opciones</div>';
    return;
  }

  const n = positionAvailable.length;
  const step = 360 / n;
  const stops = positionAvailable.map((card, index) => {
    const color = palette[(card.number + 3) % palette.length];
    return `${color} ${index * step}deg ${(index + 1) * step}deg`;
  });

  positionWheel.style.background = `conic-gradient(${stops.join(",")})`;

  const radius = n <= 8 ? 38 : n <= 14 ? 41 : 43.5;
  const fontSize = n <= 10 ? ".78rem" : n <= 18 ? ".68rem" : ".60rem";

  positionAvailable.forEach((card, index) => {
    const angle = (index + 0.5) * step - 90;
    const rad = angle * Math.PI / 180;
    const label = document.createElement("span");
    label.className = "segment-label";
    label.textContent = card.number;
    label.style.fontSize = fontSize;
    label.style.left = `${50 + Math.cos(rad) * radius}%`;
    label.style.top = `${50 + Math.sin(rad) * radius}%`;
    label.style.transform = `translate(-50%,-50%) rotate(${angle + 90}deg)`;
    positionLabels.appendChild(label);
  });
}

function updatePositions() {
  positionRemain.textContent = positionAvailable.length;
  positionUsedCount.textContent = positionUsed.length;
  positionDeckCount.textContent = positionCards.length;
  positionBadge.textContent = `POSICIONES · ${positionCards.length}`;
  positionTurnName.textContent = positionNames()[positionTurn];

  if (!positionUsed.length) {
    positionUsedList.innerHTML = '<div class="empty">Todavía no ha salido ninguna posición.</div>';
  } else {
    positionUsedList.innerHTML = positionUsed.map(card =>
      `<div class="used">#${card.number} · ${escapeHtml(card.type)}</div>`
    ).join("");
  }
}

function clearPositionImage(message = "La referencia visual aparecerá aquí al seleccionar una posición.") {
  positionImage.hidden = true;
  positionImage.removeAttribute("src");
  positionImage.onload = null;
  positionImage.onerror = null;

  positionSvg.hidden = true;
  positionSvg.innerHTML = "";

  positionImagePlaceholder.hidden = false;
  const small = positionImagePlaceholder.querySelector("small");
  if (small) small.textContent = message;
}

function loadPositionImage(card) {
  clearPositionImage();

  if (card.svg) {
    positionSvg.innerHTML = card.svg;
    positionSvg.hidden = false;
    positionImagePlaceholder.hidden = true;
    positionImagePath.textContent = "Ilustración SVG integrada";
    return;
  }

  positionImagePath.textContent = card.image ? `Archivo: ${card.image}` : "Sin imagen configurada";
  if (!card.image) return;

  positionImage.onload = () => {
    positionImage.hidden = false;
    positionImagePlaceholder.hidden = true;
  };

  positionImage.onerror = () => {
    clearPositionImage(`Falta subir: ${card.image}`);
    positionImagePath.textContent = `Archivo esperado: ${card.image}`;
  };

  positionImage.src = `${card.image}?v=2`;
}

function resetPositions(showMessage = false) {
  positionAvailable = positionCards.map((card, index) => ({
    ...card,
    uid:`position-${index + 1}`,
    number:index + 1
  }));
  positionUsed = [];
  positionTurn = 0;
  positionRotation = 0;
  positionSpinning = false;

  positionWheel.style.transition = "none";
  positionWheel.style.transform = "rotate(0deg)";
  void positionWheel.offsetWidth;
  positionWheel.style.transition = "transform 4.5s cubic-bezier(.12,.75,.16,1)";

  positionResultType.textContent = "Lista para comenzar";
  positionResultTitle.textContent = "Toca “Girar posición” para comenzar.";
  positionResultText.textContent = "La posición elegida desaparecerá de la ruleta para que no se repita.";
  positionImagePath.textContent = "";
  clearPositionImage();
  positionSpin.disabled = positionAvailable.length === 0;

  renderPositionWheel();
  updatePositions();
  if (showMessage) showToast("Ruleta de posiciones reiniciada");
}

function spinPositionWheel() {
  if (positionSpinning || !positionAvailable.length) return;

  positionSpinning = true;
  positionSpin.disabled = true;

  const currentPlayer = positionNames()[positionTurn];
  const selectedIndex = Math.floor(Math.random() * positionAvailable.length);
  const selectedCard = positionAvailable[selectedIndex];
  const step = 360 / positionAvailable.length;
  const selectedCenter = (selectedIndex + 0.5) * step;
  const desiredFinalAngle = normalizeAngle(-selectedCenter);
  const currentAngle = normalizeAngle(positionRotation);
  const correction = normalizeAngle(desiredFinalAngle - currentAngle);
  const extraTurns = 6 + Math.floor(Math.random() * 3);

  positionRotation += extraTurns * 360 + correction;

  positionResultType.textContent = `Girando · Turno de ${currentPlayer}`;
  positionResultTitle.textContent = "…";
  positionResultText.textContent = `Buscando una posición entre ${positionAvailable.length} disponibles.`;
  positionImagePath.textContent = "";
  clearPositionImage("La referencia aparecerá al terminar el giro.");
  positionWheel.style.transform = `rotate(${positionRotation}deg)`;

  setTimeout(() => {
    const liveIndex = positionAvailable.findIndex(card => card.uid === selectedCard.uid);
    const [card] = positionAvailable.splice(liveIndex, 1);
    positionUsed.push(card);

    positionResultType.textContent = `#${card.number} · Turno de ${currentPlayer}`;
    positionResultTitle.textContent = card.type;
    positionResultText.textContent = card.text;
    loadPositionImage(card);

    positionTurn = positionTurn === 0 ? 1 : 0;
    positionSpinning = false;
    positionSpin.disabled = positionAvailable.length === 0;

    renderPositionWheel();
    updatePositions();
  }, 4550);
}

$("#openGameMode").addEventListener("click", () => showScreen("game"));
$("#openPositionsMode").addEventListener("click", () => {
  syncPositionNamesFromGame();
  showScreen("positions");
});
$("#backFromGame").addEventListener("click", () => showScreen("home"));
$("#backFromPositions").addEventListener("click", () => showScreen("home"));
$("#spinPosition").addEventListener("click", spinPositionWheel);
$("#resetPositions").addEventListener("click", () => resetPositions(true));

[positionP1, positionP2].forEach(input => {
  input.addEventListener("input", syncGameNamesFromPositions);
});

[p1, p2].forEach(input => {
  input.addEventListener("input", syncPositionNamesFromGame);
});

syncPositionNamesFromGame();
resetPositions(false);
showScreen("home");