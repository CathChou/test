//reload
var windowWidth = $(window).width();
    $(window).resize(function() {
    if(windowWidth != $(window).width()){
    location.reload();
    return;
    }
});


//手機板選單收合
var ww = $(window).width();
$(document).ready(function() {
    $(".toggle-nav").click(function(e) {
        e.preventDefault();
        $(this).toggleClass("");
        $(".navigation ul").toggle();
    });
    adjustMenu();
})
$(window).bind('resize orientationchange', function() {
    ww = document.body.clientWidth;
    adjustMenu();
});
var adjustMenu = function() {
    if (ww < 1024) {
    $(".navigation ul li").unbind('mouseenter mouseleave');
    $(".navigation ul li a, .logo a").click(function(){
            $(".navigation ul").hide();
    }); 
    }
}    

//選單下滑動態
$(function(){
    $('#bt-kv, #bts-kv').click(function(){
        $('body,html').animate({scrollTop:$('#kvc').offset().top}, 800);
    });
    $('#bt-qa, #bt-scroll').click(function(){
        $('body,html').animate({scrollTop:$('#qac').offset().top-50}, 800);
    });
    $('#bt-cough').click(function(){
        $('body,html').animate({scrollTop:$('#coughc').offset().top+450}, 800);
    });
    $('#bt-cancer').click(function(){
        $('body,html').animate({scrollTop:$('#cancerc').offset().top+50}, 800);
    });
    $('#bt-food').click(function(){
        $('body,html').animate({scrollTop:$('#foodc').offset().top}, 800);
    });
    $('#bt-dad').click(function(){
        $('body,html').animate({scrollTop:$('#dadc').offset().top}, 800);
    });
});

