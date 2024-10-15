let valor = [10,6,8,3,2,5]
console.log(`${valor}`)
console.log(`O valor é ${valor[2]}`)

valor[6] = 1 //adicionei um valor
console.log(`${valor}`)

valor.push(4) //adicionei um valor
console.log(`${valor}`)

valor.sort() //organizei os valores
console.log(`${valor}`)

console.log('______________________________')

for(let pos = 0; pos < valor.length; pos++){ //FOR padrão
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}

console.log('_________________________________')

for(let pos in valor){ //FOR simplificado
    console.log(`A posição ${pos} tem o valor ${valor[pos]}`)
}