let navbar = document.querySelector("nav");

window.onscroll = function(){
    if(window.scrollY >= navbar.offsetHeight ){
        navbar.classList.remove("bg-black");
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
        navbar.classList.add("bg-black")
    }
}


