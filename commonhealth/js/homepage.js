let progEvent = [ 
{name: '#kv)', label: 'section-subject-kv', send: 0},
{name: '#quiz', label: 'section-subject-qa', send: 0},
{name: '#info', label: 'section-subject-article', send: 0},
{name: '#post', label: 'section-subject-more', send: 0},
{name: '#video', label: 'section-subject-video', send: 0},
{name: '#official', label: 'section-subject-official', send: 0},
{name: '#reserve', label: 'section-subject-booking', send: 0}
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
