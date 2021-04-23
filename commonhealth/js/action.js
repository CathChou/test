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
    $('#bt-scroll, #bt-quiz').click(function(){
        $('body,html').animate({scrollTop:$('#quiz').offset().top}, 800);
    });
    $('#bt-kv').click(function(){
        $('body,html').animate({scrollTop:$('#kv').offset().top}, 800);
    });
    $('#bt-info').click(function(){
        $('body,html').animate({scrollTop:$('#info').offset().top}, 800);
    });
    $('#bt-post').click(function(){
        $('body,html').animate({scrollTop:$('#post').offset().top}, 800);
    });
    $('#bt-video').click(function(){
        $('body,html').animate({scrollTop:$('#video').offset().top-120}, 800);
    });
    $('#bt-reserve, #Q6yes, .float').click(function(){
        $('body,html').animate({scrollTop:$('#reserve').offset().top-150}, 800);
    });

});

//互動測驗
$('.quiz_select a').click(function(){
    $('.quiz_select').addClass('active');
});
$('.quiz_answer .btn').click(function(){
    $('.quiz_select').removeClass('active');
});

$('.quiz_answer .q1_btn').click(function(){
    $('.q1_answer, .q1_select').addClass('active');
});

$('.quiz_answer .q2_btn').click(function(){
    $('.q2_answer, .q2_select').addClass('active');
});

$('.quiz_answer .q3_btn').click(function(){
    $('.q3_answer, .q3_select').addClass('active');
});

$('.quiz_answer .q4_btn').click(function(){
    $('.q4_answer, .q4_select').addClass('active');
});

$('.quiz_answer .q5_btn').click(function(){
    $('.q5_select').addClass('active');
});

$('#Q1yes').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q1yes').addClass('active');
    $('#Q1answer').removeClass('wrong');
    $('#Q1answer').fadeIn(100);
});
$('#Q1no').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q1no').addClass('active');
    $('#Q1answer').addClass('wrong');
    $('#Q1answer').fadeIn(100);
});


$('#Q2yes').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q2yes').addClass('active');
    $('#Q2answer').addClass('wrong');
    $('#Q2answer').fadeIn(100);
});
$('#Q2no').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q2no').addClass('active');
    $('#Q2answer').removeClass('wrong');
    $('#Q2answer').fadeIn(100);
});

$('#Q3yes').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q3yes').addClass('active');
    $('#Q3answer').addClass('wrong');
    $('#Q3answer').fadeIn(100);
});
$('#Q3no').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q3no').addClass('active');
    $('#Q3answer').removeClass('wrong');
    $('#Q3answer').fadeIn(100);
});

$('#Q4yes').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q4yes').addClass('active');
    $('#Q4answer').removeClass('wrong');
    $('#Q4answer').fadeIn(100);
});
$('#Q4no').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q4no').addClass('active');
    $('#Q4answer').addClass('wrong');
    $('#Q4answer').fadeIn(100);
});

$('#Q5yes').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q5yes').addClass('active');
    $('#Q5answer').addClass('wrong');
    $('#Q5answer').fadeIn();
});
$('#Q5no').click(function(){
    $('.quiz_select .icon').removeClass('active');
    $('#Q5no').addClass('active');
    $('#Q5answer').removeClass('wrong');
    $('#Q5answer').fadeIn();
});

$('.q5_btn').click(function(){
    $('#Q6answer').fadeIn();
});

$('#next-q2').click(function(){
    $('#Q1').fadeOut();
    $('#Q2').fadeIn();
});
$('#next-q3').click(function(){
    $('#Q2').fadeOut();
    $('#Q3').fadeIn();
});
$('#next-q4').click(function(){
    $('#Q3').fadeOut();
    $('#Q4').fadeIn();
});
$('#next-q5').click(function(){
    $('#Q4').fadeOut();
    $('#Q5').fadeIn();
});
$('#next-q6').click(function(){
    $('#Q5').fadeOut();
    $('#Q6').fadeIn();
});













