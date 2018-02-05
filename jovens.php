<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Jovens | Recriando raízes</title>
    <?php include "head.php"; ?>
    <link rel="stylesheet" type="text/css" href="css/infantil.css">
    <link rel="stylesheet" type="text/css" href="css/jovens.css">
</head>

<body>
    <?php include "nav.php"; ?>

    <!-- Masthead -->
    <header class="masthead text-white text-center">
        <div class="container">
            <h1 class="mb-5">Preparando jovens</h1>
            <h3>para liderar um novo amanhã para o Rio</h3>
        </div>
    </header>

    <!-- Conteudo central -->
    <section class="showcase">
        <div class="container">
            <div class="row">

                <div class="col-md-6 my-auto showcase-text1">
                    <p class="adjust" class="lead mb-0"><span>Jovens gerando renda e</span> superando a vulnerabilidade social</p>
                </div>

                <div class="col-md-6 my-auto showcase-text">
                    <h2>Visão do Programa </h2>
                    <p class="lead mb-0">O programa <strong>Engrenando no Amanhã</strong>,prepara jovens entre 15 à 24 anos para o mercado de trabalho,oferecendo cursos gratuitos como Refrigeração, Eletricidade Predial, Informática para o Trabalho, Implante Capilar, Manicure e Pedicure, Design de Sobrancelha, Operador de Telemarketing, dentre outros.</p>
                </div>
            </div>
            <hr>
        </div>
    </section>

    <section class="nosso-programa">
        <div class="container">
            <h2><span>Cursos</span> oferecidos</h2>
            <div class="row">
                <div class="col-md-6">
                    <h3>Refrigeração básica</h3>
                    <img src="img/jovens/refirgeracao.png" alt="refrigeração básica">
                </div>

                <div class="col-md-6">
                    <h3>Informática</h3>
                    <img src="img/jovens/informatica.jpg" alt="Informática">
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <h3>Tranças e implantes</h3>
                    <img src="img/jovens/trancas.jpg" alt="Tranças e implantes">
                </div>

                <div class="col-md-6">
                    <h3>Barbeiro</h3>
                    <img src="img/jovens/barbeiro.jpg" alt="Barbeiro">
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <h3>Manicure e pedicure</h3>
                    <img src="img/jovens/manicure.jpg" alt="Manicure e pedicure">
                </div>

                <div class="col-md-6">
                    <h3>Eletricista predial</h3>
                    <img src="img/jovens/eletricista.jpg" alt="Eletricista predial">
                </div>
            </div>

            <div class="row">
                <div class="col-md-6">
                    <h3>Design de sobrancelha</h3>
                    <img src="img/jovens/sobrancelha.jpg" alt="Design de sobrancelha">
                </div>

                <div class="col-md-6">
                    <h3>Operador de telemarketing</h3>
                    <img src="img/jovens/telemarketing.jpg" alt="Operador de telemarketing">
                </div>
            </div>
        </div>
    </section>

    <!--SLIDER-->
    <div class="container">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                    <img class="d-block img-fluid" src="img/jovens/slide1.jpg" alt="First slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="img/jovens/slide2.jpg" alt="Second slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="img/jovens/slide3.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="img/jovens/slide4.jpg" alt="Third slide">
                </div>
                <div class="carousel-item">
                    <img class="d-block img-fluid" src="img/jovens/slide5.jpg" alt="Third slide">
                </div>
            </div>
        </div>
    </div>

    <?php include "footer.php"; ?>

    <?php include "scripts.php"; ?>
    <script src="js/slider.js"></script>
</body>

</html>
