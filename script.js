const calcular = document.getElementById('calcular');

function calculo () {
 
    const renda = document.getElementById('renda').value;
    const financiamento = document.getElementById('financiamento').value;
    const entrada = document.getElementById('entrada').value;
    const totaljuros = document.getElementById('totaljuros').value;
    const numprest = document.getElementById('numprest').value;
    const resultado = document.getElementById('resultado');

    if (renda !== '' && financiamento !== '' && entrada !== '' && totaljuros !=='' && numprest !== '') {

        const calculojuros = (totaljuros/ 100);
        const principal = financiamento*(1+ calculojuros) ** numprest * (calculojuros) / ((1 + calculojuros) ** numprest - 1);
        var aprovado = (renda * 0.3);
        const receberprincipal = principal.toFixed(2);
        var avaliarprincipal = principal.toFixed();

        if(aprovado > avaliarprincipal){
        resultado.textContent = `
        Realizando um financiamento de R$ ${financiamento} em ${numprest} vezes, com ${totaljuros}% de juros, você pagará R$ ${receberprincipal} mensalmente.`;
        }
        else{
        resultado.textContent = `As prestações ultrapassaram 30% da sua renda mensal por isso não é possível realizar o calculo!`;
        }
    }
    else {
        resultado.textContent = 'Preencha os campos.';
    }

}

calcular.addEventListener('click', calculo);