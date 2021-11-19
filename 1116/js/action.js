//曝光事件(非互動事件語法)
let progEvent = [ 
    {name: '#result1', label: 'event-2021kindnessday-click-test-result1', send: 0},
    {name: '#result2', label: 'event-2021kindnessday-click-test-result2', send: 0},
    {name: '#result3', label: 'event-2021kindnessday-click-test-result3', send: 0},
    {name: '#result4', label: 'event-2021kindnessday-click-test-result4', send: 0},
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
        'eventCategory': 'web_web',
        'eventAction': '2021mental-health',
        'eventLabel': progEvent[i].label,
       });
    
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