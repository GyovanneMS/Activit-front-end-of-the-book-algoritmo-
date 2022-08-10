'use script'

//document.getElementById('calcular').addEventListener('click', diferenca);

function diferenca(){
    const N = parseInt(document.getElementById('valor1').value);
    const resultado = document.getElementById('result');

    let mostrar;

    if(N < 0){
        mostrar = N * -1;
    } else{
        mostrar = N;
    }

        resultado.textContent = `${N} em sua forma positiva é: ${mostrar}`
}

document.getElementById('calculadora').addEventListener('click', diferenca);