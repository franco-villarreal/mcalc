var btn = document.getElementById('btnVer');
var titulo = document.getElementById('titulo');
var acordes = document.getElementById('acordes');

window.onload = ocultarMastil();
window.onload = ocultarMastilG6();

function ocultarMastil(){
	var elemento = document.getElementById('contenedorMastil');
	elemento.style.display = 'none';
}

function ocultarMastilG6(){
	var elemento = document.getElementById('contenedorMastilG6');
	elemento.style.display = 'none';
}

function mostrarMastil(){
	ocultarMastilG6();
	var elemento = document.getElementById('contenedorMastil');
	elemento.style.display = 'block';
}

function mostrarMastilG6(){
	ocultarMastil();
	var elemento = document.getElementById('contenedorMastilG6');
	elemento.style.display = 'block';
}

var NOTAS = ['C','C#','D','D#','E','F','F#','G','G#','A','A#','B'];
var SEMITONO = 1;
var TONO = SEMITONO*2;
var JONICO = [0,TONO,TONO,SEMITONO,TONO,TONO,TONO];
var DORICO = [0,TONO,SEMITONO,TONO,TONO,TONO,SEMITONO];
var FRIGIO = [0,SEMITONO,TONO,TONO,TONO,SEMITONO,TONO];
var LIDIO = [0,TONO,TONO,TONO,SEMITONO,TONO,TONO];
var MIXOLIDIO = [0,TONO,TONO,SEMITONO,TONO,TONO,SEMITONO];
var EOLICO = [0,TONO,SEMITONO,TONO,TONO,SEMITONO,TONO];
var LOCRIO = [0,SEMITONO,TONO,TONO,SEMITONO,TONO,TONO];

var MAYOR = [0,TONO,TONO,SEMITONO,TONO,TONO,TONO];
var MENOR = [0,TONO,SEMITONO,TONO,TONO,SEMITONO,TONO];
var MENOR_ARMONICA = [0,TONO,SEMITONO,TONO,TONO,SEMITONO,TONO+SEMITONO];
var PENTATONICA_MENOR = [0,TONO+SEMITONO,TONO,TONO,TONO+SEMITONO];
var PENTATONICA_MAYOR = [0,TONO,TONO,TONO+SEMITONO,TONO];

var NOTAS_CUERDAS = [['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'],['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D'],['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A'],['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E']];
var NOTAS_CUERDAS_G6 = [['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E'],['B','C','C#','D','D#','E','F','F#','G','G#','A','A#','B'],['G','G#','A','A#','B','C','C#','D','D#','E','F','F#','G'],['D','D#','E','F','F#','G','G#','A','A#','B','C','C#','D'],['A','A#','B','C','C#','D','D#','E','F','F#','G','G#','A'],['E','F','F#','G','G#','A','A#','B','C','C#','D','D#','E']];
btn.onclick = function() {
	calcularTonalidad();
}

window.onload = calcularTonalidad();
/*	var tono = prompt('Por favor, ingrese la tonalidad deseada');
	if (tono === 'C' || tono === 'C#' || tono === 'D' || tono === 'D#' || tono === 'E' || tono === 'F' || tono === 'F#' || tono === 'G' || tono === 'G#' || tono === 'A' || tono === 'A#' || tono === 'B'){
		return tono;
	} else {
		alert('El dato ingresado es incorrecto');
		setTonalidad();
	}
}

function setEscala(){
	var escala = prompt('Por favor, ingrese la escala deseada');
	if (escala === 'MENOR' || escala === 'MAYOR' || escala === 'MENOR ARMONICA'){
		return escala;
	} else {
		alert('El dato ingresado es incorrecto');
		setEscala();
	}
}
*/
function getPosNota(tonalidad){
	var posNota = -1;
	var i = 0;
	while (i<NOTAS.length && posNota<0){
		if (tonalidad === NOTAS[i]){
			posNota = i;
		}
		i++;
	}
	return posNota;
}

