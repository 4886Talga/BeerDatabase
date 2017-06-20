/**
 * Function that list all movies in our movie database
 */

function showOurBeers(){
	
	//initMovieDatabase();
	var endpoint = 'beers?per_page=60';
	beerDatabase.ourBeers(endpoint);
		
}
/**
 * Function that give us beer details
 *@param {Integer} movieId
 */
function showBeerDetails(beerId){
	
	var endpoint =`beers/${beerId}`;
	beerDatabase.getBeerById(endpoint);
	
}
function collectUsersInput(){
	var searchText = document.getElementById('serch_text').value;
	var endpoint =`beers?food=${searchText.trim()}`;
	beerDatabase.freeTextSearch(endpoint);
}
/**
 * Function that filter beers by hops
*/
$('#beersByHops > a.dropdown-item').click(function() {
  	var searchText = $(this).text();
	var endpoint =`beers?hops=${searchText}&per_page=50`;
	console.log(endpoint);
	beerDatabase.ourBeers(endpoint);
});
/**
 * Function that filter beers by malt
*/
$('#beersByMalt > a.dropdown-item').click(function() {
  	var searchText = $(this).text();
	var endpoint =`beers?malt=${searchText}&per_page=50`;
	console.log(endpoint);
	beerDatabase.ourBeers(endpoint);
});