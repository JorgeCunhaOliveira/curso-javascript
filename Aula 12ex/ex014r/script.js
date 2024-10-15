function carregar(){
    var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML =`<p>Agora são ${hora} horas</p>`
    if(hora <12){
        msg.innerHTML += 'Bom dia!'
        img.src = 'foto-bom-dia.png'
        document.body.style.background = 'yellow'
    }else if(hora <18){
        msg.innerHTML += 'Boa tarde!'
        img.src = 'foto-boa-tarde.png'
        document.body.style.background = 'orange'
    }else if(hora <24){
        msg.innerHTML += 'Boa noite!'
        img.src = 'foto-boa-noite.png'
        document.body.style.background = 'gray'
        }else{
        msg.innerHTML = 'Hora inválida'
    }
}
