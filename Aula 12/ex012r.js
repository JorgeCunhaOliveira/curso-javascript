var planos = 6
console.log(`Seu plano é o ${planos}`)
    if(planos == 1){
        console.log('Básico - 2x por semana')
    }else{
        if(planos == 2){
            console.log('Intermediário - 3 x por semana')
        }else if(planos == 3){
            console.log('Avançado - 4x por semana')
        }else if(planos == 4){
            console.log('Premium - Todos os dias')
        }else if(planos == 5){
            console.log('Plano família')
        }else if(planos == 6){
            console.log('Plano empresarial')
        }
        console.log('Venha treinar conosco')
    }