let valoresBooleanos = {
    soma: false,
    multiplica: false,
    subtracao: false,
    divisao: false,
}
let primeiroUso = true;
let apagouNumero = false;
let numerosCalculadora = [];
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
document.getElementById("subtrair").addEventListener("click", subtrair);
document.getElementById("dividir").addEventListener("click", dividir);

function somar() {
    valoresBooleanos.soma = true;
    if (valoresBooleanos.soma == true) {
        let display = document.getElementById("painel");
        resultado = parseFloat(display.innerText);
        console.log(`O resultado é ${resultado}`);
        display.innerText = "";
    }
}

function multiplicar() {
    valoresBooleanos.multiplica = true;
    if (valoresBooleanos.multiplica == true) {
        let display = document.getElementById("painel");
        resultado = parseFloat(display.innerText);
        display.innerText = "";
    }
}

function subtrair() {
    valoresBooleanos.subtracao = true;
    if (valoresBooleanos.subtracao == true) {
        let display = document.getElementById("painel");
        resultado = parseFloat(display.innerText);
        display.innerText = "";
    }
}

function dividir() {
    valoresBooleanos.divisao = true;
    if(valoresBooleanos.divisao == true) {
        let display = document.getElementById("painel");
        resultado = parseFloat(display.innerText);
        display.innerText = "";
    }
}

function resultadoFinal() {
    let display = document.getElementById("painel");
    if (valoresBooleanos.soma == true) {
        resultado += parseFloat(display.innerText); 
        ultimo = parseFloat(display.innerText);
    } else if (valoresBooleanos.multiplica == true) {
        resultado *= parseFloat(display.innerText);
        ultimo = parseFloat(display.innerText);
    } else if (valoresBooleanos.subtracao == true) {
        resultado -= parseFloat(display.innerText);
        ultimo = parseFloat(display.innerText);
    } else if (valoresBooleanos.divisao == true) {
        resultado /= parseFloat(display.innerText);
    }  else {
        resultado += ultimo;
    }
    valoresBooleanos.soma = false;
    display.innerText = resultado;
}

function colocaPonto(){
    let display = document.getElementById("painel");
    if(numerosCalculadora.indexOf(".") == -1){
        numerosCalculadora.push(".");
        if(display.textContent == "0"){
            display.textContent += numerosCalculadora.join('');
        } else{
            display.textContent = numerosCalculadora.join('');
        }
    }   
    
}
/* Bloco de código que ajudara a por ponto para separação de numeros */
