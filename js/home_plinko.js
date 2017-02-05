$(document).ready(function () {
	var drip_user = function(dripUser) {
	
		// FSN Book ad box is shown by default
		if(dripUser.isAnon) {
			console.log("Anonymous");
			$(".tics-ad").show();
		};
	};
	
	dripSetup.init(drip_user);
});