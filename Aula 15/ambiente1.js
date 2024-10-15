let val = [3,4,5,7,8,9] //array - vetor
console.log(`Os valores são ${val}`) //mostra os valores

for(let pos = 0; pos < val.length; pos++){ //forma padrão do FOR
    console.log(`Na posição ${pos}  o valor é ${val[pos]}`)
}

console.log('----------------------------------')

var num = [5,2,9,4,1,7,6]

console.log(`Os meus valores são ${num}`)

num.sort()

for(var pos in num){ //forma simplificada de usar o FOR
    console.log(`Na posição ${pos} tem o valor ${num[pos]}`)
}

console.log('-------------------------------------')

let res = val.indexOf(2)//buscar a posição do valor fornecido

if(res == -1){
    console.log('Este valor não foi encontrado')
}else{
    console.log(`A posição do número é ${res}`)
}

