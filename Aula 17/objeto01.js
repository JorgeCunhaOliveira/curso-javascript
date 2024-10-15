let amigo = {nome:'Jorge', 
    peso:85.3, 
    sexo:'M',
    engordar(p=0){
        console.log('engrodou')
        this.peso += p
    }}

    amigo.engordar(4.7)
console.log(amigo.sexo, amigo.nome, amigo.peso)

console.log(`${amigo.nome} tem o peso de ${amigo.peso}kg`)