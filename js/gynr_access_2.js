$(document).ready(function () {
	//var drip_user = function(dripUser) {
		var drip_user = window._drip_pro.drip_contact;
		if(drip_user.anonymous) {
			console.log("Anonymous");
			$("#"+"anonymous").show();
		} else {
			if(drip_user.tags.indexOf('Started Workflow - Newsletter') !== -1){
				console.log("Subscriber, Tagged");
				$("#"+"gynr-customer").show();
			} else {
				console.log("Subscriber");
				$("#"+"subscriber").show();
			}
		}
		//};
	
	//dripSetup.init(drip_user);
});