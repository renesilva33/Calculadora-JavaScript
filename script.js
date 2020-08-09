
function inserir(elemento) {
    var visor = document.getElementById('visor');
    visor.value = visor.value + elemento.innerHTML;
    console.log(visor.value);

}