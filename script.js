let primeiroUso = true;
let apagouNumero = false;
let numerosCalculadora = [];
let somando = false;
let multiplicando = false;
let resultado = 0;
let ultimo = 0;
function limpaDisplay(){
    let display = document.getElementById("painel");
    resultado = 0;
    if(display.textContent != "0"){
        display.textContent = "0";
    }    
}

function capturaNumero(primeiroNumero){
    let display = document.getElementById("painel");
    let numero = document.getElementById(primeiroNumero).textContent;
    if(display.textContent == "0"){
        display.innerText = "";
    }
    display.innerText += numero;
    numerosCalculadora.push(numero);
    // if(display.textContent == "0" && primeiroUso){
    //     
    //     primeiroUso = false;
    // }
    
    console.log(display.textContent);

   return numero;
}

function limparUltimoNumero()
{
    apagouNumero = true;
    let texto = document.getElementById("painel").textContent;
    let retorno = texto.substring(0, texto.length - 1);
    document.getElementById("painel").innerText = retorno;
}

    /* bloco de código que tá tirando número de 9 em 9, talvez seja útil para fazermos subtraindo de numero em numero
    tal como fazemos numa clculadora
    apagouNumero = true;
    let texto = document.getElementById("painel");
    let ultimo  = texto.textContent.length-1 ;

    document.getElementById("painel").innerText = texto.textContent-ultimo; */

document.getElementById("somar").addEventListener("click", somar);
document.getElementById("multiplicar").addEventListener("click", multiplicar);

function somar() {
    somando = true;
    if (somando == true) {
        let display = document.getElementById("painel");
        resultado = parseFloat(display.innerText);
        console.log(`O resultado é ${resultado}`);
        display.innerText = "";
    }
}

// function multiplicar() {
//     multiplicando = true;
//     if (multiplicando == true) {
//         let display = document.getElementById("painel");
//         resultado = parseFloat(display.innerText);
//         resultado * parseFloat(display.innerText);
//         console.log(`O resultado é ${resultado}`);
//         display.innerText = "";
//     }
// }

function resultadoFinal() {
    let display = document.getElementById("painel");
    if (somando == true) {
        resultado += parseFloat(display.innerText); 
        ultimo = parseFloat(display.innerText);
    }  else {
        resultado += ultimo;
    }
    somando = false;
    display.innerText = resultado;
   // resultado = 0;
}