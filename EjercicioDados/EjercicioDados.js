






let nJugadores = parseInt(prompt("Cuantos jugadores vais a ser?"));

let jugadores = new Array();
for(let i = 0; i < nJugadores ; i++){
    let nombreJugador = prompt("Escriba el nombre del jugador");
    jugadores.push(nombreJugador);
}

console.log(jugadores);
inicioJuego(jugadores);

/**
 * La funcion es el inicio del juego, donde se realizara el juego
 * @param {int} numeroJugadores - Determina el numero de jugadores que van a jugar la partida
 */
function inicioJuego(numeroJugadores){
    let inicio = true;
    let turno = 1;
    let almacenamientoTotal = new Array();
    let marcador = new Array();
    let dado1;
    let dado2;
    let suma = 0;
    let almacenDeTiradas = new Array();
    for(let i = 0 ; i < numeroJugadores.length ; i++){
            marcador[i] = 0;
    }
    console.log("*** COMIENZA EL JUEGO ***");
    while(inicio ){
        dado1 = 0;
        dado2 = 0;
        suma = 0;
        let almacenamiento = new Array();
        console.log(inicio);
        console.log(turno);
        let datosPuntos = new Array();
        console.log(datosPuntos);
        
        for(let i = 0 ; i < numeroJugadores.length ; i++){
             almacenDeTiradas = [];
            suma=0;
            console.log("Empieza el jugador :" + numeroJugadores[i] );
            dado1 = parseInt((Math.random() * 6) + 1);
            console.log("Primer dado lanzado => " + dado1);
            almacenDeTiradas.push(dado1);
            dado2 = parseInt((Math.random() * 6) + 1);
            console.log("Segundo dado lanzado => " + dado2);
            almacenDeTiradas.push(dado2);
            //Sumamos los dos dados
            suma = dado1 + dado2;
            //Debemos comprobar si ha sido tirada especial
            
            if(dado1 == 6 && dado2 == 6){
                console.log("Ha hecho una jugada especial!");
                console.log("Tiras de nuevo!");
                dado1 = parseInt((Math.random() * 6) + 1);
                console.log("Tercer dado lanzado => " + dado1);
                almacenDeTiradas.push(dado1);
                suma =  suma + dado1;
            } else if(dado1 == 1 && dado2 == 1){
                console.log("Ha hecho una jugada especial!");
                console.log("Tiras de nuevo!");
                dado1 = parseInt((Math.random() * 6) + 1);
                console.log("Tercer dado lanzado => " + dado1);
                almacenDeTiradas.push(dado1);
                suma = suma + dado1;
            } else if(dado1 == 5 && dado2 == 5){
                console.log("Lo siento, has perdido el turno entero");
                almacenDeTiradas.push(0);
                suma = 0;
            } 


            // if(operacionEspecial(dado1, dado2)){
            //     console.log("Ha hecho una jugada especial!");
            //     console.log("Tiras de nuevo!");
            //     dado1 = parseInt((Math.random() * 6) + 1);
            //     console.log("Tercer dado lanzado => " + dado2);
            //     suma += dado1;
            // } else if(!operacionEspecial(dado1,dado2)){
            //     console.log("Lo siento, has perdido el turno entero");
            //     suma = 0;
            // }

            //Almaceno los datos del turno actual, almacena tantos datos como jugadores tenga

            datosTurno = [turno,numeroJugadores[i], suma, almacenDeTiradas]; // Almaceno los datos de cada turno
            console.log(datosTurno); // Muestro por pantalla los datos del turno
            almacenamientoTotal.push(datosTurno); // Almaceno los datos del turno de los jugadores y de la partida
            almacenamiento.push(datosTurno); // Almaceno los datos del turno
            datosPuntos.push(suma); // Almaceno los puntos que han hecho cada uno
        }
        console.log(datosPuntos); // Muestro los puntos que han hecho los jugadores en la ronda

        let ganador = comprobarGanadorTurno(datosPuntos);
        console.log(ganador);
        if(ganador != -1){
            console.log("El ganador de este turno es: " + numeroJugadores[ganador]);

            marcador[ganador] += 1;

            console.log(marcador);
        }
        

        //console.log(inicio);
        console.log(almacenamientoTotal);
        for(let i = 0 ; i < marcador.length ; i++){
            if(marcador[i] == 3){
                console.log("El ganador de la partida es: " + numeroJugadores[i]);
                inicio = false;
            }
        }
        turno++;
    }  
}

/**
 * La funcion determina si la tirada fue especial, si los dos dados eran iguales a 6 o a 1 repite la tirada ese jugador, si son iguales a 5 pierde el turno
 * @param {int} dado1 - Obtiene como parametro el primer dado lanzado de cualquier jugador
 * @param {int} dado2 - Obtiene como parametro el primer dado lanzado de cualquier jugador
 * @return {bool} - Si la tirada especial es que los dos dados son igual a 6 o a 1 repite la tirada devolviendo true, si son igual a 5 retorna false
 *  
 */
// function operacionEspecial(dado1, dado2){
//     if(dado1 + dado2 == 12){
//         //Tirada adicional
//         return true;
//     } else if(dado1 + dado2 == 2){
//         //Tirada adicional
//         return true;
//     } else if(dado1 == 5 && dado2 == 5){
//         //Pierde la ronda entera
//         return false;
//     } else {
//         return -1;  
//     }
// }

//Almacenar datos podria ser una funcion? No lo se, creo que si.

//Comprobar ganador?
/**
 * La funcion comprueba cual de los puntos que hay en el array es el mayor y el que ha ganado el turno
 * @param {array} datosPuntos - Lo que almaceno es un array con los puntos que se han hecho en esta ronda
 * @returns - Retorna la posicion del array ganador para que luego se compruebe quien ha sido el ganador y almacenarlo
 */
function comprobarGanadorTurno(datosPuntos){
    let pos = 0;
    for(let i = 0 ; i < datosPuntos.length ; i++){
        let n = datosPuntos[0];
        console.log(datosPuntos[i]);
        if(n < datosPuntos[i]){
            n = datosPuntos[i];
            console.log(n);
            pos = 1;
        }else if (datosPuntos[i] == datosPuntos[i+1]){
            return -1
        } else {
            pos = 0;
        }
    }
    return pos;
}

/**
 * 
 * @param {array} marcador - Paso un array sobre el marcador para saber cual de los jugadores ha ganado
 * @returns - retorno true si continua el juego porque no ha encontrado a ningun ganador, retorno false si lo ha encontrado y el juego acaba
 */
function comprobarGanador(marcador){
    for(let i = 0 ; i < marcador.length ; i++){
        if(marcador[i] == 3){
            console.log(marcador[i]);
            return false;
        } else {
            console.log(marcador[i]);
            return true;
        }
    }
}

/**
 * La funcion está hecha para sumar el punto del turno al ganador, pasandole la posicion del ganador y asi almacene ahi el punto
 * @param {array} marcador - Pasa como parametro un array donde se almacenaran los datos de quien gana cada ronda
 * @param {int} posicionGanador - Pasa como parametro el numero de la posicion del ganador de la rona
 * @returns - Retorna el marcador para que vuelva a ser almacenado.
 */
function sumarPuntoGanador(marcador, posicionGanador){
    for (let i = 0 ; i < marcador.length ; i++){
        if(i == posicionGanador){
            let n = marcador[i];
            marcador[i] = n+1;
        } 
    }
    return marcador;
}