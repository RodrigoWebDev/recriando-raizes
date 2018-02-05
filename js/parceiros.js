let dot = document.getElementsByClassName("dot");
let parceiro1 = document.getElementsByClassName("parceiros1")[0];
let parceiro2 = document.getElementsByClassName("parceiros2")[0];
let parceiro3 = document.getElementsByClassName("parceiros3")[0];
let parceiro4 = document.getElementsByClassName("parceiros4")[0];
parceiro2.style.display = "none";
parceiro3.style.display = "none";
parceiro4.style.display = "none";

dot[0].onclick = function () {
    dot[1].classList.remove("active");
    dot[2].classList.remove("active");
    dot[3].classList.remove("active");
    this.classList.add("active");
    parceiro1.style.display = "flex";
    parceiro2.style.display = "none";
    parceiro3.style.display = "none";
    parceiro4.style.display = "none";

}

dot[1].onclick = function () {
    dot[0].classList.remove("active");
    dot[2].classList.remove("active");
    dot[3].classList.remove("active");
    this.classList.add("active");
    parceiro1.style.display = "none";
    parceiro2.style.display = "flex";
    parceiro3.style.display = "none";
    parceiro4.style.display = "none";

}

dot[2].onclick = function () {
    dot[1].classList.remove("active");
    dot[0].classList.remove("active");
    dot[3].classList.remove("active");
    this.classList.add("active");
    parceiro1.style.display = "none";
    parceiro2.style.display = "none";
    parceiro3.style.display = "flex";
    parceiro4.style.display = "none";

}

dot[3].onclick = function () {
    dot[1].classList.remove("active");
    dot[2].classList.remove("active");
    dot[0].classList.remove("active");
    this.classList.add("active");
    parceiro1.style.display = "none";
    parceiro2.style.display = "none";
    parceiro3.style.display = "none";
    parceiro4.style.display = "flex";

}
