var dropdown = document.getElementsByClassName("dropdown-a");
var painel = document.getElementsByClassName("dropdown-painel");
var learnMore = document.getElementsByClassName("learn-more")[0];
var close = document.getElementById("close");
var menuDisplayButton = document.getElementsByClassName("icon-menu")[0];

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
    
learnMore.onmouseover = function() {
    var icon = this.children[0];
    var span = this.children[1];
    span.style.color = "#57bb57";
    icon.style.color = "#57bb57";
    this.style.borderBottom = "1px solid #57bb57";
}

learnMore.onmouseout = function() {
    var icon = this.children[0];
    var span = this.children[1];
    span.style.color = "white";
    icon.style.color = "white";
    this.style.borderBottom = "1px solid white";
}

close.onclick = function() {
    var menu = document.getElementsByClassName("menu")[0];
    menu.style.display = "none";
}

menuDisplayButton.onclick = function() {
    var menu = document.getElementsByClassName("menu")[0];
    menu.style.display = "block";
}