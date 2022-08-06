let valorDigitado = document.getElementById("valorDigitado");
function codificar(){
   document.getElementById("resultado").value = btoa(valorDigitado.value);
}
function descodificar(){
    document.getElementById("resultado").value = atob(valorDigitado.value);
 }
function copiar(){
    document.getElementById("resultado").select();
    document.execCommand("copy");
}