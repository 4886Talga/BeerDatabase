/**
 * Function that render beers to stage deppending on send criteria
*/
function renderBeers(objToRender, section){	
	
	document.getElementById(section).innerHTML = "";
	var beerHolder = document.getElementById(section);
	
	for(var i = 0; i<objToRender.length; i++){
		
			beerHolder.innerHTML += `<div class="col-12 col-sm-6 col-md-2 beer-single">
			<img class="img-beer img-fluid" src="${objToRender[i].image_url}" alt="">
			<section class="content-holder">
			<div class="content">
				<h1>${objToRender[i].name}</h1>
				<h2>${objToRender[i].tagline}</h2>
				<p id="storyline" class="card-text overflow-ellipsis">${objToRender[i].description}</p>
			</div>			
		</section>		
		<footer class="footer">
			<div class="arrow">
				<a href="#" class="info" onclick=showBeerDetails(${objToRender[i].id})><i class="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i></a>
			</div>
			<div class="footer-front">
				<h1>Stone 21st Anniversary Celebration & Invitational Beer Festival</h1>
				<h2>August 18 & 19</h2>
			</div>
		</footer>
		
	</div>`;
			
	
	}
/*	var row = document.createElement('div');
	row.setAttribute('class', 'row');
	row.setAttribute('id', 'firstRow');

for(var i = 0; i < objToRender.length; i++){


	var cardHolder = document.createElement("div");
	cardHolder.setAttribute("class", "col-xs-12 col-sm-4 col-md-2 card");

	var posterImg = document.createElement("img");
	var cardBlock = document.createElement("div");
	var beerName = document.createElement("h4");
	var textNodeH4 = document.createTextNode(objToRender[i].name + " - " + objToRender[i].first_brewed);
	var cardFooter = document.createElement("div");
	var readMore = document.createElement("small");
	var textNodeReadMore = document.createTextNode("Read more");
	
	beerName.appendChild(textNodeH4);
	readMore.appendChild(textNodeReadMore);
	
	cardBlock.setAttribute("class", "card-block");
	beerName.setAttribute("class", "card-title");
	cardFooter.setAttribute("class", "card-footer");
	posterImg.setAttribute("src", objToRender[i].image_url);
	posterImg.setAttribute('class', 'img-beer');
	readMore.setAttribute("class", "text-muted");
	readMore.setAttribute("data-movieid", objToRender[i].id)
		
	let beerId = objToRender[i].id
	cardFooter.addEventListener( "click", function () {
		showBeerDetails(beerId);
		
	});

	row.appendChild(cardHolder);
	cardHolder.appendChild(posterImg);
	cardHolder.appendChild(cardBlock);	
	cardBlock.appendChild(beerName);
	cardHolder.appendChild(cardFooter);
	cardFooter.appendChild(readMore);
	document.getElementById('content').innerHTML = "";
	document.getElementById('content').appendChild(row);
	}*/
			
}
/**
 * Function that give us beers details
 * Supplie our modal with movie data
 *@param {Object} - movieById
*/
function renderBeerByIdModal(beerById){
	
	var beerModal = $('#beerDetailsModal');
	
	beerModal.find('#beerImage').attr('src', beerById[0].image_url);
	
	beerModal.find('#tips').text(beerById[0].brewers_tips);
	
	beerModal.find('#beerName').text(`${beerById[0].name}(${beerById[0].first_brewed})`);
	
	beerModal.find('#story').text(beerById[0].description);
	
	beerModal.find('#malt').text(`Malt: ${beerById[0].ingredients.malt.map((objMalt)=>objMalt.name)}`);
	
	beerModal.find('#hops').text(`Hops: ${beerById[0].ingredients.hops.map((objHop)=>objHop.name)}`);
	
	beerModal.find('#yeast').text(`Yeast: ${beerById[0].ingredients.yeast}`);
	
	beerModal.find('#foodPairing').text(beerById[0].food_pairing.map((food)=>(` ${food} `)));
	
	beerModal.modal('show');
	
}

/**
 * Function that render index page with random beers
*/
function renderRandomBeers(objToRender, section, numberOfRandomBeers){
	
	var beerHolder = document.getElementById(section);
	
	for(var i = 0; i<objToRender.length; i++){
		
			beerHolder.innerHTML += `<div class="col-12 col-sm-6 col-md-3 beer-single">
			<img class="img-beer img-fluid" src="${objToRender[i].image_url}" alt="">
			<section class="content-holder">
			<div class="content">
				<h1>${objToRender[i].name}</h1>
				<h2>${objToRender[i].tagline}</h2>
				<p id="storyline" class="card-text overflow-ellipsis">${objToRender[i].description}</p>
			</div>			
		</section>		
		<footer class="footer">
			<div class="arrow">
				<a href="#" class="info" onclick=showBeerDetails(${objToRender[i].id})><i class="fa fa-long-arrow-right fa-lg" aria-hidden="true"></i></a>
			</div>
			<div class="footer-front">
				<h1>Stone 21st Anniversary Celebration & Invitational Beer Festival</h1>
				<h2>August 18 & 19</h2>
			</div>
		</footer>
		
	</div>`;
			
	
	}
	}
	
	
		

	
	
	
	
	
/*	

var row = document.createElement('div');
	row.setAttribute('class', 'row');
	row.setAttribute('id', 'firstRow');

for(var i = 0; i < objToRender.length; i++){


	var cardHolder = document.createElement("div");
	cardHolder.setAttribute("class", "col-xs-12 col-sm-4 col-md-3 card");

	var posterImg = document.createElement("img");
	var cardBlock = document.createElement("div");
	var beerName = document.createElement("h4");
	var textNodeH4 = document.createTextNode(objToRender[i].name + " - " + objToRender[i].first_brewed);
	var cardFooter = document.createElement("div");
	var readMore = document.createElement("small");
	var textNodeReadMore = document.createTextNode("Read more");
	
	beerName.appendChild(textNodeH4);
	readMore.appendChild(textNodeReadMore);
	
	cardBlock.setAttribute("class", "card-block");
	beerName.setAttribute("class", "card-title");
	cardFooter.setAttribute("class", "card-footer");
	posterImg.setAttribute("src", objToRender[i].image_url);
	posterImg.setAttribute('class', 'img-beer img-fluid');
	//posterImg.setAttribute('class', 'img-fluid');
	readMore.setAttribute("class", "text-muted");
	readMore.setAttribute("data-movieid", objToRender[i].id)
		
	let beerId = objToRender[i].id
	cardFooter.addEventListener( "click", function () {
		showBeerDetails(beerId);
		
	});

	row.appendChild(cardHolder);
	cardHolder.appendChild(posterImg);
	cardHolder.appendChild(cardBlock);	
	cardBlock.appendChild(beerName);
	cardHolder.appendChild(cardFooter);
	cardFooter.appendChild(readMore);
	document.getElementById('content').innerHTML = "";
	document.getElementById('content').appendChild(row);
	}*/
			

