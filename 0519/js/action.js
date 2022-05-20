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
    $('#bt-news').click(function(){
        $('body,html').animate({scrollTop:$('#news').offset().top-50}, 800);
    });
    $('#bt-forum').click(function(){
        $('body,html').animate({scrollTop:$('#forum').offset().top-50}, 800);
    });
    $('#bt-intro').click(function(){
        $('body,html').animate({scrollTop:$('#intro').offset().top-50}, 800);
    });
    $('#bt-highlight').click(function(){
        $('body,html').animate({scrollTop:$('#highlight').offset().top-50}, 800);
    });
    $('#bt-article').click(function(){
        $('body,html').animate({scrollTop:$('#article').offset().top-50}, 800);
    });
});

//手風琴
/*------------------------
        ACCORDION
------------------------*/
class Accordion {

    constructor(options = {}) {
      this.accordSelector = options.selector ? options.selector : '.accordion';
      this.accordSelectorTitle = options.selectorTitle ? options.selectorTitle : '.accordion__title';
      this.accordSelectorInner = options.selectorInner ? options.selectorInner : '.accordion__inner';
      this.classOpened = options.classOpenedName ? options.classOpenedName : 'accordion--opened';
      this.onlyOneOpened = options.onlyOneOpened ? options.onlyOneOpened : false;
      
      if (this.isInit()) {
        console.warn(`Accordion component with class selector "${this.accordSelector}" is already initialized`);
        return;
      }
  
  
      if (document.querySelector(this.accordSelector)) {
        document.addEventListener('click', e => this.onClick(e));
      } else {
        console.warn(`Accordion component with class selector "${this.accordSelector}" is not found`);
        return;
      }
      
    }
  
    isInit() {
      
      this.allAccord = document.querySelectorAll(this.accordSelector);
      let error = false;
    
      for(let i = 0; i < this.allAccord.length; i++) {
        
        if (this.allAccord[i].classList.contains('initiated')) {
          error = true;
          break;
  
        } else {
          this.allAccord[i].classList.add('initiated');
        }
      }
  
      return error;
    }
  
    onClick(e) {
      
      if (e.target.classList.contains(this.accordSelectorTitle.split('.')[1]) || e.target.closest(this.accordSelectorTitle)) {
  
        this._elem = e.target.closest(this.accordSelector);
        this.content = this._elem.querySelector(this.accordSelectorInner);
  
        if (this.content.style.maxHeight && this.content.style.maxHeight !== '0px') {
          this.close(this._elem );
  
        } else {
          this.open();
        }
      }
    }
  
    close(elem) {
      elem.querySelector(this.accordSelectorInner).style.maxHeight = '0px';
      elem.classList.remove(this.classOpened);
    }
  
    open() {
  
      if (this.onlyOneOpened) {
  
        this.allAccord.length && this.allAccord.forEach(accor => {
          this.close(accor);
        })
      }
  
      this.content.style.maxHeight = this.content.scrollHeight + "px";
      this._elem.classList.add(this.classOpened);
    }
  }
  
  new Accordion({
    onlyOneOpened: false, 
  });
  



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