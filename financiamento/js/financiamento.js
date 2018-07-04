let $montante = document.getElementById("input-montante");
let $taxa = document.getElementById("input-taxa");
let $prazo = document.getElementById("input-prazo");
let $table = document.querySelector("tbody");
let $calcular = document.getElementById("btn-calcular");
let validaTaxa = /^\d{1,3}/;
let validaMontante = /^\d+[.,]*\d{1,2}/;
let validaPrazo = /^\d{1,3}/;



function atualizaTable(parcelaAtual, amortizacao, saldoDevedor, juros){
    let tr = document.createElement("tr");
    tr.classList.add('table-tr');
    let tdArray = [parcelaAtual, amortizacao, saldoDevedor, juros];
    tdArray.forEach((element)=> {
        let td = document.createElement('td');
        let textElement = document.createTextNode(element);
        td.appendChild(textElement);
        tr.appendChild(td);
    });
    console.log($table);
    console.log(tr);
    
    $table.appendChild(tr);
    
}
function validaValor(validador, validado){
    let valida = validador.exec(validado);
    console.log(valida);
    if(valida){
        return valida[0];
    }
     return false
}
function limpar(){
    $tabletr = $table.getElementsByClassName("table-tr");
   
       
}

$calcular.onclick = function(event){
    
    event.preventDefault();
    
    
    let montante = validaValor(validaMontante, $montante.value);
    let taxa = (validaValor(validaTaxa, $taxa.value) / 100);
    let prazo = validaValor(validaPrazo, $prazo.value);
    let amortizacao = montante / prazo;
    console.log(montante, taxa, prazo, amortizacao);
    
    let valores = [];
    for(let i = 0; i < prazo; i++){
       let juros = montante * taxa;
       let valorParcela = Number(juros) + Number(amortizacao);
       valorParcela = validaValor(validaMontante, valorParcela);
       amortizacao = validaValor(validaMontante, amortizacao);
       montante = validaValor(validaMontante, montante);
       juros = validaValor(validaMontante, juros);
       atualizaTable(valorParcela, amortizacao, montante, juros);
       montante = montante - amortizacao;
    }
}
