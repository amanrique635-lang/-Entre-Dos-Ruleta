const cards=[
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

const palette=["#ff4f96","#7a3df0","#1b8fc6","#e89f24","#2aa46f","#d24d7d","#6654d9","#e56b3e","#2f9d9a","#bd3b90"];
let available=[],used=[],turn=0,rotation=0,spinning=false;
const $=s=>document.querySelector(s);
const wheel=$("#wheel"),labels=$("#labels"),spin=$("#spin"),remain=$("#remain"),resultType=$("#resultType"),resultText=$("#resultText"),resultNote=$("#resultNote"),p1=$("#p1"),p2=$("#p2"),turnName=$("#turnName"),usedList=$("#usedList"),usedCount=$("#usedCount");

function names(){return [p1.value.trim()||"Jugador 1",p2.value.trim()||"Jugador 2"]}
function makeWheel(){
 const step=360/25,stops=[];
 for(let i=0;i<25;i++){const c=palette[i%palette.length];stops.push(`${c} ${i*step}deg ${(i+1)*step}deg`)}
 wheel.style.background=`conic-gradient(${stops.join(",")})`;
 labels.innerHTML="";
 for(let i=0;i<25;i++){
  const angle=(i+.5)*step-90,r=44,el=document.createElement("span");
  el.className="segment-label";el.textContent=i+1;
  el.style.left=`calc(50% + ${Math.cos(angle*Math.PI/180)*r}%)`;
  el.style.top=`calc(50% + ${Math.sin(angle*Math.PI/180)*r}%)`;
  el.style.transform=`translate(-50%,-50%) rotate(${angle+90}deg)`;
  labels.appendChild(el)
 }
}
function update(){
 remain.textContent=available.length;usedCount.textContent=used.length;turnName.textContent=names()[turn];
 usedList.innerHTML=used.length?used.map((c,i)=>`<div class="used">${i+1}. ${c.type}</div>`).join(""):'<div class="empty">Todavía no ha salido ninguna opción.</div>'
}
function resetGame(){
 available=cards.map((c,i)=>({...c,id:i+1}));used=[];turn=0;rotation=0;spinning=false;
 wheel.style.transform="rotate(0deg)";resultType.textContent="Lista para comenzar";
 resultText.textContent="Toca “Girar” para sacar el primer reto.";resultNote.textContent="No habrá repeticiones durante esta partida.";spin.disabled=false;update()
}
function pick(){const i=Math.floor(Math.random()*available.length);return available.splice(i,1)[0]}
function spinWheel(){
 if(spinning)return;
 if(!available.length){resultType.textContent="Partida terminada";resultText.textContent="Ya salieron las 25 opciones.";resultNote.textContent="Reinicia para volver a jugar.";spin.disabled=true;return}
 spinning=true;spin.disabled=true;
 const currentPlayer=names()[turn],card=pick(),extra=6+Math.floor(Math.random()*3),stop=Math.floor(Math.random()*360);
 rotation+=extra*360+stop;wheel.style.transform=`rotate(${rotation}deg)`;
 resultType.textContent=`Girando · Turno de ${currentPlayer}`;resultText.textContent="…";resultNote.textContent="Buscando una opción nueva.";
 setTimeout(()=>{used.push(card);resultType.textContent=`${card.type} · Turno de ${currentPlayer}`;resultText.textContent=card.text;resultNote.textContent="Esta opción ya no volverá a salir.";turn=turn===0?1:0;spinning=false;spin.disabled=available.length===0;update()},4550)
}
function openStatus(){
 $("#sheetTitle").textContent=available.length?"Ruleta activa":"Partida terminada";
 $("#sheetText").textContent=available.length?`El siguiente turno es de ${names()[turn]}. Ninguna opción usada puede repetirse.`:"Ya se utilizaron las 25 opciones.";
 $("#sheetRemaining").textContent=available.length;$("#sheetUsed").textContent=used.length;$("#overlay").classList.add("show")
}
spin.addEventListener("click",spinWheel);$("#status").addEventListener("click",openStatus);$("#reset").addEventListener("click",resetGame);$("#closeSheet").addEventListener("click",()=>$("#overlay").classList.remove("show"));p1.addEventListener("input",update);p2.addEventListener("input",update);
makeWheel();resetGame();
