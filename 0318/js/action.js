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
    $('#bt-symptom').click(function(){
        $('body,html').animate({scrollTop:$('#symptom').offset().top-50}, 800);
    });
    $('#bt-choose').click(function(){
        $('body,html').animate({scrollTop:$('#choose').offset().top-50}, 800);
    });
    $('#bt-more').click(function(){
        $('body,html').animate({scrollTop:$('#more').offset().top-50}, 800);
    });
    $('#bt-consult').click(function(){
        $('body,html').animate({scrollTop:$('#consult').offset().top-50}, 800);
    });
});
$(document).on("click","#bt-scroll",function(e){
    $('body,html').animate({scrollTop:$('#school').offset().top-50}, 800);
});

//曝光事件(非互動事件語法)
let progEvent = [ 
{name: '#kvc', label: 'section-index-kv', send: 0},
{name: '#quiz', label: 'section-subject-quiz', send: 0},
{name: '#school', label: 'section-subject-aboutflu', send: 0},
{name: '#info', label: 'section-subject-qa', send: 0},
{name: '#more', label: 'section-subject-more', send: 0},
{name: '#qaresult_A', label: 'section-subject-quizresult-scroe8to10', send: 0},
{name: '#qaresult_B', label: 'section-subject-quizresult-scroe5to7', send: 0},
{name: '#qaresult_C', label: 'section-subject-quizresult-scroe0to4', send: 0}
];


function checkAreaViewEvent() {
    let scrollTop = $(window).scrollTop();
    let windowHeight = $(window).height();
    let viewArea = scrollTop + windowHeight;

    for (let i in progEvent){
        if (progEvent[i].send !== 0) {
            continue;
        }

        let element = $(progEvent[i].name);
        if (element.length == 0) {
            progEvent[i].send = 1;
            continue;
        }
        let areaTop = element.offset().top;
        let areaHeight = element.height();
        let area = areaTop + areaHeight;

        if (viewArea >= areaTop && scrollTop <= area) {
            progEvent[i].send = 1;
            dataLayer.push({
                'event': 'sendMyEvent',
                'eventCategory': 'web_event',
                'eventAction': '2021fluvaccine',
                'eventLabel': progEvent[i].label,
            });

        }

    }

}

function debounce(func, delay) {
    let timer = null;
    return function() {
        const context = this;
        const args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args);
        }, delay);
    };
}

$(document).on(
    "scroll",
    debounce(() => {
        checkAreaViewEvent();
    },30)
);



 // solar card - Click to show
 function myFunction(season, elm) {
    elm.style.display = "none";
    document.getElementById(others).style.display = "block";
  }


  
 // fix
$(window).scroll(function() {
if ($(this).scrollTop()>0)
    {
        $('.header').addClass('bgcolor');
    }
else
    {
        $('.header ').removeClass('bgcolor');
    }
});