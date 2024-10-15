//alert('Olá! Seja bem vindo!')

    function confirmar(){
        var num = document.getElementById('txtqi')
        var qi = Number(num.value)
        var msg = document.getElementById('msg')
        var img = document.getElementById('foto')
        msg.innerHTML = `<p>Seu QI é ${qi}</p>`
        
       
        if(qi < 70){
            msg2.innerHTML = 'Você é iniciante!'
            imagem.src = "foto-iniciante.png"
            
        }else if(qi < 90){
            msg2.innerHTML = 'Você é intermediário'
            imagem.src = 'foto-intermediario.png'
        }else if(qi < 130){
            msg2.innerHTML = 'Você é avançado'
            imagem.src = 'foto-avancado.png'
        }else{
            msg2.innerHTML = 'Você é gênio'
            imagem.src = 'foto-genio.png'
        }
    }
    function limpar(){
        document.getElementById('txtqi').value = ''
        document.getElementById('msg').innerHTML =''
    }
    
    var cab = document.getElementById('cab')
    cab.addEventListener('mouseenter', entrar)
    cab.addEventListener('mouseleave', sair)
       function entrar(){
        cab.style.background = 'yellow'
        cab.style.color = 'green'
       } 
       function sair(){
        cab.style.background = 'white'
        cab.style.color = 'black'
       }