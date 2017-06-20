/**
 *Function that initialize our app 
 */
//beersDatabase.getInit();
/**
 * Function that list random beers 
 */

function showRandomBeers(){
	
	var numberOfRandomBeers = 8;
	var randomBeers ="";
	var finalRandomBeersEndpoint;
	
	for(var i = 0; i<numberOfRandomBeers; i++){
		
		randomBeers += Math.floor((Math.random() * 234) + 1) + "|";
		
	}
	finalRandomBeersEndpoint = randomBeers.substr(0, randomBeers.length-1);
	console.log(finalRandomBeersEndpoint);
	var endpoint = `beers?ids=${finalRandomBeersEndpoint}`;
	
	beerDatabase.ourRandomBeers(endpoint, numberOfRandomBeers);
	//beerDatabase.ourBeers(endpoint);
}

showRandomBeers();

var header = document.getElementById("section-0");
var navBar = document.getElementById("navbar");

var dropdowns = document.getElementsByClassName('nav-item');

var navbarHeight = navBar.offsetHeight;
var headerHeight = header.offsetHeight;

header.style.height = screen.height-navbarHeight;

function initParallax(){
	header.style.backgroundPosition =0+'px '+ (-(window.pageYOffset/10))+'px'; 
	var scrollBarPosition = window.pageYOffset || document.body.scrollTop;
	
	if(window.pageYOffset > headerHeight){
		navBar.style.position = "fixed";
		navBar.style.top = "0";
		
	}else{
		
		navBar.style.position = "absolute";
		navBar.style.top = "0";
		if(scrollBarPosition > 155){
			
			for(var i = 0; 1 < dropdowns.length; i++){
				
				dropdowns[i].className = "nav-item dropdown";
			}
			
		}else{
			for(var i = 0; 1 < dropdowns.length; i++){
				dropdowns[i].className = "nav-item dropup";
			}
		}
	}
	
	
}

window.addEventListener("scroll", initParallax);

