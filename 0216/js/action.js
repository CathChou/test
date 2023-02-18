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
    $('#bt-quiz, .btn_float').click(function(){
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

//QA
$(function(){
    let qItems = $(".questions-item"); // 取得所有問題項目
    qItems.each(function(index,item){  // 所有問題跑迴圈
      let qIndex = index; // 紀錄現在第幾則
      let card = $(item).children(".questions-card"); // 問題卡片
      let btnArea = card.find(".questions-card__answer-btns"); // 問題卡片
      let yesBtn = card.find(".answer-btn--yes"); // Yes 按鈕
      let noBtn = card.find(".answer-btn--no"); // No 按鈕
      let rightAnswer = card.find(".answer-right"); // 按Yes的內容
      let wrongAnswer = card.find(".answer-wrong"); // 按No的內容
      let nextBtn = card.find(".next-btn"); // 下一步按鈕
      
  
      yesBtn.on("click",function(){ // Yes 按鈕按下後
        btnArea.addClass("hidden"); // 將答題按鈕區隱藏
        rightAnswer.addClass("show") // 將Yes的內容顯示
        nextBtn.addClass("show") // 下一步按鈕顯示
      })
  
      noBtn.on("click",function(){ // No 按鈕按下後
        btnArea.addClass("hidden"); // 將答題按鈕區隱藏
        wrongAnswer.addClass("show") // 將Yes的內容顯示
        nextBtn.addClass("show") // 下一步按鈕顯示
      })
      
      nextBtn.on("click",function(){ // 下一步按鈕按下
        // 所以問題移除顯示(active)，然後將 下一題(qIndex+1) 顯示
        qItems.removeClass("active").eq(qIndex+1).addClass("active"); 
      })
    })
  })


//progress bar
  'use strict';

  var $quiz_parent = $('.quiz_c');
  var $progressbar = $quiz_parent.find('.progress-bar');
  const count = 100 / $quiz_parent.find('.next-btn[data-toggle="collapse"]').length;
  var current = count;
  $progressbar.css('width',current+'%'); 
  
  $quiz_parent.on('show.bs.collapse','.collapse', function() {
      $quiz_parent.find('.collapse.show').collapse('hide'); 
  });
  
  $('.next-btn[data-toggle="collapse"]:not([data-target=""])').on('click',function(){
       
      current += count;
      current =(current > 100)? 100: current;
      current =(current < 0)? 0: current;
      $progressbar.css('width',current+'%'); 
  });
  $('.prev[data-toggle="collapse"]:not([data-target=""])').on('click',function(){
      
      current -= count;
      current =(current > 100)? 100: current;
      current =(current < 0)? 0: current;
      $progressbar.css('width',current+'%'); 
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
	}


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




