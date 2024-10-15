function gerar(){
    var num = document.getElementById('txtn')
     var are = document.getElementById('are')
     var n = Number(num.value)

    if(num.value.length == 0){ //caixa vázia informa o alerta
        alert('Digite um número')
    }
    are.innerHTML = ''// resultado sobrepoe o outro
  
        for(var s = 1; s <= 10; s++){
        //var r = s * n
        are.innerHTML += ` ${s} x ${n} = ${s*n} \n`
        } 
    
}   

