<?php
if(empty($_GET['lang'])){
    $_SESSION['lang'] = "fr";
}else{
    switch($_GET['lang']){
        case "fr":
        $_SESSION['lang'] = "fr";
        break;
        case "en":
        $_SESSION['lang'] = "en";
        break;
        default :
        $_SESSION['lang'] = "fr";
        break;
    }
}

switch($_SESSION['lang']){
        case "fr":
        $fichier_langage = "lang/francais.php";
        break;
        case "en":
        $fichier_langage = "lang/anglais.php";
        break;
}
include($fichier_langage);
?>

<!DOCTYPE html>
<html>
<head>
  <title>Portfolio Lucas PATENOTRE</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" type="text/css" href="css/style.css">
  <link rel="stylesheet" href="css/animate.css">
  <link href="https://fonts.googleapis.com/css?family=Andika" rel="stylesheet">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<meta name="google-site-verification" content="6343Lts4IDJeB0EoxdwbFgBq1GuNMqAEo49_1_GDp84" />
<meta name="description" content="Je suis Lucas Patenotre, étudiant à l'IUT d'angoulême en section MMI. Vous pouvez découvir ici mon portfolio.">
</head>

<body>
    <div id="menu_burger" class="menu_burger">
      <div class="menu_burger_trait">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="menu_burger_contenu">
       <div id="menu_burger_sections_1">
        <ul>
            <li  class="menu_burger_hover" >
              <a href="#section_presentation"  ><p><?php echo _menu_pres ?> </p></a>
            </li>
            <li class="menu_burger_hover">
              <a href="#section_competences"   ><p><?php echo _menu_comp ?> </p></a>
            </li>
            <li class="menu_burger_hover">
              <a href="#section_realisations"  ><p><?php echo _menu_real ?></p></a>
            </li>
            <li class="menu_burger_hover">
              <a href="#section_contact"  ><p><?php echo _menu_contact ?></p></a>
            </li>
          </ul>
        </div>
        <div id="menu_burger_sections_2">
          <div class="modif_burger_texte">
            <a id="modif_burger_dyslex" class="dyslex_btn"> Dyslexie</a>
            <button id="plus_burger">A+</button>
            <button id="moins_burger">A-</button>
          </div>
          <div class="burger_langues">
          <a href="?lang=fr">Français</a>
          <a href="?lang=en">English</a>
          </div>
    </div>
      </div>
    </div>

    <!-- Progress avec le scroll -->
  <div class="scroll-top"></div>
  <div class="scroll-right"></div>
  <div class="scroll-bottom"></div>
  <div class="scroll-left"></div>



      <!-- MENU -->
  <div id="menu">


    <div id="menu_titre">
      <h2> <?php echo _menu_titre ?> </h2>
    </div>

    <div id="menu_sections">
       <div id="menu_sections_1">
          <ul>
            <li id="menu_presentation" class="menu_hover" >
              <a href="#section_presentation" class="link" ><p><?php echo _menu_pres ?> </p></a>
            </li>
            <li class="menu_hover">
              <a href="#section_competences" id="menu_competence" class="link"  ><p><?php echo _menu_comp ?> </p></a>
            </li>
            <li class="menu_hover">
              <a href="#section_realisations" id="menu_realisation" class="link"><p><?php echo _menu_real ?></p></a>
            </li>
            <li class="menu_hover">
              <a href="#section_contact" id="menu_contact" class="link"><p><?php echo _menu_contact ?></p></a>
            </li>
            </ul>
        </div>
        <div id="menu_sections_2">
          <div id="modif_texte">
            <a id="modif_dyslex" class="dyslex_btn"> Dyslexie</a>
            <button id="plus">A+</button>
            <button id="moins">A-</button>
          </div>
          <div id="langues">
          <a href="?lang=fr">Français</a>
          <a href="?lang=en">English</a>
          </div>
        </div>
    </div>
  </div>

  <div id="acceuil" class="section">
   <h1><?php echo _acceuil_titre ?></h1>
    <p><?php echo _acceuil_p1 ?></p>
    <a href="#section_presentation"><p class="paddi"><?php echo _acceuil_p2 ?></p></a>

  </div>


<section id="section_presentation" class="section">
  <div id="presentation" >
  <div class="titre_all">

    <div class="titre_titre">
    <div class="fleche wow bounceInLeft" data-wow-offset="0"></div>
    </div>
      <h2><?php echo _pres_titre ?></h2>
  </div>
    <div id="pres_content" >
      <h2 class="wow fadeInRight"><?php echo _pres_titre2 ?></h2>
      <img src="./img/moi.png" alt="Photo de moi" class="wow fadeInLeftx">
      <p class="wow fadeInRight"><?php echo _pres_p ?></p>
      <p><?php echo _pres_CV ?></p>
      <a href="./ressources/CV-Lucas_PATENOTRE.pdf" target="_blank"><?php echo _pres_MonCV ?></a>


    </div>


  </div>
  </section>


  <section class="section" id="section_competences">
