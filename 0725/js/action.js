//scrollfix
var ww = $(window).width();
$(document).ready(function() {
    if (ww < 1024) {
        var secondaryNav = $('#navigation-menu, .menu-m'),
        navHeight = secondaryNav.offset().top+200;
    }
    else {
        var secondaryNav = $('#navigation-menu'),
        navHeight = secondaryNav.offset().top+400;
    }

    $(window).on('scroll', function() {
    
         if ($(window).scrollTop() > navHeight) {
             $('.scroll').addClass("fixed");
         }
         else {
             $('.scroll').removeClass("fixed");
         }
    });
});

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
    $('#bt-index, #bt-index-s, #bt-index-m').click(function(){
        $('body,html').animate({scrollTop:$('.kv-index').offset().top-50}, 800);
    });
    $('#bt-prize, #bt-prize-s, #bt-prize-m').click(function(){
        $('body,html').animate({scrollTop:$('.prize').offset().top-50}, 800);
    });
    $('#bt-disclaimer, #bt-disclaimer-s, #bt-disclaimer-m').click(function(){
        $('body,html').animate({scrollTop:$('.disclaimer').offset().top-50}, 800);
    });
});

