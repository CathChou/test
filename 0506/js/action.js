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
        $('body,html').animate({scrollTop:$('#kv').offset().top}, 800);
    });
    $('#bt-doctor').click(function(){
        $('body,html').animate({scrollTop:$('#article').offset().top-50}, 800);
    });
    $('#bt-video').click(function(){
        $('body,html').animate({scrollTop:$('#video').offset().top-50}, 800);
    });
    $('#bt-podcast').click(function(){
        $('body,html').animate({scrollTop:$('#podcast').offset().top-50}, 800);
    });
});
$(document).on("click","#bt-scroll",function(e){
    $('body,html').animate({scrollTop:$('#school').offset().top-50}, 800);
});

 // 點擊查看更多文章 - Click to show
  
$('#one-panel .btn_more').click(function(){
    var _this = $('#one-panel .btn_more'),
        _thisOpen = _this.next('.hide');
    _this.hide();
    _thisOpen.fadeIn();
});
$('#two-panel .btn_more').click(function(){
    var _this = $('#two-panel .btn_more'),
        _thisOpen = _this.next('.hide');
    _this.hide();
    _thisOpen.fadeIn();
});
$('#three-panel .btn_more').click(function(){
    var _this = $('#three-panel .btn_more'),
        _thisOpen = _this.next('.hide');
    _this.hide();
    _thisOpen.fadeIn();
});
var x;
	x=$(window).width();
	if (x>576) {
		$('#one-tab').click(function(){
			$('.tabs .tab').removeClass('active');
			$(this).addClass('active');
			$('.panel').hide();
			$('#one-panel').fadeIn();
			$('#one-panel .btn_more').show();
			$('#one-panel .hide').hide();
		});
        $('#two-tab').click(function(){
			$('.tabs .tab').removeClass('active');
			$(this).addClass('active');
			$('.panel').hide();
			$('#two-panel').fadeIn();
			$('#two-panel .btn_more').show();
			$('#two-panel .hide').hide();
		});
		$('#three-tab').click(function(){
			$('.tabs .tab').removeClass('active');
			$(this).addClass('active');
			$('.panel').hide();
			$('#three-panel').fadeIn();
			$('#three-panel .btn_more').show();
			$('#three-panel .hide').hide();
		});
	}
    if (x<577) {
		$('#one-tab').click(function(){
			$('.tabs .tab').removeClass('active');
			$(this).addClass('active');
			$('.panel').hide();
			$('#one-panel').fadeIn();
		});
		$('#two-tab').click(function(){
			$('.tabs .tab').removeClass('active');
			$(this).addClass('active');
			$('.panel').hide();
			$('#two-panel').fadeIn();
		});
		$('#three-tab').click(function(){
			$('.tabs .tab').removeClass('active');
			$(this).addClass('active');
			$('.panel').hide();
			$('#three-panel').fadeIn();
		});
	}


//曝光事件(非互動事件語法)
let progEvent = [ 
    {name: '#kv', label: 'section-vghtpe-kv', send: 0},
    {name: '#article', label: 'section-vghtpe-article', send: 0},
    {name: '#video', label: 'section-vghtpe-video', send: 0},
    {name: '#podcast', label: 'section-vghtpe-podcast', send: 0}
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
                    'eventAction': '2022vghtpe',
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