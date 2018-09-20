const button = document.getElementById("arrowTop");

button.addEventListener("click", function(){
    console.log("ok")
    window.scrollTo(pageXOffset, 0)
})

window.addEventListener("scroll", function(){
    console.log(this.pageYOffset)
    if(this.pageYOffset > 450){
        button.hidden = false;
    } else {
        button.hidden = true;
    }
    
})

//ou
/* 
window.addEventListener("scroll", function(){
    console.log(this.pageYOffset)
    if(this.pageYOffset > 450){
        button.hidden = false;
        return false
    } 
    button.hidden = true; 
*/