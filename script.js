let primeiroUso = true;
let apagouNumero = false;
let numerosCalculadora = [];
function limpaDisplay(){
    let display = document.getElementById("painel");
    
     if(display.textContent != "0"){
         display.textContent = "0";
     }

    
}

function capturaNumero(primeiroNumero){
    let numero = document.getElementById(primeiroNumero).textContent;
    let display = document.getElementById("painel");
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
    console.log(`${retorno}`);
}

/* bloco de código que tá tirando número de 9 em 9, talvez seja útil para fazermos subtraindo de numero em numero
tal como fazemos numa clculadora
    apagouNumero = true;
    let texto = document.getElementById("painel");
    let ultimo  = texto.textContent.length-1 ;

    document.getElementById("painel").innerText = texto.textContent-ultimo;*/

