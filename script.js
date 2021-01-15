let primeiroUso = true;

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
    // if(display.textContent == "0" && primeiroUso){
    //     
    //     primeiroUso = false;
    // }
    
    console.log(display.textContent);

   return numero;
}

