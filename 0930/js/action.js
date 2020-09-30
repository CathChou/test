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
    $(".menu-m ul li a").click(function(){
            $(".menu-m ul").hide();
    }); 
    }
}    

//選單下滑動態
$(function(){
    $('#bt-qa, #bts-qa').click(function(){
        $('body,html').animate({scrollTop:$('#qac').offset().top-50}, 800);
    });
    $('#bt-cough, #bts-cough').click(function(){
        $('body,html').animate({scrollTop:$('#coughc').offset().top+450}, 800);
    });
    $('#bt-cancer, #bts-cancer').click(function(){
        $('body,html').animate({scrollTop:$('#cancerc').offset().top+50}, 800);
    });
    $('#bt-food, #bts-food').click(function(){
        $('body,html').animate({scrollTop:$('#foodc').offset().top}, 800);
    });
    $('#bt-dad, #bts-dad').click(function(){
        $('body,html').animate({scrollTop:$('#dadc').offset().top}, 800);
    });
});








