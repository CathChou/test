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
    $('#bt-quiz').click(function(){
        $('body,html').animate({scrollTop:$('#quiz').offset().top-50}, 800);
    });
    $('#bt-school').click(function(){
        $('body,html').animate({scrollTop:$('#school').offset().top-50}, 800);
    });
    $('#bt-info').click(function(){
        $('body,html').animate({scrollTop:$('#info').offset().top-50}, 800);
    });
    $('#bt-more').click(function(){
        $('body,html').animate({scrollTop:$('#more').offset().top-50}, 800);
    });
});
$(document).on("click","#bt-scroll",function(e){
    $('body,html').animate({scrollTop:$('#school').offset().top-50}, 800);
});

