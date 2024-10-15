function gerar(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('tab')
    var n = Number(num.value)
    
    if(num.value.length == 0){
        alert('Digite um número')
        tab.appendChild()
        
    }
        tab.innerHTML = '' 
        for(var s = 1; s <= 10; s++){
           
           var item = document.createElement('option') 
           item.text = `${s} x ${n} = ${s*n}`
           item.value = `tab${s}`
           tab.appendChild(item)
        }
}