$(document).ready(function(){
	function getParameterByName(name, url) { // function to get a specific url param value by name
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	var p = getParameterByName("expiry"); // get the value of 'expiry'
	
	if (p !== 'undefined' && p) { // only do something if 'sale_expiry' is present
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
	            template: '<p>This Offer ends in <strong>{{DAY}}</strong> days <strong>{{HOUR}}</strong> hours and <strong>{{MIN}}</strong> min</p>',
	            redirectUrl: 'https://fearlesssalarynegotiation.com/get-started/'
	        });
	    });
			$('.fsn-sale-price').show();
		}
	 }
 });