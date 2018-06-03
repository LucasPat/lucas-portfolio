var $menu=$('.menu_burger_trait');
var $click=0;


$menu.click(function(){
if (click==0) {
    $('.menu_burger_trait div').toggleClass("croix");
    $('.menu_burger_contenu').css({'display':'block', 'background-color':'black','position':'fixed', 'opacity':'0.9'});
    click++;
  }
  else{
    $('.menu_burger_contenu').css({'display':'none', 'position':'static'});
             $('.menu_burger_trait div').removeClass("croix");


    click--;
  }

});
  $('#menu_burger_sections_1 a').click(function(){
    $('.menu_burger_contenu').css({'display':'none','position':'static'});
         $('.menu_burger_trait div').removeClass("croix");
             click--;


});
