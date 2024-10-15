//criar o Fatorial de um número
//Ex: 5! = 5 x 4 x 3 x 2 x 1

function Fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}

let res = Fatorial(7)
console.log(res)

console.log(Fatorial(8))

console.log('______________________________________')

