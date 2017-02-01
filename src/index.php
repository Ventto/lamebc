<!DOCTYPE html>
<html lang="fr-FR">
    <head><?php include_once('views/head.html'); ?></head>
    <body>
        <!-- Header -->
        <?php include_once("views/header.html"); ?>
        <!-- Content -->
        <div class="body-container-wrapper">
            <!-- Banner -->
            <div class="banner-wrapper row-fluid">
                <div class="black-mask fluid">
                    <div class="content">
                        <section>
                            <!-- FIXME -->
                            <img src="" class="logo"></img>
                            <div>
                                <h1 class="t-white">Title</h1>
                            </div>
                            <div class="row-fluid">
                                <div class="table">
                                    <div class="cell">
                                        <a class="geo" href="#footer">
                                            <div class="ic-map-white-36px option-icon svg-icon"></div>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a class="tel" href="#footer">
                                            <div class="ic-phone-white-36px option-icon svg-icon"></div>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a class="email" href="#footer">
                                            <div class="ic-email-white-36px option-icon  svg-icon"></div>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a class="hours" href="#hours">
                                            <div class="ic-time-white-36px option-icon svg-icon"></div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div class="arrow-up"></div>
                </div>
            </div>

            <!-- Vehicule Types -->
            <div id="vehicules" class="permis-choice-wrapper row-fluid">
                <div class="row-fluid">
                    <div class="content">
                        <section>
                            <div><h1>Permis</h1></div>
                            <div><h2>Que voulez vous passer ?</h2></div>
                            <div class="row-fluid">
                                <div class="option-icons">
                                    <div class="cell">
                                        <a href="#code">
                                            <div class="option-icon-wrap">
                                                <div class="option-icon">
                                                    <div class="ic-code-custom-64px icon-64"></div>
                                                </div>
                                            </div>
                                            <p>CODE SEUL</p>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a class="type-auto" href="#permis-auto">
                                            <div class="option-icon-wrap">
                                                <div class="option-icon">
                                                    <div class="ic-car-custom-64px icon-64"></div>
                                                </div>
                                            </div>
                                            <p>PERMIS AUTO</p>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a class="type-moto" href="#permis-moto">
                                            <div class="option-icon-wrap">
                                                <div class="option-icon">
                                                    <div class="ic-twowheels-custom-64px icon-64"></div>
                                                </div>
                                            </div>
                                            <p>PERMIS 2-ROUES</p>
                                        </a>
                                    </div>
                                    <div class="cell">
                                        <a class="type-auto" href="#permis-auto">
                                            <div class="option-icon-wrap">
                                                <div class="option-icon">
                                                    <div class="ic-handicap-custom-64px icon-64"></div>
                                                </div>
                                            </div>
                                            <p>HANDICAPE</p>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <!-- Services + -->
            <div class="test2-wrap mobile-optimiz">
                <div class="parallax parallax-bg">
                    <div class="row-fluid">
                        <div class="parallax-wrap-bg">
                            <div class="content">
                                <section>
                                    <h1>Nos services</h1>
                                    <div class="title-separator"></div>
                                    <div class="row-fluid">
                                        <ul>
                                            <li>EXCELLENT MATERIEL</li>
                                            <li>EXAMEN BLANC ET RESULTATS, 23 EXAMENS BLANCS/SEMAINE</li>
                                            <li>EXCELLENT SERVICE CODE SUR INTERNET</li>
                                            <li>BOUTIQUES</li>
                                            <li>PHOTO MATERIELS</li>
                                        </ul>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Permis Auto -->
            <?php include_once("views/permis-auto.html"); ?>

            <!-- Permis Moto -->
            <?php include_once("views/permis-moto.html"); ?>

            <!-- Code -->
            <div id="code" class="test2-wrap mobile-optimiz">
                <div class="parallax parallax-bg">
                    <div class="span row-fluid">
                        <div class="parallax-wrap-bg">
                            <div class="content">
                                <section>
                                    <h1>CODE</h1>
                                    <div class="title-separator"></div>
                                    <div class="row-fluid">
                                        <ul>
                                            <li>PRIX</li>
                                            <li>CONDITIONS OU PAS</li>
                                            <li>EVALUATION OU PAS</li>
                                            <li>NOMBRE D'HEURES</li>
                                            <li>EN PLUS DANS LE FORFAIT</li>
                                            <li>FRAIS SUPPLEMENTAIRES</li>
                                        </ul>
                                    </div>
                                    <div class="other-option-btn">HORAIRES CODE</div>
                                    <div class="other-option-btn">CODE EN LIGNE</div>
                                    <a href="#vehicules"><div class="back">JE VEUX CONDUIRE AUSSI</div></a>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Hours -->
            <div id="hours" class="hours-wrapper row-fluid">
                <div class="fluid">
                    <div class="content">
                        <section>
                            <h1>Horaires</h1>
                            <div class="title-separator"></div>
                            <div class="span2">
                                <div><h2>Bureau</h2></div>
                                <ul>
                                    <li>Lundi : 15h - 19h</li>
                                    <li>Mardi : 10h30 - 13h et 15h - 21h</li>
                                    <li>Mercredi : 10h30 - 13h et 15h - 19h</li>
                                    <li>Jeudi : 10h30 - 13h et 15h - 21h</li>
                                    <li>Lundi : 15h - 19h</li>
                                    <li>Samedi : 10h30 - 13h et 14h - 16h</li>
                                </ul>
                            </div>
                            <div class="span2">
                                <div><h2>Code</h2></div>
                                <ul>
                                    <li>Lundi : 15h - 19h</li>
                                    <li>Mardi : 10h30 - 13h et 15h - 21h</li>
                                    <li>Mercredi : 10h30 - 13h et 15h - 19h</li>
                                    <li>Jeudi : 10h30 - 13h et 15h - 21h</li>
                                    <li>Lundi : 15h - 19h</li>
                                    <li>Samedi : 10h30 - 13h et 14h - 15h</li>
                                </ul>
                            </div>
                            <div class="hidden-phone clearme"></div>
                        </section>
                    </div>
                </div>
                <div class="arrow-up"></div>
            </div>
        </div>
        <!-- Footer -->
        <?php include_once("views/footer.html"); ?>
        <!-- JavaScripts -->
        <script>
            window.addEventListener('load', function() {
                var tagA = document.getElementsByTagName("a");
                if (isMobile.any())
                {
                    mapClass(tagA, 'geo', function (elt) {
                        elt.href = "geo:0,0?q=auto-moto-ecole-des-buttes-chaumont";
                    });
                    mapClass(tagA, 'tel', function (elt) {
                        elt.href = "tel:0952856407";
                    });
                }
            });
        </script>
        <script src="js/index.min.js"></script>
    </body>
</html>
