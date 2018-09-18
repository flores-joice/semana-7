const botao = document.querySelector(".login__button");
const input = document.getElementById("loginInputEmail");
botao.addEventListener("click", function(evento){
    evento.preventDefault();
    const email = input.value;

    const loginForm = document.querySelector(".login__form");
    loginForm.innerHTML = `Login efetuado com sucesso com o email ${email}!`
    //alert(`Login efetuado com sucesso com o email ${email}!`)
})
