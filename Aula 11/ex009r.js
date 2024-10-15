var relacao = 'casado'
console.log(`Você é ${relacao}`)
    if(relacao === 'solteiro'){
        console.log('Aproveite a vida, mas com juízo')
    }else{
        console.log('Seja responsável')
    }
console.log('Viva um dia de cada vez!')

var religiao = 'catolico'
console.log(`Você é ${religiao}`)
    if(religiao === 'catolico'){
        console.log('Igreja de Cristo')
    }else{
        console.log('Busque a conversão')
    }
console.log('Jesus é o caminho, a verdade e a vida!')

console.log('Escolha entre preto ou branco')
var cor = 'preto'
console.log(`Você escolheu a cor ${cor}`)
    if(cor === 'branco'){
        console.log('Você acaba de ganhar uma viagem para Búzios')
    } else if(cor === 'preto'){
        console.log('Você acaba de ganhar um carro')
    }
console.log('Próximo teste')

console.log('Qual palavra você escolhe... praia ou campo?')
var p = 'praia' //sempre entre aspas
console.log(`Você escolheu a palavra ${p}, qual será seu prémio?`)
    if(p == 'praia'){//sempre usar aspas na condição
        console.log('Você ganhou um Iphone...Parabéns!!!')
    }else if(p == 'campo'){//sempre usar aspas na condição
        console.log('Você ganhou um notebook...Parabéns!!!')
    }
console.log('Fim do teste')