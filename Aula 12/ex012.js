var hora = 19
console.log(`Agora são ${hora} horas`)
if(hora <6){
    console.log('Boa madrugada!')
}else{
    if(hora <12){
        console.log('Bom dia!')
}else if(hora <18){
    console.log('Boa Tarde!')
}else {
    console.log('Boa Noite!')
}
}