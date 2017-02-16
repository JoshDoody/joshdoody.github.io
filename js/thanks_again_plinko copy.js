$(document).ready(function () {
	var drip_user = function(dripUser) {
	
		// FSN Book ad box is shown by default
		if(dripUser.rawDripContact.tags.indexOf('Registered - Salary Mistakes course') !== -1 && !dripUser.rawDripContact.tags.indexOf('Purchased - Get Your Next Raise') !== -1) {
			console.log("Subscriber, Tagged");
			$(".fsn.ad-box").hide();
			$(".gynr.ad-box").show();
		};
	};
	
	dripSetup.init(drip_user);
});