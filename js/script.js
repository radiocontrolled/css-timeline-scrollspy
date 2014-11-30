/**
 * @author Alison Benjamin
 */



/* after the header is out of view
 * the nav should be fixed to top
 * */

var header = document.getElementsByTagName("header");
var nav = document.getElementById("gumshoeNav");

window.onscroll = function (event) {
		
	//current position
	var position = window.scrollY;
	
	/* if header no longer in viewport
	 * then nav should be fixed
	 */
	if (position > header[0].offsetHeight){

		nav.style.position = "fixed";
		nav.style.top = "10%";
		nav.style.width = "18.5%";		
	}
	else {
		
		nav.style.position = "static";
		nav.style.width = "25%";
	}
	
};

/* initalise gumshoe scrollspy*/

var gumshoe = gumshoe.init();

/* smooth scroll init */ 
var smoothScroll = smoothScroll.init({
	updateURL: false
});










