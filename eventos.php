<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Eventos | Recriando raízes</title>
    <?php include "head.php";?>
    <meta content="IE=edge" http-equiv="X-UA-Compatible">
    <link href="dist/vanillaCalendar.css" rel="stylesheet">
    <link href="dist/eventos.css" rel="stylesheet">
</head>

<body>
    <?php include "nav.php"; ?>
    <div class="container">
        <h1>Nosso eventos</h1>
        <div id="v-cal">
            <div class="vcal-header">
                <button class="vcal-btn" data-calendar-toggle="previous">
					<svg height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				        <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path>
			        </svg>
	            </button>

                <div class="vcal-header__label" data-calendar-label="month">
                    March 2017
                </div>


                <button class="vcal-btn" data-calendar-toggle="next"> <svg height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
				<path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></button>
            </div>
            <div class="vcal-week">
                <span>Seg</span> <span>Tuer</span><span>Quar</span> <span>Qui</span> <span>Sex</span> <span>Sab</span> <span>Dom</span>
            </div>
            <div class="vcal-body" data-calendar-area="month"></div>
        </div>
        <hr>
        <div class="eventos">
            <div>
                <div class="eventos-header">
                    <h2>17/02 - Inicio dos Cursos do Projeto Engrenando no Amanhã</h2>
                </div>
                <div class="eventos-content">
                    <h3>Publico: Jovens de 16 a 24 anos</h3>
                    <p>Cursos Oferecidos: Refrigeração Básica, Eletricidade Predial, Operador(a) de Telemarketing, Assistente Administrativo, Informática para o Trabalho, Implante Capilar e Manicure e Pedicure</p>
                    <h4>Duração: 04 meses</h4>
                    <h4>Formatura: 09/06</h4>
                </div>
            </div>
            <div>
                <div class="eventos-header">
                    <h2>23/02 - Retorno do Programa Defensores da Infância</h2>
                </div>
                <div class="eventos-content">
                    <h3>Publico: Crianças e Adolescentes de 6 à 14 anos</h3>
                </div>
            </div>
        </div>

    </div>
    <?php include "footer.php";?>
    <script src="dist/vanillaCalendar.js" type="text/javascript"></script>
    <script>
        window.addEventListener('load', function() {
            vanillaCalendar.init();
        })

    </script>
    <?php include "scripts.php";?>
    <script src="dist/calendar.js" type="text/javascript"></script>
</body>

</html>
