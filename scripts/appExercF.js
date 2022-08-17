'use script'

//document.getElementById('calcular').addEventListener('click', diferenca);

function diferenca(){
    const A = parseInt(document.getElementById('valor1').value);
    const B = parseInt(document.getElementById('valor2').value);
    const C = parseInt(document.getElementById('valor3').value);
    const resultado = document.getElementById('result');
    let mostrar = [A, B, C];
    mostrar.sort((a, b) => a - b);
    const form = document.getElementById('tarefa');
    

  //  if(form.reportValidity()){
    //    ordenar.sort((a, b) => a - b)
        resultado.textContent = `Os números em ordem crescente é assim:\n ${mostrar}`
  //  }
}

document.getElementById('calculadora').addEventListener('click', diferenca);