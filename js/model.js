/*---------------------BEER MODULE--------------------------------------*
/**
 *Implementing Module pattern
 *@return {Object} 
 */
var beerDatabase = (function (){
	
	// Root URL to beer PUNK API	  
	var rootUrl = 'https://api.punkapi.com/v2/';
	
	//Function that get conection to API and recive API reeturns
	function getPUNKAPI(endpoint,callback){
		
		$.ajax({
				url:rootUrl + endpoint,
				type: 'GET',
			
				success:function(data) {
					
					callback(data);
				},
				
				error: function(xhr){
					alert("An error occured: " + xhr.status + " " + xhr.statusText);
				}
            });
	}
	
	return {
		
	  // Public methods and variables
      ourBeers : function(endpoint){
		   
		   getPUNKAPI(endpoint, function(response){
			 
			   renderBeers(response, 'section-1');
		  });
		  
	  },
	  
	  getBeerById: function(endpoint){
		  
		  getPUNKAPI(endpoint, function(response){
			 
			  renderBeerByIdModal(response);
		  });
		  
	  },
	   freeTextSearch: function(endpoint){
		
			getPUNKAPI(endpoint, function(response){
			 
			  renderBeers(response, 'section-1');
		  });
		
		},
		filterBeersByHops: function(searchText, endpoint){
				//console.log(searchText);
			getPUNKAPI(endpoint, function(response){
				//console.log(response);
			  var filteredResponse = response.filter((objBeer)=>objBeer.ingredients.hops.filter((objHop)=>objHop.name === searchText));
			  
				//console.log(filteredResponse);
			 
			   renderBeers(filteredResponse, 'section-1');
		  });
		
		
		}
		
	};
})();
/*-------------------------------------------------------------------*/
