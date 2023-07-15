const button = document.querySelector('#btn');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const rptpassword = document.querySelector('#rptpassword');
const errormsg = document.querySelector('#error');
const passmsg = document.querySelector('#pass');
const passwordvisibility = document.querySelector('#password_visibility');
const passwordvisibility2 = document.querySelector('#password_visibility2');
const form = document.querySelectorAll('form');
const input = document.querySelectorAll('.input__bar');
var users = [
    {
        id: 1,
        Email: 'test@hotmail.com',
        Password: '123456'
    }
    
]
console.log(input)
//? ERROR 
function Erro (index){
    input[index].style.border = '2px solid #e363636'
}
function RemoveErro (index) {
    input[index].style.border = '2px solid #121316'
}


passwordvisibility.addEventListener("click", function (e){
    if (password.type === "password") {
        passwordvisibility.classList = "bx bx-show test password_visibility";
        password.type = "text";
    } else {
        password.type = "password";
        passwordvisibility.classList = "bx bx-low-vision test password_visibility";
    }
})
passwordvisibility2.addEventListener("click", function (e){
    if (rptpassword.type === "password") {
        passwordvisibility2.classList = "bx bx-show test password_visibility";
        rptpassword.type = "text";
    } else {
        rptpassword.type = "password";
        passwordvisibility2.classList = "bx bx-low-vision test password_visibility";
    }
})

button.addEventListener("click", function (e) {
    const emailvl = email.value;
    const passwordvl = password.value;
    const rptpasswordvl = rptpassword.value;


    if (emailvl === "" || passwordvl === "" || rptpasswordvl === ""){
        errormsg.innerHTML = "Preencha todos os campos."
        setTimeout(() =>{
            errormsg.textContent = '';
        }, 3000);
    }
    else{
        passmsg.innerHTML = "Usuário cadastrado."
        setTimeout(() =>{
            passmsg.textContent = '';
        }, 3000);
        errormsg.classList = "displaynone";
        console.log(`Email: ${emailvl}, Password: ${passwordvl}`) 

        users.push(emailvl)
        users.push(passwordvl)
        console.log(users);
    }

    email.value = '';
    password.value = '';
    rptpassword.value = '';




});

// TODO VALIDAÇÃO //

email.addEventListener("change", function (e) {
    if (email.value != '@'){

    }
})

password.addEventListener("change", function(e) {

    if (password.value === 'password'){
        console.log('ok');
    };
    console.log(e.target.value);
})
rptpassword.addEventListener("change", function(e) {

    if (rptpassword.value === password.value){
        console.log('ok');
    }
    else{
        errormsg.innerHTML = "As senhas não conferem."
        setTimeout(() =>{
        errormsg.textContent = '';
        password.style.border = '2px solid #e63636';
        rptpassword.style.border = '2px solid #e63636';
        }, 3000);
        console.log('senha invalida')
    }
    console.log(e.target.value);
})

// function onChange(){
//     if(rptpassword.value === password.value){
//         rptpassword.setCustomValidity('');
//     }
//     else{
//         rptpassword.setCustomValidity('As senhas não conferem.');
//     }
// }
// password.addEventListener('change', onChange)
// rptpassword.addEventListener('change', onChange)
