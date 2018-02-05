//Abre o menu lateral esquerdo quando clicar em algum card de perfil
let voluntario = document.getElementsByClassName("voluntario");
let diretor = document.getElementsByClassName("diretor");
let closeLeftMenu = document.getElementsByClassName("close-left-menu")[0];


for (i = 0; i < voluntario.length; i++) {
    voluntario[i].onmouseover = function () {
        var divRight = this.children[0].children[1];
        var h3 = divRight.children[0];
        divRight.style.background = "#2ecc71";
        divRight.style.color = "white";
        h3.style.color = "white";
    }
    voluntario[i].onmouseout = function () {
        var divRight = this.children[0].children[1];
        var h3 = divRight.children[0];
        divRight.style.background = "white";
        divRight.style.color = "inherit";
        h3.style.color = "inherit";
    }

    voluntario[i].onclick = function () {
        let menuLeft = this.parentElement.parentElement.previousElementSibling;
        let imageClick = this.children[0].children[0].children[0].src;
        let image = menuLeft.children[1].children[0].children[0];
        let name = menuLeft.children[1].children[1].children[0];
        let nameClick = this.children[0].children[1].children[0].innerHTML;
        let functionName = menuLeft.children[1].children[1].children[1];
        let functionClick = this.children[0].children[1].children[1].innerHTML;;
        menuLeft.style.display = "block";
        image.src = imageClick;
        name.innerHTML = nameClick;
        functionName.innerHTML = functionClick;
        console.log("click");
    }
}

for (i = 0; i < diretor.length; i++) {
    diretor[i].onmouseover = function () {
        var divRight = this.children[0].children[1];
        var h3 = divRight.children[0];
        divRight.style.background = "#2ecc71";
        divRight.style.color = "white";
        h3.style.color = "white";
    }
    diretor[i].onmouseout = function () {
        var divRight = this.children[0].children[1];
        var h3 = divRight.children[0];
        divRight.style.background = "white";
        divRight.style.color = "inherit";
        h3.style.color = "inherit";
    }

    diretor[i].onclick = function () {
        let menuLeft = this.parentElement.parentElement.previousElementSibling.previousElementSibling;
        let imageClick = this.children[0].children[0].children[0].src;
        let image = menuLeft.children[1].children[0].children[0];
        let name = menuLeft.children[1].children[1].children[0];
        let nameClick = this.children[0].children[1].children[0].innerHTML;
        let functionName = menuLeft.children[1].children[1].children[1];
        let functionClick = this.children[0].children[1].children[1].innerHTML;;
        menuLeft.style.display = "block";
        image.src = imageClick;
        name.innerHTML = nameClick;
        functionName.innerHTML = functionClick;
        console.log("click");
    }
}

closeLeftMenu.onclick = function () {
    this.parentElement.parentElement.style.display = "none";
    console.log("click");
}

//Troca a div ao clicar na TAB

let tab = document.getElementsByClassName("tab");
let voluntarios1 = document.getElementsByClassName("voluntarios")[0];
let voluntarios2 = document.getElementsByClassName("voluntarios")[1];
voluntarios2.style.display = "none";



tab[0].onclick = function () {
    tab[0].classList.remove("active");
    tab[1].classList.remove("active");
    this.classList.add("active");
    voluntarios1.style.display = "block";
    voluntarios2.style.display = "none";
}

tab[1].onclick = function () {
    tab[0].classList.remove("active");
    tab[1].classList.remove("active");
    this.classList.add("active");
    voluntarios1.style.display = "none";
    voluntarios2.style.display = "block";

}
