var dropdown = document.getElementsByClassName("dropdown-a");
var painel = document.getElementsByClassName("dropdown-painel");

for (i=0; i < dropdown.length; i++){
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
    
