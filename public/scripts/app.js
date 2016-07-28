/*
  Daniel Orozco 13312
  UVG
  Sistemas y Tecnologias Web
  2016
*/

/*
state = 0: analogo
state = 1: digital
*/

// Modelo / estado
var state = 0;

var viewport = document.getElementById("viewport");
var changeTrigger = document.getElementById("change");

changeTrigger.addEventListener("click", function(){

  // Hacer cambio de estado
  if(state == 0){
    state = 1;
  }
  else if(state == 1){
    state = 0;  
  }
  // Aplicar render al estado correspondiente
  viewport.innerHTML = render(state);
  // Render del reloj para aplicar los cambios
  renderClock();
  
});

var segundos = 0;
var minutos = 0;
var horas = 0;
var horasDigital = 0;

function time()
{
  // Intervalo al que se llama la funcion
  setInterval(clock, 1000);
}

function clock()
{
  // Reseteo e incremento de valores
  if (segundos == 60){
    segundos = 0;
    minutos++;    
  }
  if (minutos == 60)
  {
    minutos = 0;
    horas++;
    horasDigital++;
  }
  if (horas == 12)
  {
    horas = 0;
  }
  if (horasDigital == 24)
  {
    horasDigital = 0;
  }
  segundos++;
  // Render del reloj para aplicar los cambios
  renderClock();
}

function renderClock()
{
  // Rotacion de agujas para el reloj analogo
  if (state == 0){    
    var segunderaA = document.getElementById("sgs-A");    
    segunderaA.style.transform = "rotateZ("+segundos*6+"deg)";
    var minuteraA = document.getElementById("mts-A");
    minuteraA.style.transform = "rotateZ("+minutos*6+"deg)";
    var horeraA = document.getElementById("hrs-A");
    horeraA.style.transform = "rotateZ("+horas*30+"deg)";
  }
  // Actualizacion de innerHTML para el reloj digital
  if (state == 1){
    var segunderaD = document.getElementById("sgs-D");
    segunderaD.innerHTML = segundos;
    var minuteraD = document.getElementById("mts-D");
    minuteraD.innerHTML = minutos;
    var horeraD = document.getElementById("hrs-D");
    horeraD.innerHTML = horasDigital;
  }
}

function render(state){
  var html = "";

  if(state == 0){
    html += '<div class="wrapper">';
    html += ' <div class="analog-clock">';
    html += '   <div class="dot"></div>';
    html += '   <div class="lables">';
    html += '     <div class="h1">1</div>';
    html += '     <div class="h2">2</div>';
    html += '     <div class="h3">3</div>';
    html += '     <div class="h4">4</div>';
    html += '     <div class="h5">5</div>';
    html += '     <div class="h6">6</div>';
    html += '     <div class="h7">7</div>';
    html += '     <div class="h8">8</div>';
    html += '     <div class="h9">9</div>';
    html += '     <div class="h10">10</div>';
    html += '     <div class="h11">11</div>';
    html += '     <div class="h12">12</div>';
    html += '   </div>';
    html += '   <div class="hours-wrapper">';
    html += '     <div class="hours-analog" id="hrs-A"></div>';
    html += '   </div>';
    html += '   <div class="minutes-wrapper">';
    html += '     <div class="minutes-analog" id="mts-A"></div>';
    html += '   </div>';
    html += '   <div class="seconds-wrapper">';
    html += '     <div class="seconds-analog" id="sgs-A"></div>';
    html += '   </div>';
    html += ' </div>';
    html += '</div>';
  }
  else{
    html += '<div class="wrapper">';
    html += ' <div class="digital-wrapper">';
    html += '   <div class="hours-digital" id="hrs-D">12</div>';
    html += '   <div class="double-dots" id="hm">:</div>';
    html += '   <div class="minutes-digital" id="mts-D">0</div>';
    html += '   <div class="double-dots" id="ms">:</div>';
    html += '   <div class="seconds-digital" id="sgs-D">0</div>';
    html += ' </div>'
    html += '</div>'
  } 

  return html;
}

viewport.innerHTML = render(state);
time();