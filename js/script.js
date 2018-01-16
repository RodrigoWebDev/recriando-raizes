//Menu dropdown da navegação
var navPainel = document.getElementsByClassName("dropdown-painel");
var dropdown = document.getElementsByClassName("dropdown-a");

for (i = 0; i < dropdown.length; i++){
    dropdown[i].onmouseover = function() {
        var drop = this.nextElementSibling;
        drop.style.display = "block";
    }
    dropdown[i].onmouseout = function() {
        var drop = this.nextElementSibling;
        drop.style.display = "none";
    }
    navPainel[i].onmouseover = function() {
        this.style.display = "block";
    }
    navPainel[i].onmouseout = function() {
        this.style.display = "none";
    }
}


//Botao de fechar o menu lateral
var close = document.getElementById("close");
var menuDisplayButton = document.getElementsByClassName("icon-menu")[0];

close.onclick = function() {
    var menu = document.getElementsByClassName("menu")[0];
    menu.style.display = "none";
}

menuDisplayButton.onclick = function() {
    var menu = document.getElementsByClassName("menu")[0];
    menu.style.display = "block";
}

//Menu mobile
let mobileButton = document.getElementsByClassName("hide-menu")[0];
let mobileButtonClick = 0;
let menuMobile = document.getElementsByClassName("nav-mobile")[0];

mobileButton.onclick = function() {
    if (mobileButtonClick == 0) {
        menuMobile.style.display = "block";
        mobileButtonClick = 1;
    }
    else if (mobileButtonClick == 1){
        menuMobile.style.display = "none";
        mobileButtonClick = 0;
    }
}

//Painel central

let painelButton = document.getElementsByClassName("painel-button");
let painel = document.getElementsByClassName("painel-inner");


window.onload = function() {
    painel[0].style.display = "block";
    painelButton[0].classList.add("painel-button-active");
    
}

painelButton[0].onclick = function() {
    painelButton[0].classList.add("painel-button-active");
    painelButton[1].classList.remove("painel-button-active");
    painelButton[2].classList.remove("painel-button-active");
    painel[0].style.display = "block";
    painel[1].style.display = "none";
    painel[2].style.display = "none";
    
    
}

painelButton[1].onclick = function() {
    painelButton[0].classList.remove("painel-button-active");
    painelButton[1].classList.add("painel-button-active");
    painelButton[2].classList.remove("painel-button-active");
    painel[0].style.display = "none";
    painel[1].style.display = "block";
    painel[2].style.display = "none";
}

painelButton[2].onclick = function() {
    painelButton[0].classList.remove("painel-button-active");
    painelButton[1].classList.remove("painel-button-active");
    painelButton[2].classList.add("painel-button-active");
    painel[0].style.display = "none";
    painel[1].style.display = "none";
    painel[2].style.display = "block";
}

