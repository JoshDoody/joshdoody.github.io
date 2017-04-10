$(document).ready(function () {
	var drip_user = function(dripUser) {
		
		if(dripUser.isAnon) {
			console.log("FSN_sale: Anonymous");
			// Do nothing
			// commenting out 'if' because it's not bad to keep running the sale
			// after they buy - what if they want to upgrade?
			// if(dripUser.rawDripContact.tags.indexOf('Purchased - FSN - Bundle') !== -1){
			//	console.log("FSN_sale: Customer");
			// next section is ... } else if() { ... when this if is included
				// Do nothing - they already bought
		} else if(dripUser.rawDripContact.custom_fields && dripUser.rawDripContact.custom_fields.fsn_offer_expires){
			console.log("FSN_sale: Subscriber");
			var now = Math.floor(Date.now() / 1000);
			var expiry = dripUser.rawDripContact.custom_fields.fsn_offer_expires;
			var remaining = expiry - now;
			console.log(remaining);
			if(remaining > 0){
				$('.fsn-full-price').hide();
				var clock = $('.clock').FlipClock(remaining, {
		        clockFace: 'DailyCounter',
		        countdown: true
		    })
				$('.fsn-sale-price').show();
			}
		}
	};
	
	dripSetup.init(drip_user);
});