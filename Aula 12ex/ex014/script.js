function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('msg2')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >=0 && hora < 12){
        msg2.innerHTML = 'Bom Dia!'
        img.src ="manha.png"
        document.body.style.background = 'gold'
    }else if(hora >= 12 && hora < 18){
        msg2.innerHTML = 'Boa tarde!'
        img.src = 'tarde.png'
        document.body.style.background = 'orange'
    } else{
        msg2.innerHTML = 'Boa noite!'
        img.src = 'noite.png'
        document.body.style.background = 'blue'
    }
    
}

