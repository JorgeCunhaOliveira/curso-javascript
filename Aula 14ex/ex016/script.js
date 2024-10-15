

function contar(){
    
    var res = document.getElementById('res')
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var pas = document.getElementById('txtp')
    var r = Number(ini.value)
    var f = Number(fim.value)
    var p = Number(pas.value)
    
    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        res.innerHTML ='Impossível contar!'
        //alert('[ERRO] Faltam dados!')
    }else {
        if( p <= 0){
            alert('Passo inválido! Considerando passo = 1 ')
            p = 1
        }
        res.innerHTML = '<p>Contando:</p>'
        if(r < f){
       for( r; r <= f; r += p){
        res.innerHTML += `\u{1F449} ${r}`
       }
        }else if(r > f){
        for( r; r >= f; r -= p)
            res.innerHTML += `\u{1F449} ${r}`
        }
         res.innerHTML += ` \u{1F3C1}`
    }
    
}

function limpar(){
    document.getElementById('res').innerHTML = 'Preparando a contagem...'
    document.getElementById('txti').value = ''
    document.getElementById('txtf').value = ''
    document.getElementById('txtp').value = ''
}