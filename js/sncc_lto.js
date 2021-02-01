$(document).ready(function(){
	var now = Math.floor(Date.now() / 1000);
	var expiry = now + 1800;
	var remaining = expiry - now;
	console.log(remaining);
	if(remaining > 0){
		$('.fsn-full-price').hide();
    jQuery(function(){
        jQuery('#countdownTimer').DYMTimer({
            endTime: expiry,
            endMessage: "We're redirecting you now!",
	          template: '<p><strong>DONT WAIT! YOUR CHANCE TO SAVE $30 ENDS IN...</strong> <strong>{{MIN}}</strong> min <strong>{{SEC}}</strong> SEC</p>',
            redirectUrl: 'https://fearlesssalarynegotiation.com/get-started/'
        });
    });
		$('.fsn-sale-price').show();
	 }
 });