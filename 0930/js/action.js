
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
    $('#bt_contact').click(function(){
        $('body,html').animate({scrollTop:$('#sectionContact').offset().top-40}, 800);
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

//選單
$('.toggle-menu').click (function(){
  $(this).toggleClass('active');
  $('#menu').toggleClass('open');
});
$('#menu .main-nav a').click (function(){
  $('.nav button').toggleClass('active');
  $('#menu').toggleClass('open');
});

function resizenow() {
    var browserwidth = jQuery(window).width();
    var browserheight = jQuery(window).height();
    jQuery('.pageloader-icon').css('right', ((browserwidth - jQuery(".pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".pageloader-icon").height())/2));
};
resizenow();


jQuery(window).resize(function(){
     resizenow();
});
function resizenow() {
    var browserwidth = jQuery(window).width();
    var browserheight = jQuery(window).height();
    jQuery('.pageloader-icon').css('right', ((browserwidth - jQuery(".pageloader-icon").width())/2)).css('top', ((browserheight - jQuery(".pageloader-icon").height())/2));
};
resizenow();

jQuery("html").addClass('html-onload');

jQuery(document.body).on("touchmove", function(e) {
    e.preventDefault();
});


var scrollPosition = [
self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
];
var html = jQuery('html');
html.data('scroll-position', scrollPosition);
html.data('previous-overflow', html.css('overflow'));
html.css('overflow', 'hidden');
window.scrollTo(scrollPosition[0], scrollPosition[1]);

jQuery(window).load(function() {

    setTimeout(function(){
    jQuery(".pageloader-icon").addClass('pageloader-icon-hide');
    },500);

    setTimeout(function(){
        jQuery(document.body).unbind('touchmove');

        var html = jQuery('html');
        var scrollPosition = html.data('scroll-position');
        html.css('overflow', html.data('previous-overflow'));
        window.scrollTo(scrollPosition[0], scrollPosition[1]);

        jQuery("#pageloader").addClass('pageloader-fade');

        jQuery("html").removeClass('html-onload');
    },750);

    setTimeout(function(){

        jQuery("#pageloader").addClass('pageloader-hide');

    },1500);

});




