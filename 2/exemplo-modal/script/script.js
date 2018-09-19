const button = document.querySelector(".login__button");
const buttonClosed = document.querySelector(".login-modal__button-close");


button.addEventListener("click", function(esconder){
   esconder.preventDefault();
   document.querySelector(".wrapper").style.display = "none";
   document.querySelector(".login-modal").style.display = "flex";
})

buttonClosed.addEventListener("click", function(mostrar){
    document.querySelector(".wrapper").style.display = "flex";
    document.querySelector(".login-modal").style.display = "none";
})
