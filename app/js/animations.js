/**
 * Function that animate arrow
 */
//As I are creating elements dynamically, I need to use Event Delegation using .on() delegated-events approach.
$(document).on('mouseenter','.beer-single', function(){
	
	let arrow = $(this).find('.arrow');
	
	//alert(arrow.css('left'));
	
	if(arrow.css('left') < 90+"%"){
		//alert('test');
		arrow
	        .animate({left: '45%',opacity: '1'}, 500, "linear");
	}else{
		
		arrow.css("left", "10%");
		arrow
			.animate({left: '45%',opacity: 'toggle'}, 500, "linear");
		
		
	}
});
	
$(document).on('mouseleave','.beer-single', function(){
	$(this).find(".arrow")
		.animate({left: '90%', opacity: "toggle"}, 500, "linear")
		;
});

