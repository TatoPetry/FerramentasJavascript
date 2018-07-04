var valor1;
var valor2;
var operador;
var ultimoresultado;
function init(){
    valor1 = 0;
    valor2 = 0;
    operador= "";
    ultimoresultado= 0;
    //Buscando valor das variáveis
   var resultado = document.getElementById("resultado");
   var um = document.getElementById("um");
   var dois = document.getElementById("dois");
   var tres = document.getElementById("tres");
   var quatro = document.getElementById("quatro");
   var cinco = document.getElementById("cinco");
   var seis = document.getElementById("seis");
   var sete = document.getElementById("sete");
   var oito = document.getElementById("oito");
   var nove = document.getElementById("nove");
   var zero = document.getElementById("zero");
   var soma = document.getElementById("soma");
   var subtracao = document.getElementById("subtracao");
   var divisao = document.getElementById("divisao");
   var multiplicacao = document.getElementById("multiplicacao");
   var ponto = document.getElementById("ponto");
   var igual = document.getElementById("igual");
   var clear = document.getElementById("clear");
    
   //Métodos numeros
    um.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = um.value;       
        } else {
           resultado.value = resultado.value + um.value;
        }
    }    
    
    dois.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = dois.value;       
        } else {
           resultado.value = resultado.value + dois.value;
        }
    }

    tres.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = tres.value;       
        } else {
           resultado.value = resultado.value + tres.value;
        }
    }

    quatro.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = quatro.value;       
        } else {
           resultado.value = resultado.value + quatro.value;
        }
    }

    cinco.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = cinco.value;       
        } else {
           resultado.value = resultado.value + cinco.value;
        }
    }

    seis.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = seis.value;       
        } else {
           resultado.value = resultado.value + seis.value;
        }
    }

    sete.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = sete.value;       
        } else {
           resultado.value = resultado.value + sete.value;
        }
    }

    oito.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = oito.value;       
        } else {
           resultado.value = resultado.value + oito.value;
        }
    }

    nove.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = nove.value;       
        } else {
           resultado.value = resultado.value + nove.value;
        }
    }

    zero.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = zero.value;       
        } else {
           resultado.value = resultado.value + zero.value;
        }
    }
   
    ponto.onclick = function(e){
        if(resultado.value == "0" || resultado.value == ultimoresultado){
           resultado.value = ponto.value;       
        } else {
           resultado.value = resultado.value + ponto.value;
        }
    }
    
    soma.onclick = function(e){
        valor1 = resultado.value;
        operador = soma.value;
        limpar()
    }

    subtracao.onclick = function(e){
        valor1 = resultado.value;
        operador = subtracao.value;
        limpar()
    }

    divisao.onclick = function(e){
        valor1 = resultado.value;
        operador = divisao.value;
        limpar()
    }

    multiplicacao.onclick = function(e){
        valor1 = resultado.value;
        operador = multiplicacao.value;
        limpar()
    }

    clear.onclick = function(e){
        resetar();
        limpar();
    }

    igual.onclick = function(e){
        valor2 = resultado.value;
        valor1 = parseFloat(valor1);
        valor2 = parseFloat(valor2);
        switch(operador){
            case "+":
            ultimoresultado = valor1 + valor2;            
            ultimoresultado = ultimoresultado.toString();
            resultado.value = ultimoresultado;
            break;
            case "-":
            ultimoresultado = valor1 - valor2;            
            ultimoresultado = ultimoresultado.toString();
            resultado.value = ultimoresultado;
            break;
            case "/":
            ultimoresultado = valor1 / valor2;            
            ultimoresultado = ultimoresultado.toString();
            resultado.value = ultimoresultado;
            break;
            case "x":
            ultimoresultado = valor1 * valor2;            
            ultimoresultado = ultimoresultado.toString();
            resultado.value = ultimoresultado;
            break;
        }
    }    
    

       
       
   
}

function limpar(){
    resultado.value = "";
}
function resetar(){
    valor1 = 0;
    valor2 = 0;
    operador = "";
}