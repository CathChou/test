//scrollfix
var ww = $(window).width();
$(document).ready(function() {
    if (ww < 1024) {
        var secondaryNav = $('.logopic'),
        navHeight = secondaryNav.offset().top+200;
    }
    else {
        var secondaryNav = $('.logopic'),
        navHeight = secondaryNav.offset().top+1200;
    }

    $(".float").css({ "display":"none" });
    $(window).on('scroll', function() {
    
        if ($(window).scrollTop() > navHeight) {
            $('.scroll').addClass("fixed");
        }
        else {
            $('.scroll').removeClass("fixed");
        }

        if (
            $(window).scrollTop() >= $(".sale").offset().top
            &&
            $(window).scrollTop() + $(window).height() <= $(".method").offset().top
        )
        {
            $(".float").fadeIn();
        } else {
            $(".float").fadeOut();
        }
    });
});

//選單下滑動態
$(function(){
    $('#to-agenda').click(function(){
        $('body,html').animate({scrollTop:$('#agenda').offset().top-100}, 800);
    });
    $('#bt-fashion, #bt2-fashion, #bt3-fashion').click(function(){
        $('body,html').animate({scrollTop:$('#fashion-content').offset().top-150}, 800);
    });
});

