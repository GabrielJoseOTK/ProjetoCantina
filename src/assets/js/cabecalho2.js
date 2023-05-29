const botaoMenu3 = document.getElementById('6')
const botaoMenu2 = String(botaoMenu3.textContent)
const menu1 = document.getElementById('1')
const menu2 = document.getElementById('2')
const menu3 = document.getElementById('3')
const menu4 = document.getElementById('4')
const menu5 = document.getElementById('5')
console.log(botaoMenu2==='Biblioteca')
if(botaoMenu2=='perfilfuncionario'){
    menu1.classList.toggle('menu-lateral__link--ativo')
    console.log('funciona2')
}
else if(botaoMenu2=='listaclientes'){
    menu2.classList.toggle('menu-lateral__link--ativo')
    console.log('funciona2')
}
else if(botaoMenu2=='perfilfuncionariomudar'){
    menu3.classList.toggle('menu-lateral__link--ativo')
    console.log('funciona3')
}
else if(botaoMenu2=='cadastrofuncionario'){
    menu4.classList.toggle('menu-lateral__link--ativo')
    console.log('funciona4')

}
else if(botaoMenu2=='registros'){
    menu5.classList.toggle('menu-lateral__link--ativo')
    console.log('funciona3')
}




