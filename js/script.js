//Menu dropdown da navegação
$('.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(100);
});


//Abrir e fechar menu lateral direito
var close = document.getElementById("close");
var menuDisplayButton = document.getElementById("navbar-toggler");

close.onclick = function() {
    var menu = document.getElementsByClassName("menu")[0];
    menu.style.display = "none";
}

menuDisplayButton.onclick = function() {
    var menu = document.getElementsByClassName("menu")[0];
    menu.style.display = "block";
}