function reordenarNotas(tonalidad){
	var posNota = getPosNota(tonalidad);
	var notas = new Array(12);
	var aux = 0;
	for (var i=0; i<notas.length; i++){
		if ((posNota+i)>=(NOTAS.length)){
		aux = 12;
		}
		notas[i] = this.NOTAS[posNota+i-aux];
	}
	return notas;
}

function calcularGrados(){
	var tonalidad = document.getElementById("tonalidad").value;
	var escala = document.getElementById("escala").value;
	var intervalo = 0;
	titulo.innerHTML = tonalidad + ' ' + escala;
	acordes.innerHTML = 'ACORDES';
	switch(escala){
		case 'MENOR':
			var grados = new Array(this.MENOR.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.MENOR[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'MAYOR':
			var grados = new Array(this.MAYOR.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.MAYOR[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'MENOR ARMONICA':
			var grados = new Array(this.MENOR_ARMONICA.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.MENOR_ARMONICA[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'PENTATONICA MENOR':
			var grados = new Array(this.PENTATONICA_MENOR.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.PENTATONICA_MENOR[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'PENTATONICA MAYOR':
			var grados = new Array(this.PENTATONICA_MAYOR.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.PENTATONICA_MAYOR[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'JONICO':
			var grados = new Array(this.JONICO.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.JONICO[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'DORICO':
			var grados = new Array(this.DORICO.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.DORICO[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'FRIGIO':
			var grados = new Array(this.FRIGIO.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.FRIGIO[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'LIDIO':
			var grados = new Array(this.LIDIO.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.LIDIO[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'MIXOLIDIO':
			var grados = new Array(this.MIXOLIDIO.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.MIXOLIDIO[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'EOLICO':
			var grados = new Array(this.EOLICO.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.EOLICO[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
		case 'LOCRIO':
			var grados = new Array(this.LOCRIO.length);
			intervalo = 0;
			for (var i=0; i<grados.length; i++){
				intervalo += this.LOCRIO[i];
				grados[i] = reordenarNotas(tonalidad)[intervalo];
			}
			break;
	}
	return grados;
}

function calcularTonalidad(){
	var instrumento = document.getElementById("instrumento").value;
	var grados = calcularGrados();
	var row = document.getElementById("row");
	var row1 = document.getElementById("row-1");
	var row2 = document.getElementById("row-2");
	var row3 = document.getElementById("row-3");
	row.innerHTML = '';
	row1.innerHTML = '';
	row2.innerHTML = '';
	row3.innerHTML = '';
	for (var i=0; i<grados.length; i++){
		var td = document.createElement('td');
        td.innerHTML = grados[i];
        td.className = "row-cont";
        row.appendChild(td);
	}
	listarAcordes(grados);
	document.getElementById("tabla").style.display = "inline";
	marcarMastil(grados, instrumento);
}

function listarAcordes(grados){
	var row1 = document.getElementById("row-1");
	var row2 = document.getElementById("row-2");
	var row3 = document.getElementById("row-3");

	for (var i=0; i<grados.length; i++){
		var td = document.createElement('td');
        td.innerHTML = grados[i];
        td.className = "row-cont";
        row1.appendChild(td);
	}
	for (var i=0; i<grados.length; i++){
		var td = document.createElement('td');
		var aux = 0;
		if ((aux+i+2)>=grados.length){
			aux = grados.length;
		}
        td.innerHTML = grados[i+2-aux];
        td.className = "row-cont";
        row2.appendChild(td);
	}
	for (var i=0; i<grados.length; i++){
		var td = document.createElement('td');
		var aux = 0;
		if ((aux+i+4)>=grados.length){
			aux = grados.length;
		}
        td.innerHTML = grados[i+4-aux];
        td.className = "row-cont";
        row3.appendChild(td);
	}
	document.getElementById("tabla-acordes").style.display = "inline";
}

function marcarMastil(grados, instrumento){
	var inst = 'INTRUMENTO NO SELECCIONADO';
	var cantCuerdas = 0;
	var notasPorCuerda;
	switch (instrumento){
		case 'BAJO4C':
			inst = '';
			cantCuerdas = 4;
			notasPorCuerda = this.NOTAS_CUERDAS;
			break;
		case 'GUITARRA6C':
			inst = 'g6';
			cantCuerdas = 6;
			notasPorCuerda = this.NOTAS_CUERDAS_G6;
			break;
	}
	var cuerdas = [];
	for (var f = 0; f<cantCuerdas; f++) {
		cuerdas[f] = new Array(13);
	}
	for (var j=0; j<cuerdas.length; j++){
		for (var i=0; i<cuerdas[0].length; i++){
			var item = inst + 'c' + (j+1) + 't' + i;
			cuerdas[j][i] = document.getElementById(item);
			cuerdas[j][i].style.display = 'none';
			var x = 0;
			var encontrado = false;
			while (x<grados.length && encontrado === false){

				if (notasPorCuerda[j][i] == grados[0]){
					cuerdas[j][i].style.display = 'inline-block';
					cuerdas[j][i].style.backgroundColor = '#FF8000';
					/*cuerdas[j][i].style.border = '1px solid #DF7401';*/
					encontrado = true;
				} else if(notasPorCuerda[j][i] == grados[x]){

					cuerdas[j][i].style.display = 'inline-block';
					cuerdas[j][i].style.background = '#0489B1';
					/*cuerdas[j][i].style.border = '1px solid #086A87';*/
					encontrado = true;
				}
				x++;
			}
		}
	}
	switch (instrumento){
		case 'BAJO4C':
		mostrarMastil();
		break;
		case 'GUITARRA6C':
		mostrarMastilG6();
		break;
	}
}

var notas = document.getElementsByClassName('nota');

for (var i in notas){

	(function(i){
    notas[i].onclick = function(){

    	var instSel = document.getElementById("instrumento").value;
    	var carpeta = 'guitarra';
    	var slider = document.getElementById("mislider").value;

    	if (instSel === 'BAJO4C'){
    		carpeta = 'bajo';
    	}

    	if (notas[i].style.display === 'none'){

		} else {
			var audio = new Audio('sounds/' + carpeta + '/sound' + i + '.mp3');
			audio.volume = slider;
			audio.play();
		}
    };
 	})
  (i);
}

for (var i in notas){

	(function(i){

    notas[i].onmouseover = function(){

		notas[i].style.width = '18px';
		notas[i].style.height = '18px';
		notas[i].style.margin = '-8px 0px 0px -10px';


    };

    notas[i].onmouseout = function(){

		notas[i].style.width = '13px';
		notas[i].style.height = '13px';
		notas[i].style.margin = '-6px 0px 0px -8px';

    };

 	})
  (i);
}
// METRONOMO

var tempo = document.getElementById("tempo");
var btnSubirTempo = document.getElementById("btnSubir");
var btnBajarTempo = document.getElementById('btnBajar');

btnSubirTempo.onclick = function(){
	if (parseInt(tempo.value, 10) < 300){
		tempo.value = parseInt(tempo.value, 10) + 5;
	}
	var audio = new Audio('sounds/bip.mp3');
	audio.volume = 0.25;
	audio.play();
}

btnBajarTempo.onclick = function(){
	if (parseInt(tempo.value, 10) > 0){
		tempo.value = parseInt(tempo.value, 10) - 5;
	}
	var audio = new Audio('sounds/bip.mp3');
	audio.volume = 0.25;
	audio.play();
}

var btnPlay = document.getElementById("btnPlay");
var btnStop = document.getElementById('btnStop');

btnPlay.onclick = function(){
	deshabilitarBotones();
	var miliseconds = 60000/parseInt(tempo.value, 10);
	var tempoLoop = setInterval(metronomo, miliseconds);
	var textMetro = document.getElementById('textMetronomo');
	tempoLoop;
	function metronomo(){
		textMetro.style.color = 'red';
		var slider = document.getElementById("mislider").value;
		var audio = new Audio('sounds/click.mp3');
		audio.volume = slider;
		audio.play();
	}

	btnStop.onclick = function(){clearInterval(tempoLoop);textMetro.style.color = 'black'; habilitarBotones();}

}

function habilitarBotones(){
	btnPlay.disabled = false;
	btnSubirTempo.disabled = false;
	btnBajarTempo.disabled = false;
	btnStop.disabled = true;
}

function deshabilitarBotones(){
	btnPlay.disabled = true;
	btnSubirTempo.disabled = true;
	btnBajarTempo.disabled = true;
	btnStop.disabled = false;
}
// TEMPORIZADOR

var timer = document.getElementById("timer");
var btnSubirTimer = document.getElementById("btnSubirTimer");
var btnBajarTimer = document.getElementById('btnBajarTimer');
var btnPlayTimer = document.getElementById('btnPlayTimer');
var btnStopTimer = document.getElementById('btnStopTimer');
var btnResetTimer = document.getElementById('btnResetTimer');

var formatTimer = new Intl.NumberFormat("en-US", { style: "decimal", minimumIntegerDigits: 2 });
var hours = 0;
var mins = 0;

btnSubirTimer.onclick = function(){
	subirTimer();

}

function subirTimer(){
	mins += 1;
	if (mins >= 60){
		mins = 0;
		hours += 1;
	}
	timer.value = formatTimer.format(hours) + ':' + formatTimer.format(mins);
}

btnSubirTimer.onmousedown = function(){
	var loop = setInterval(subirTimer, 100);
	loop;
	btnSubirTimer.onmouseup = function(){
			clearInterval(loop);
		}

	timer.value = formatTimer.format(hours) + ':' + formatTimer.format(mins);
}

btnBajarTimer.onclick = function(){
	bajarTimer();
}

function bajarTimer(){
	mins -= 1;
	if (mins < 0 && hours > 0){
		mins = 59;
		hours -= 1;
	} else if (mins <= 0 && hours <= 0){
		mins = 0;
	}
	timer.value = formatTimer.format(hours) + ':' + formatTimer.format(mins);
}

btnBajarTimer.onmousedown = function(){
	var loop = setInterval(bajarTimer, 100);
	loop;
	btnBajarTimer.onmouseup = function(){
			clearInterval(loop);
		}
	timer.value = formatTimer.format(hours) + ':' + formatTimer.format(mins);
}

btnResetTimer.onclick = function(){
	hours = 0;
	mins = 0;
	timer.value = formatTimer.format(hours) + ':' + formatTimer.format(mins);
}

btnPlayTimer.onclick = function(){

		deshabilitarBotonesTimer()
		var timerLoop = setInterval(contadorTimer, 1000*60);
		timerLoop;
		btnStopTimer.onclick = function(){
			clearInterval(timerLoop);
			habilitarBotonesTimer();
		}
}


function contadorTimer(){
	if (mins === 0 && hours === 0){
		mins = 0;
		hours = 0;
	} else if (mins === 0 && hours > 0){
		mins = 59;
		hours--;
	} else {
		mins--;
	}
	timer.value = formatTimer.format(hours) + ':' + formatTimer.format(mins);
}

function habilitarBotonesTimer(){
	btnPlayTimer.disabled = false;
	btnSubirTimer.disabled = false;
	btnBajarTimer.disabled = false;
	btnStopTimer.disabled = true;
	btnResetTimer.disabled = false;
}

function deshabilitarBotonesTimer(){
	btnPlayTimer.disabled = true;
	btnSubirTimer.disabled = true;
	btnBajarTimer.disabled = true;
	btnStopTimer.disabled = false;
	btnResetTimer.disabled = true;
}
