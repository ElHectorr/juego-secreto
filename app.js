/* let titulo = document.querySelector('h1');
 titulo.innerHTML = 'Juego del nuero secreto';

 let parrafo = document.querySelector('p');
 parrafo.innerHTML = 'Escoge un numero del 1 al 10'*/

 let numeroSecreto = 0;
 let intentos = 0;
 let listaNumerosSorteados = [];
 

function asignarTexto(elemento,texto) {
   let elementoHTML = document.querySelector(elemento);
   elementoHTML.innerHTML = texto;
   return;
}

 function verificarIntento() {
   let numeroUsusario = parseInt(document.getElementById('valorUsuario').value);
   
   console.log(intentos);
   if (numeroUsusario === numeroSecreto) {
    asignarTexto('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}` );
    document.getElementById('reiniciar').removeAttribute('disabled');
   } else {
    // el usuario no acertó
        if (numeroUsusario > numeroSecreto) {
          asignarTexto ('p', 'El numero secreto es menor');
        } else {
          asignarTexto ('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
   }
   return;
 }

 function limpiarCaja() {
  document.querySelector('#valorUsuario').value = '';
 }

 function generarNumeroSecreto() {
   let numeroGenerado = Math.floor(Math.random()*10)+1;
   //si el numero generado esta incluido en la lista
   if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();  
   } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado
   }

 }

function condicionesIniciales() {
  asignarTexto('h1', 'juego del numero secreto!');
  asignarTexto('p', 'Escoge un numero del 1 al 10');
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

 function reiniciarJuego() {
  // limpiar caja
  limpiarCaja();
  // indicar mensaje de intervalo de numeros
  //Generar el numero aleatorio
  // inicializar el numero de intentos
  condicionesIniciales();
  // deshabilitar el boton de juego nuevo
  document.querySelector('#reiniciar').setAttribute('disabled', 'true');

  
 }

 condicionesIniciales();