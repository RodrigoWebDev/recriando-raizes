//Menu dropdown da navegação
var painel = document.getElementsByClassName("dropdown-painel");
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
    painel[i].onmouseover = function() {
        this.style.display = "block";
    }
    painel[i].onmouseout = function() {
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

var painelButton = document.getElementsByClassName("painel-button");
var painel = document.getElementsByClassName("painel-inner");


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

