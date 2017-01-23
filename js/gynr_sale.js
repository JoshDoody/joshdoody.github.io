---
---
var dripSetup = {
	init: function(successHandler) {
		_dcq.push(['identify', {
			success: function(payload) {
				var dripUser = {
					rawDripContact: payload,
					isAnon: payload.anonymous
				};
				
				successHandler(dripUser);
			}
		}]);
	}
};

$(document).ready(function () {
	var drip_user = function(dripUser) {
		
		if(dripUser.isAnon) {
			console.log("Anonymous");
			// Do nothing
		} else {
			if(dripUser.rawDripContact.tags.indexOf('Purchased - Get Your Next Raise') !== -1){
				console.log("Customer");
				// Do nothing - they already bought
			} else if(dripUser.rawDripContact.custom_fields && dripUser.rawDripContact.custom_fields.gynr_offer_expires){
				console.log("Subscriber, Sale");
				var now = Math.floor(Date.now() / 1000);
				var expiry = dripUser.rawDripContact.custom_fields.gynr_offer_expires;
				var remaining = expiry - now;
				console.log(remaining);
				if(remaining > 0){
					$('.gynr-full-price').each(function () {
						$(this).hide();
					})
					var clock = $('.clock').FlipClock(remaining, {
			        clockFace: 'DailyCounter',
			        countdown: true
			    })
					$('.gynr-sale-price').each(function () {
						$(this).show();
					})
				}
			}
		}
	};
	
	dripSetup.init(drip_user);
});