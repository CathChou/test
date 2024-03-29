﻿
var width = $(window).width();
var ua = navigator.userAgent.toLowerCase();
var iPad = navigator.userAgent.match(/iPad/i) != null;
var iPhone = (navigator.userAgent.match(/iPhone/i) != null) || (navigator.userAgent.match(/iPod/i) != null);
var isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
var mobileSafari = (/iPhone/i.test(navigator.platform) || /iPod/i.test(navigator.platform) || /iPad/i.test(navigator.userAgent)) && !!navigator.appVersion.match(/(?:Version\/)([\w\._]+)/);
var Android = (navigator.userAgent.match(/android/i) != null);
function preventDefault(e) {
    e.preventDefault();
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}
// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
        get: function () { supportsPassive = true; }
    }));
} catch (e) { }
var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';
// call this to Disable
function disableScroll() {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}
// call this to Enable
function enableScroll() {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}
$(function () {
    $('body').addClass('noscroll');
    $('.test-start').click(function () {
        $('.op-block').slideUp(700);
        disableScroll();
        $('body').removeClass('noscroll');
    });
});
//改字內容
var quiz = [
    {
        "question": "1. 睡眠困難，譬如難以入睡、易睡或早醒",
        "img": "<div class='illustration illustration-1'><img src='images/q1.png' alt=''><img src='images/q1-move.png' class='img-move' alt=''></div>",
        "choices": ["0", "1", "2", "3", "4"],
        "comment": "<span>仔細回想最近一週（包含今天），對於這個問題的困擾程度：</span><span>完全沒有給0分、輕微給1分、中等程度給2分、厲害給3分、非常厲害給4分</span>",
        "gtm": ""
    },
    {
        "question": "2. 感覺緊張不安",
        "img": "<div class='illustration illustration-2'><img src='images/q2.png' alt=''><img src='images/q2-move.png' class='img-move' alt=''></div>",
        "choices": ["0", "1", "2", "3", "4"],
        "comment": "",
        "gtm": ""
    },
    {
        "question": "3. 覺得容易苦惱或動怒",
        "img": "<div class='illustration illustration-3'><img src='images/q3.png' alt=''><img src='images/q3-move.png' class='img-move' alt=''></div>",
        "choices": ["0", "1", "2", "3", "4"],
        "comment": "",
        "gtm": ""
    },
    {
        "question": "4. 感覺憂鬱、心情低落",
        "img": "<div class='illustration illustration-4'><img src='images/q4.png' alt=''><img src='images/q4-move.png' class='img-move' alt=''></div>",
        "choices": ["0", "1", "2", "3", "4"],
        "comment": "",
        "gtm": ""
    },
    {
        "question": "5. 覺得比不上別人",
        "img": "<div class='illustration illustration-5'><img src='images/q5.png' alt=''><img src='images/q5-move.png' class='img-move' alt=''></div>",
        "choices": ["0", "1", "2", "3", "4"],
        "comment": "<span>資料來源：華人心理治療基金會「心情溫度計」</span>",
        "gtm": ""
    },
    {
        "question": "6. 最容易導致你情緒低落的因素是什麼呢？<br>請告訴我們<span>（單選題）</span>",
        "img": "<div class='illustration illustration-6'><img src='images/q6.png' alt=''></div>",
        "choices": ["工作或學業壓力", "經濟壓力", "健康因素", "情感問題", "家庭關係", "人際關係"],
        "comment": "<span>您知道全球有超過4.5億人們曾經歷過心理健康的問題嗎？</span><span>您關心過自己與所愛的人的心理健康嗎？讓我們一起點亮心光</span>",
        "gtm": ""
    }
]
var a1 = 0;
var a2 = 0;
var a3 = 0;
var a4 = 0;
var a5 = 0;
var a6 = 0;
var question = 0;
var userSelect = [0, 0, 0, 0, 0, 0];
var gameHtml = "";
var result = 0;
$(document).ready(function () {
    for (i = 0; i < quiz.length; i++) {
    var qNumber = i + 1
    if(i===quiz.length-1){
        gameHtml += " <section class='question-block' id='osq" + i + "'> <div class='container'> <div class='row justify-content-md-center'> <div class='img-block col-9 col-md-5'>" + quiz[i]['img'] + "</div> <div class='txt-block col-12 col-md-6 offset-md-1'> <div class='schedule-range'> <div class='schedule-line schedule-line--" + (i + 1) + "'></div> </div> <h3 id='q" + i + "'>" + quiz[i]['question'] + "</h3> <div class='select-block'> <div class='answer forsix'> <div class='d-flex flex-row-reverse align'> <input type='radio' id='star-" + i + "--6' name='rate-" + i + "' /> <label for='star-" + i + "--6' class='six choice star-" + i + "--6' value='5'> <span data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-social' class='gtm-event six'>" + quiz[i]['choices'][5] + "</span> </label> <input type='radio' id='star-" + i + "--5' name='rate-" + i + "' /> <label for='star-" + i + "--5' class='six choice star-" + i + "--5' value='4'> <span data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-family' class='gtm-event six'>" + quiz[i]['choices'][4] + "</span> </label> <input type='radio' id='star-" + i + "--4' name='rate-" + i + "' /> <label for='star-" + i + "--4' class='six choice star-" + i + "--4' value='3'> <span data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-relationship' class='gtm-event six'>" + quiz[i]['choices'][3] + "</span> </label> <input type='radio' id='star-" + i + "--3' name='rate-" + i + "' /> <label for='star-" + i + "--3' class='six choice star-" + i + "--3' value='2'> <span data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-healthy' class='gtm-event six'>" + quiz[i]['choices'][2] + "</span> </label> <input type='radio' id='star-" + i + "--2' name='rate-" + i + "' /> <label for='star-" + i + "--2' class='six choice star-" + i + "--2' value='1'> <span data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-economicpressure' class='gtm-event six'>" + quiz[i]['choices'][1] + "</span> </label> <input type='radio' id='star-" + i + "--1' name='rate-" + i + "' /> <label for='star-" + i + "--1' class='six choice star-" + i + "--1' value='0'> <span data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-workorschool' class='gtm-event six'>" + quiz[i]['choices'][0] + "</span> </label> </div> </div>";
        if ( quiz[i]['comment'] !== "" ) {
            gameHtml += "<h5 class='comment'>" + quiz[i]['comment'] + "</h5>";
        }
        gameHtml += "</div></div></div></div></section>"
    } else{
        gameHtml += " <section class='question-block' id='osq" + i + "'> <div class='container'> <div class='row justify-content-md-center'> <div class='img-block col-9 col-md-5'>" + quiz[i]['img'] + "</div> <div class='txt-block col-12 col-md-6 offset-md-1'> <div class='schedule-range'> <div class='schedule-line schedule-line--" + (i + 1) + "'></div> </div> <h3 id='q" + i + "'>" + quiz[i]['question'] + "</h3> <div class='select-block'> <div class='d-flex justify-content-between'> <div class='h5 mx-1'>輕</div> <div class='h5 mx-1'>重</div> </div> <div class='answer'> <div class='d-flex flex-row-reverse justify-content-between rate'> <input type='radio' id='star-" + i + "--5' name='rate-" + i + "' /> <label for='star-" + i + "--5' class='choice star-" + i + "--5' value='4'> <span class='gtm-event' data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-score4'>" + quiz[i]['choices'][4] + "</span> </label> <input type='radio' id='star-" + i + "--4' name='rate-" + i + "' /> <label for='star-" + i + "--4' class='choice star-" + i + "--4' value='3'> <span class='gtm-event' data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-score3'>" + quiz[i]['choices'][3] + "</span> </label> <input type='radio' id='star-" + i + "--3' name='rate-" + i + "' /> <label for='star-" + i + "--3' class='choice star-" + i + "--3' value='2'> <span class='gtm-event' data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-score2'>" + quiz[i]['choices'][2] + "</span> </label> <input type='radio' id='star-" + i + "--2' name='rate-" + i + "' /> <label for='star-" + i + "--2' class='choice star-" + i + "--2' value='1'> <span class='gtm-event' data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-score1'>" + quiz[i]['choices'][1] + "</span> </label> <input type='radio' id='star-" + i + "--1' name='rate-" + i + "' /> <label for='star-" + i + "--1' class='choice star-" + i + "--1' value='0'> <span class='gtm-event' data-category='web_web' data-action='2021mental-health' data-label='event-2021kindnessday-click-test-Q"+ qNumber +"-score0'>" + quiz[i]['choices'][0] + "</span> </label> </div> </div>";
        if ( quiz[i]['comment'] !== "" ) {
            gameHtml += "<h5 class='comment'>" + quiz[i]['comment'] + "</h5>";
        }
        gameHtml += "</div></div></div></div></section>"
    }
    }
    $("#gameSection").append(gameHtml);
    $("#final").hide();
    choiceScore();
    function choiceScore() {
        $(".choice").bind("click",
            function (event) {
                var answer = $(this).attr("value");
                var nextQuestion = $(this).closest('.question-block').next();
                // console.log(answer);
                if (nextQuestion.length !== 0) {
                    $('html, body').animate({
                        scrollTop: nextQuestion.offset().top
                    }, 1000);
                }
                $(this).addClass("selected");
                $(this).siblings('.selected').removeClass('selected');
                checkanswer(answer);
            });
        $(".selectChoice").bind("change",
        function (event) {
            var answer = $(this).attr("value");
            var nextQuestion = $(this).closest('.question-block').next();
            // console.log(answer);
            if (nextQuestion.length !== 0) {
            $('html, body').animate({
            scrollTop: nextQuestion.offset().top
            }, 1000);
            }
            checkanswer(answer);
        });
    }
    function checkanswer(answer) {
        userSelect[question] = answer;
        question = question + 1;
        count();
        if (question < 6) {
            disableScroll();
        }
        if (question == 6) {
            final();
            chartMake();
            $("html, body").animate({
                scrollTop: $('#resultSection').offset().top
            }, 1000);
            enableScroll();
        }
    }
    function count() {
        a1 = parseInt(userSelect[0]);
        a2 = parseInt(userSelect[1]);
        a3 = parseInt(userSelect[2]);
        a4 = parseInt(userSelect[3]);
        a5 = parseInt(userSelect[4]);
        a6 = parseInt(userSelect[5]);
    }
    $(".reset").on("click", function () {
        reset();
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    $(".shared").on("click", function () {
        return false;
    });
    function reset() {
        a1 = 0;
        a2 = 0;
        a3 = 0;
        a4 = 0;
        a5 = 0;
        a6 = 0;
        question = 0;
        result = 0;
        userSelect = [0, 0, 0, 0, 0, 0];
        $('.op-block').show();
        $('.op-block > div').scrollTop(0);
        $('body').addClass('noscroll');
        $("#resultSection, .result-block").hide();
        $(".choice").siblings('.selected').removeClass('selected');
        $(".choice").siblings('').attr('checked', false);
        // choiceScore();
    }
    function final() {
        $("#resultSection").show();
    }
    function chartMake() {
        var totalScore = a1 + a2 + a3 + a4 + a5 ;
         if ((totalScore >= 0) && (totalScore < 6)) {
            $("#result1").show();
            result = 1;
        }  if ((totalScore >= 6) && (totalScore < 10)) {
            $("#result2").show();
            result = 2;
        }  if ((totalScore >= 10) && (totalScore < 15)) {
            $("#result3").show();
            result = 3;
        }  if (totalScore >= 15) {
            $("#result4").show();
            result = 4;
        }
        //因為切換到下一頻有時間差，所以可以寫一個setTimeout()再推事件
        dataLayer.push({
            event: "sendMyEvent",
            eventCategory: "web_web",
            eventAction: "2021mental-health",
            eventLabel: `event-2021kindnessday-click-test-result${result}`,
          });
    }
    
});
