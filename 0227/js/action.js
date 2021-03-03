//選單下滑動態
$(function(){
    $('#to-agenda').click(function(){
        $('body,html').animate({scrollTop:$('#agenda').offset().top-100}, 800);
    });
    $('#bt-fashion, #bt2-fashion, #bt3-fashion').click(function(){
        $('body,html').animate({scrollTop:$('#fashion-content').offset().top-150}, 800);
    });
});
