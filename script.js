
function inserir(elemento) {
    var visor = document.getElementById('visor');
    visor.value = visor.value + elemento.innerHTML;
    
}

function igual(){

    var valorDigitado = document.getElementById('visor').value;
    
    if (!valorDigitado ) {
        document.getElementById('visor').value = "";

    } else {
        document.getElementById('visor').value = eval(valorDigitado);
    }
}

function limpar(){
    document.getElementById('visor').value = "";
}

function apagarUltimo(){
    var valorDigitado = document.getElementById('visor').value;
    document.getElementById('visor').value = valorDigitado.slice(0, -1);
}