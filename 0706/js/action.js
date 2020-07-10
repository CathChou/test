//reload
//var windowWidth = $(window).width();
    //$(window).resize(function() {
    //if(windowWidth != $(window).width()){
    //location.reload();
    //return;
    //}
//});

//手機板選單收合
var ww = $(window).width();
$(document).ready(function() {
    $(".toggle-nav").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("");
        $(".menu-m ul").toggle();
    });
    adjustMenu();
})
$(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
});
var adjustMenu = function() {
    if (ww < 1024) {
    $(".menu-m ul li").unbind('mouseenter mouseleave');
    $(".menu-m ul li .button").click(function(){
            $(".menu-m ul").hide();
    }); 
    }
}    

//選單下滑動態
$(function(){
    $('#bt-classic, #bt2-classic, #bt3-classic, #bt4-classic').click(function(){
        $('body,html').animate({scrollTop:$('#s-classic').offset().top-70}, 800);
    });
    $('#bt-ig, #bt2-ig, #bt3-ig, #bt4-ig').click(function(){
        $('body,html').animate({scrollTop:$('#s-ig').offset().top-200}, 800);
    });
    $('#bt-food, #bt2-food, #bt3-food, #bt4-food').click(function(){
        $('body,html').animate({scrollTop:$('#s-food').offset().top-70}, 800);
    });
    $('#bt-spot, #bt2-spot, #bt3-spot, #bt4-spot').click(function(){
        $('body,html').animate({scrollTop:$('#s-spot').offset().top-200}, 800);
    });
    $('#bt-go, #bt2-go, #bt3-go, #bt4-go').click(function(){
        $('body,html').animate({scrollTop:$('#s-go').offset().top-70}, 800);
    });
});



var $homeSlider = $(".home-slider");

$(window).resize(function() {
  showHomeSlider();
});

function showHomeSlider() {
  if ($homeSlider.data("owlCarousel") !== "undefined") {
    if (window.matchMedia('(min-width: 600px)').matches) {
      initialHomeSlider();
    } else {
      destroyHomeSlider();
    }
  }
}
showHomeSlider();

function initialHomeSlider() {
  $homeSlider.addClass("owl-carousel").owlCarousel({
    items: 3,
    nav: true,
    loop: false,
    margin: 20
  });
}

function destroyHomeSlider() {
  $homeSlider.trigger("destroy.owl.carousel").removeClass("owl-carousel");
}





