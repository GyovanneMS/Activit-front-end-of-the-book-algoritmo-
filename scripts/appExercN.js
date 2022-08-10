'use script'

//document.getElementById('calcular').addEventListener('click', diferenca);

function diferenca(){
    const A = parseInt(document.getElementById('valor1').value);
    const B = parseInt(document.getElementById('valor2').value);
    const C = parseInt(document.getElementById('valor3').value);
    const resultado = document.getElementById('result');
    let conta;

    conta = A + B + C;
    
    if(conta >= 100){
        resultado.textContent = `O resultado da conta é: ${conta}`;
    } else if( conta < 100){
        resultado.textContent = `Cri cri....`;
    }
}

document.getElementById('calculadora').addEventListener('click', diferenca);