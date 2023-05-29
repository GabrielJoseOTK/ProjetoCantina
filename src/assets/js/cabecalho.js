const botaoMenu3 = document.getElementById('2')
const botaoMenu2 = String(botaoMenu3.textContent)
const menu2 = document.getElementById('1')
const menu3 = document.getElementById('4')
const menu4 = document.getElementById('3')
console.log(botaoMenu2==='Biblioteca')
if(botaoMenu2=='Perfil'){
    menu2.classList.toggle('menu-lateral__link--ativo')
    console.log('funciona2')
}
else if(botaoMenu2=='Edição'){
    menu2.classList.toggle('menu-lateral__link--ativo')
    console.log('funciona2')
}
else if(botaoMenu2=='Biblioteca Pessoal'){
    menu3.classList.toggle('menu-lateral__link--ativo')
    console.log('funciona3')
}
else if(botaoMenu2=='Biblioteca'){
    menu4.classList.toggle('menu-lateral__link--ativo')
    console.log('funciona4')
}


