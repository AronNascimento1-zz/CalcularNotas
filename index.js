const calcular = document.getElementById('calcular');


function notaFinal(){
let nota1 = document.getElementById('nota1').value;
let nota2 = document.getElementById('nota2').value;
let nota3 = document.getElementById('nota3').value;
let nota4 = document.getElementById('nota4').value;
let resultado = document.getElementById('resultado');

let calcularNotas = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4;
let boletim = "";

if(calcularNotas >= 7){
    boletim = "Parabens voce foi Aprovado !!!"
}else{

    boletim = " Voce foi Reprovado"
}


resultado.textContent = `Sua Nota Final é ${calcularNotas.toFixed(1)} ${boletim}`;
}
calcular.addEventListener('click', notaFinal);



