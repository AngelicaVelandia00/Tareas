//Declaramos variables
var operandoa;
var operandob;
var operacion;

function init(){
    //variables
    var resultado = document.getElementById('resultado');
    var clear = document.getElementById('clear');
    var suma = document.getElementById('suma');
    var resta = document.getElementById('resta');
    var multiplicacion = document.getElementById('multiplicacion');
    var punto = document.getElementById('punto');
    var division = document.getElementById('division');
    var igual = document.getElementById('igual');
    var uno = document.getElementById('uno');
    var dos = document.getElementById('dos');
    var tres = document.getElementById('tres');
    var cuatro = document.getElementById('cuatro');
    var cinco = document.getElementById('cinco');
    var seis = document.getElementById('seis');
    var siete = document.getElementById('siete');
    var ocho = document.getElementById('ocho');
    var nueve = document.getElementById('nueve');
    var cero = document.getElementById('cero');
}

  //Eventos de click
  uno.onclick = function(e){
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    resultado.textContent = resultado.textContent  + "0";
}
punto.onclick = function(e){
    resultado.textContent = resultado.textContent  + ".";
}
clear.onclick = function(e){
    clear();
}
suma.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "+";
}
resta.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "-";
}
multiplicacion.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "&#215";
}
division.onclick = function(e){
    operandoa = resultado.textContent;
    operacion = "&#xF7";
}
igual.onclick = function(e){
    operandob = resultado.textContent;
}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
}
function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "&#215":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "&#xF7":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
        case "&#xF7":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
        case ".":
    }
    resetear();
    resultado.textContent = res;
  }
