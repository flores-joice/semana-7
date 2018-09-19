if(radioItem.value === "Junior"){
    console.log("0 - 2 anos de experiencia;")
} else if(radioItem.value === "Pleno"){
    console.log("3 - 5 anos de experienca;")
} else if(radioItem.value === "Senior"){
    console.log("5+ de experiencia")
}

document.querySelector("body").style.backgroundColor = "#fff";
const form = this.closest("form");
form.submit();

inputArea.addEventListener("change", function(){
    if(inputArea.selectedindex === 0){
        document.querySelector("body").style.backgroundColor = "#e3f2fd";
    } else if(inputArea.selectedindex === 1){
        document.querySelector("body").style.backgroundColor = "blue";
    } else if(inputArea.selectedindex === 2){
        document.querySelector("body").style.backgroundColor = "green";
    } else if(inputArea.selectedindex === 3){
        document.querySelector("body").style.backgroundColor = "pink";
    }
})