
function inserir(elemento) {
    var visor = document.getElementById('visor');
    visor.value = visor.value + elemento.innerHTML;
    console.log(visor.value);
}

function igual(){
    var valorDigitado = document.getElementById('visor').value;
    document.getElementById('visor').value = eval(valorDigitado);
}