    let res = document.getElementById('res')
    let num = document.getElementById('txtn')
    let caixa = document.getElementById('camp')
    let grupo = []

    function isNum(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        }else{
            return false
        }
    }
    function inList(n,l){
        if(l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
    }

   
function add(){
    if(isNum(num.value) && !inList(num.value, grupo)) {
        grupo.push(Number(num.value))//colocando um valor dentro do Array
        let caixa = document.createElement('option')
        caixa.text = `O valor ${num.value} foi adicionado`
        camp.appendChild(caixa)
        res.innerHTML = ''
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''//apaga o valor dentro da caixa de entrada
    num.focus()//o cursor volta a piscar
     
   
}

function fin(){
    if(grupo.length == 0){//casos o grupo esteja vázio(comprimento = zero)
        alert('Adicione valores a lista')
    }else{
        let total = grupo.length //comprimento do grupo(quantos elementos há no grupo)
        let maior = Math.max(...grupo)//maior valor dentro do grupo
        let menor = Math.min(...grupo)//menor valor dentro do grupo
        //let soma = grupo.reduce((acumulador,valorAtual)=> acumulador + valorAtual, 0)//somar o valores dentro do grupo
        let soma = 0 //indicia com zero
        let media = soma / total//valor médio dos valores

        for(let pos in grupo){//soma os valores dentro do grupo(forma mais fácil)
            soma += grupo[pos]
        }
        
        res.innerHTML = ''//apaga o antigo resultado para mostrar o novo
        res.innerHTML += `<p>Ao todo temos ${total} números cadastras<p/>`
        res.innerHTML += `<p>O maior valor informado é ${maior}<p/> `
        res.innerHTML += `<p>O menor valor informado é ${menor}<p/>`
        res.innerHTML += `<p>Somando todos os valor temos ${soma}<p/>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}<p/>`
   }    
}
