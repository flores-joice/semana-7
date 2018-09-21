const menuBotao = document.querySelector(".sidebar-menu__button");
const sidebar = document.querySelector(".sidebar-menu");

menuBotao.addEventListener("click", function(esconder){
    esconder.preventDefault();

    console.log(sidebar.classList)

    //função exclui uma classe e cria outra pata abrir e fechar o menu
    if(sidebar.classList.contains("sidebar-menu__visible")){
        sidebar.classList.remove("sidebar-menu__visible");
        sidebar.classList.add("sidebar-menu__hidden");
    } else {
        sidebar.classList.remove("sidebar-menu__hidden");
        sidebar.classList.add("sidebar-menu__visible");
    }
    
});