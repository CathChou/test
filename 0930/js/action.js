
//reload
//var windowWidth = $(window).width();
    //$(window).resize(function() {
    //if(windowWidth != $(window).width()){
    //location.reload();
    //return;
    //}
//});
//選單下滑動態
$(function(){
    $('#s2').click(function(){
        $('body,html').animate({scrollTop:$('#introduction').offset().top-85}, 800);
    });
    $('#s3').click(function(){
        $('body,html').animate({scrollTop:$('#introduction').offset().top-85}, 800);
    });
});

//backtotop
$(document).ready(function(){
    $("#back-top").hide();
    $(function () {
    $(window).scroll(function () {
    if ($(this).scrollTop() > 400) {
    $('#back-top').fadeIn();
    } else {
    $('#back-top').fadeOut();
    }
});
    $('#back-top a').click(function () {
        $('body,html').animate({
        scrollTop: 0
        }, 800);
        return false;
        });
    });
});







