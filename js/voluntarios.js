let voluntario = document.getElementsByClassName("voluntario");
let menuLeft = document.getElementsByClassName("menu-left");
let closeLeftMenu = document.getElementsByClassName("close-left-menu")[0];


for (i = 0; i < voluntario.length; i++) {
    voluntario[i].onmouseover = function() {
        var divRight = this.children[0].children[1];
        var h3 = divRight.children[0];
        divRight.style.background = "#2de558";
        divRight.style.color = "white";
        h3.style.color = "white";
    }
    voluntario[i].onmouseout = function() {
        var divRight = this.children[0].children[1];
        var h3 = divRight.children[0];
        divRight.style.background = "white";
        divRight.style.color = "inherit";
        h3.style.color = "#2de558";
    }
    
    voluntario[i].onclick = function() {
        let menuLeft = this.parentElement.parentElement.parentElement.previousElementSibling.previousElementSibling;
        menuLeft.style.display = "block";
    }
}

closeLeftMenu.onclick = function() {
    this.parentElement.parentElement.style.display = "none";
    console.log("click");
}