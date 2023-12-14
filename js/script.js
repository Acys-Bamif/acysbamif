/*Acys bamif script.js 14.01.2023*/

var slideIndex = -1,
	curSlide = document.getElementsByClassName('services'),
	start = '';

// create the portfolio modal content
function openModal(xx) {

	document.getElementById("modal").innerHTML ='<div><img src="'+ myProjects[xx].img +'"alt="'+ myProjects[xx].head +'">'+
	'<div>'+
	'<h3>'+ myProjects[xx].head +'</h3>'+
	'<h5>'+ myProjects[xx].tag +'</h5><hr>'+
	'<p>'+ myProjects[xx].info +'</p>'+
	'<a href="'+ myProjects[xx].link +'" target="blank">CHECK IT OUT</a>'+
	'<button class="closeButton" onclick="hideModal()">×</button></		div></div>';
	
	modal.style.display = "block";
}

//hide the portfolio modal
function hideModal() {
	modal.style.display = "none"
}

//portfolio modal content array
var myProjects = [
	
	{
		img:'images/isolaroptimum.jpg',
		head:'Solar Optimum',
		tag:'WORDPRESS WEB DEV',
		link:'https://solaroptimum.com',
		info:'Solar Optimum is an award-winning, elite-certified energy provider for homeowners and businesses in California, Nevada, Arizona and Florida, the site is designed with WordPress .'
	},{
		img:'images/isunpower.jpg',
		head:'SunPower',
		tag:'CUSTOM CODE WEB DEV',
		link:'https://us.sunpower.com',
		info:'SunPower is the perfect place to get residential solar, energy storage and EV charging solutions with over 40 years of dedicated solar experience.'
	},{
		img:'images/isilfabsolar.jpg',
		head:'Silfab Solar',
		tag:'WORDPRESS WEB DEV',
		link:'https://silfabsolar.com',
		info:'Silfab Solar is the North America leading manufacturer of long-tem reliable, maximum power density delivering solar panels, the site is designed with WordPress.'
	},{
		img:'images/isunrun.jpg',
		head:'Sunrun',
		tag:'CUSTOM CODE WEB DEV',
		link:'https://sunrun.com',
		info:'Sunrun is the #1 Home solar and battery company in America, they make sure you get ahead of your energy needs with cuttin-edge solar and home backup.'
	},{
		img:'images/isolaria.jpg',
		head:'Solaria',
		tag:'CUSTOM CODE WEB DEV',
		link:'https://solaria.com',
		info:'A Landing page for Solaria, one of Maxeon solar Technologies; a global leader in solar innovation, offering premium solar panels.'
	},{
		img:'images/isolarliberty.jpg',
		head:'Solar Liberty',
		tag:'WORDPRESS WEB DEV',
		link:'https://solarliberty.com',
		info:'Solar Liberty is the Largest Solar Panel installer in New York State, their site shows all the necessary information needed by customers for a great first impression.'
	}
];

(function () {
	"use strict";
	
// define variables
	var h2s = document.querySelectorAll(".sub-head");
	
// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	
//initialize the default look with js so that it does not affect the look when script is disabled
	for (var i = 0; i < h2s.length; i++) {
		h2s[i].classList.add("animate-h2");
	}
		
//call back function codes
	function callbackFunc() {
		for (var i = 0; i < h2s.length; i++) {
			if (isElementInViewport(h2s[i])) {
				h2s[i].classList.add("h2-inview");
			}
			else {
				h2s[i].classList.remove("h2-inview");
			}
		}
	}
	
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
})();

(function () {
	"use strict";
	
// define variables
	var h2s = document.querySelectorAll(".qualities-div div h3");
	
// check if an element is in viewport
// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
	function isElementInViewport(el) {
		var rect = el.getBoundingClientRect();
		return (
			rect.top >= 0 &&
			rect.left >= 0 &&
			rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
			rect.right <= (window.innerWidth || document.documentElement.clientWidth)
		);
	}
	
//initialize the default look with js so that it does not affect the look when script is disabled
	for (var i = 0; i < h2s.length; i++) {
		h2s[i].parentElement.parentElement.classList.add("animate-s-card");
	}
		
//call back function codes
	function callbackFunc() {
		for (var i = 0; i < h2s.length; i++) {
			if (isElementInViewport(h2s[i])) {
				h2s[i].parentElement.parentElement.classList.add("s-card-inview");
			}
			else {
				h2s[i].parentElement.parentElement.classList.remove("s-card-inview");
			}
		}
	}
	
	// listen for events
	window.addEventListener("load", callbackFunc);
	window.addEventListener("resize", callbackFunc);
	window.addEventListener("scroll", callbackFunc);
})();