$(document).ready(function(){
	var p = 1545714000; // Hard coded for 00:00:00 December 25, 2018
	
	if (p !== 'undefined' && p) { // only do something if 'expiry' is present
		var now = Math.floor(Date.now() / 1000);
		var expiry = p;
		var remaining = expiry - now;
		console.log(remaining);
		if(remaining > 0){
			$('.fsn-full-price').hide();
	    jQuery(function(){
	        jQuery('#countdownTimer').DYMTimer({
	            endTime: expiry,
	            endMessage: "We're redirecting you now!",
	            template: '<p>🎄 Only <strong>{{DAY}}</strong> days <strong>{{HOUR}}</strong> hours <strong>{{MIN}}</strong> min to Christmas! 🎄</p>',
	            redirectUrl: 'https://fearlesssalarynegotiation.com/products/'
	        });
	    });
			$('.fsn-sale-price').show();
		}
	 }
 });