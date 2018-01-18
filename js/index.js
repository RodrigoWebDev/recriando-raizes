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

