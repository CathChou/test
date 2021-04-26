let progEvent = [ 
{name: '#article2-1', label: 'section-article2-1', send: 0},
{name: '#article2-2', label: 'section-article2-2', send: 0}
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
				'eventAction': '2021icareyousrf',
				'eventLabel': progEvent[i].label,
			});

		}

	}

}

$(document).on(
	"scroll",
	debounce(() => {
		checkAreaViewEvent();
	},30)
);
