$(document).ready(function () {
	var drip_user = function(dripUser) {
		if(dripUser.rawDripContact.tags.indexOf('Purchased - TICS') !== -1){
			console.log("TICS_sale: Customer");
			$('.fsn-full-price').hide();
			$('.fsn-sale-price').show();
		}
	};
	
	dripSetup.init(drip_user);
});