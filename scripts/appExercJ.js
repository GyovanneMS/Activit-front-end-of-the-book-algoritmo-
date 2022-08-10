'use script'

//document.getElementById('calcular').addEventListener('click', diferenca);

function diferenca(){
    const A = parseInt(document.getElementById('valor1').value);
    const resultado = document.getElementById('result');
    let mostrar;

    if(A%2 == 0){
        mostrar = 'par'
    } else if (A%2 != 0){
        mostrar = 'impar'
    }

    resultado.textContent = `${A} é um número ${mostrar}`;
}

document.getElementById('calculadora').addEventListener('click', diferenca);