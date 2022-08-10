'use script'

//document.getElementById('calcular').addEventListener('click', diferenca);

function diferenca(){
    const A = parseInt(document.getElementById('valor1').value);
    const B = parseInt(document.getElementById('valor2').value);
    const resultado = document.getElementById('result');

    let mostrar;

        if(A > B){
            mostrar = A - B;
        } if(B > A){
            mostrar = B - A;
        } if(A == B || B == A){
            mostrar = '0, pois ambos são iguais'
        } 

        resultado.textContent = `A diferença entre os números é: ${mostrar}`
}

document.getElementById('calculadora').addEventListener('click', diferenca);