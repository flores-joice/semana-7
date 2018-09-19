const menuBotao = document.querySelector(".sidebar-menu__button");
const sidebar = document.querySelector(".sidebar-menu");

menuBotao.addEventListener("click", function(esconder){
    esconder.preventDefault();

    if(sidebar.style.left === "-430px"){
        sidebar.style.left = "0px";
    } else {
        sidebar.style.left = "-430px";
    }
});