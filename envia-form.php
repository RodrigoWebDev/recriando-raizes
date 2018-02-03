<?php
    $corpo = "
    Nome:" . $_POST["nome"]."
    Sobrenome:" . $_POST["sobrenome"]."
    Email:" . $_POST["email"];
    mail("rodrigo.queiroz.chagas@gmail.com", "Assunto",$corpo, "From: $email");
    echo "DONE!";
?>