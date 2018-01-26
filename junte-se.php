<!DOCTYPE html>
<html lang="pt-br">

  <head>
    <title>Junte-se a nós | Recriando raízes</title>
    <?php include "head.php"; ?>
    <link rel="stylesheet" type="text/css" href="css/junte-se.css">
    

  </head>

  <body>
    <?php include "nav.php"; ?>
      
    <!-- Masthead -->
    <header class="masthead text-white text-center">
    </header>
    
    
    <h2>Quer ser nosso parceiro?</h2>
    <form method="post">
        <div class="form-group">
            <label for="nome">Nome</label>
            <input class="form-control" type="text" id="nome">
        </div>

        <div class="form-group">
            <label for="sobrenome">Sobrenome</label>
            <input class="form-control" type="text" id="sobrenome">
        </div>

        <div class="form-group">    
            <label for="email">Email</label>
            <input class="form-control" type="email" id="email">
        </div>

        <div class="form-group">
            <input type="checkbox" id="checkbox">
            <label for="checkbox">Eu	gostaria	de	receber	noticias	dos	projetos	do	Recriando	Raizes</label>
        </div>
        
        <div class="form-group">    
            <input value="Enviar" type="submit" class="btn btn-primary">
        </div>

    </form>


    </body>
</html>
