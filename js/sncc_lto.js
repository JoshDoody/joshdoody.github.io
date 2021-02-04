$(document).ready(function(){
	var now = Math.floor(Date.now() / 1000);
	var expiry = now + 1800;
	
	if (Cookie.exists('expiry')) {
		console.log('already exists');
		var good_until = Cookie.get('expiry');
		var remaining = good_until - now;
		
		if(remaining > 0){
			$('.fsn-full-price').hide();
	    jQuery(function(){
	        jQuery('#countdownTimer').DYMTimer({
	            endTime: good_until,
	            endMessage: "We're redirecting you now!",
		          template: '<p><strong>DONT WAIT! YOUR CHANCE TO SAVE $50 ENDS IN...</strong> <strong>{{MIN}}</strong> min <strong>{{SEC}}</strong> SEC</p>',
	            redirectUrl: 'https://fearlesssalarynegotiation.com/salary-negotiation-video-course/'
	        });
	    });
			$('.fsn-sale-price').show();
		 }
	} else {
		console.log('no cookie');
		Cookie.set('expiry', expiry, {
		  expires: 3
		});
		$('.fsn-full-price').hide();
    jQuery(function(){
        jQuery('#countdownTimer').DYMTimer({
            endTime: expiry,
            endMessage: "We're redirecting you now!",
	          template: '<p><strong>DONT WAIT! YOUR CHANCE TO SAVE $50 ENDS IN...</strong> <strong>{{MIN}}</strong> min <strong>{{SEC}}</strong> SEC</p>',
            redirectUrl: 'https://fearlesssalarynegotiation.com/salary-negotiation-video-course/'
        });
    });
		$('.fsn-sale-price').show();
	}
 });