<div class="titre_all">

    <div class="titre_titre">
    <div class="fleche wow bounceInLeft" data-wow-offset="0"></div>
    </div>
      <h2><?php echo _comp_titre ?></h2>
  </div>
     <div id="cercles">
      <div>

      <h2><?php echo _comp_js ?> </h2>
        <canvas id="canvas1" class="wow rotateIn " width="200" height="150" style="">
      </canvas>


      </div>
      <div>
      <h2><?php echo _comp_html ?></h2>

        <canvas id="canvas2"  class="wow rotateIn" width="200" height="150" style="">
      </canvas>

          </div>

          <div>
      <h2><?php echo _comp_php ?></h2>

        <canvas id="canvas3" class="wow rotateIn" width="200" height="150" style="">
        </canvas>
          </div>
          </div>

          <div id="barres">
            <div class="barres_affich">
              <div class="barre_valeur">
                <img src="./img/WordPress-Logo.png" alt="logo de wordpress" >
                <progress value="50" max="100" id="barre_pro1"></progress>
              </div>
              <div class="barre_infos">
                <p><?php echo _barre_wp ?></p>
              </div>
            </div>

            <div class="barres_affich">
            <div class="barre_valeur">
              <img src="./img/linux-logo.png" alt="logo de linux" >

              <progress value="40" max="100" id="barre_pro2" > </progress>
            </div>
              <div class="barre_infos">
                <p><?php echo _barre_linux ?></p>
              </div>
            </div>

             <div class="barres_affich">
                <div class="barre_valeur">
              <img src="./img/github.png" alt="logo de github">
              <progress value="50" max="100" id="barre_pro3"></progress>
              </div>
              <div class="barre_infos">
                <p><?php echo _barre_3 ?></p>
              </div>
            </div>

          </div>
  </section>

  <section id="section_realisations" class="section">
    <div class="titre_all">

      <div class="titre_titre">
      <div class="fleche wow bounceInLeft" data-wow-offset="0"></div>
      </div>
        <h2><?php echo _real_titre ?> </h2>
    </div>
    <div id="real">
      <div id="real__1" class="reali">

        <h3> <?php echo _real_1 ?></h3>
        <a href="http://lpatenotre.mmi-angouleme.fr/Ferme_Belline" target="_blank"><img src="img/ferme_belline.jpg" alt="logo projet 1"></a>
      </div>

      <div id="real__2" class="reali">

        <h3><?php echo _real_2 ?></h3>
        <a href="http://ed-banger-records.netlify.com/" target="_blank"><img src="img/calou.png" alt="logo projet 2"></a>
      </div>

      <div id="real__3" class="reali">

        <h3><?php echo _real_3 ?></h3>
        <a href="http://lpatenotre.mmi-angouleme.fr/CSSDay" target="_blank"><img src="img/cssday.jpg" alt="logo projet 3"></a>
      </div>
    </div>
    <div id="content">
      <p id="content__para">Dans le cadre de mes études j'ai souvent été amené à créer différents projets. Voulant devenir développeur front-end, je vous présente trois de mes projets front.</p>
    </div>
  </section>

  <section id="section_contact" class="section">
    <div class="titre_all">

      <div class="titre_titre">
        <div class="fleche wow bounceInLeft" data-wow-offset="0"></div>
      </div>
        <h2><?php echo _contact_titre ?></h2>
    </div>
    <div id="contact_all">
      <div id="contact_mail">
        <h3><?php echo _contact_mail ?></h3>
        <h2 id="contact_adresse"><?php echo _contact_adresse ?></h2>
        <button id="contact_btn" class="btn_survol" aria-label="<?php echo _contact_label ?>"><?php echo _contact_btn ?></button>
      </div>

      <div id="contact_linkedin">
        <h3><?php echo _contact_linkedin ?></h3>
       <a target="_blank" href="https://fr.linkedin.com/in/lucas-patenotre-750715151"><i class="fab fa-linkedin fa-5x"></i></a>
      </div>
    </div>
  </section>

  <footer>
<p> Lucas PATENOTRE - 2o18 - Tous droits réservés © <a href="ressources/mention_legale.html" target="_blank">mentions légales</a> </p>
  </footer>

  <script src="./js/jquery.min.js"></script>
  <script src="./js/jquery-ui.min.js"></script>

  <script src="./js/all.js"></script>
  <script> new WOW().init(); </script>


  <script>

  jQuery(document).ready(function()
  {
    $('a[href^="#"]').click(function(){
    var id = $(this).attr("href");
    var offset = $(id).offset().top
    $('html, body').animate({scrollTop: offset}, 'slow');

  return false;
  });
  });

</script>


<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js" integrity="sha384-SlE991lGASHoBfWbelyBPLsUlwY1GwNDJo3jSJO04KZ33K2bwfV9YBauFfnzvynJ" crossorigin="anonymous"></script>
</body>
</html>
