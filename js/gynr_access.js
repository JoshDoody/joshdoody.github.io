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
			$(".anonymous").each(function () {
				$(this).show();
			})
		} else {
			if(dripUser.rawDripContact.tags.indexOf('Purchased - Get Your Next Raise') !== -1){
				console.log("Subscriber, Tagged");
				$(".gynr-customer").each(function () {
					$(this).show();
				})
			} else {
				console.log("Subscriber");
				$(".subscriber").each(function () {
					$(this).show();
				})
			}
		}
	};
	
	dripSetup.init(drip_user);
});

// // The number comments are to guide you through the order that each statement will be hit.
// // ONE and TWO are before Drip responds, THREE onwards are after Drip responds.
//
// function DripUser() {}
//
// DripUser.prototype.init = function(successHandler) {
// 	// TWO
//   _dcq.push(['identify', {
// 	  success: function(payload) {
// 		  // THREE
// 		  his.successful_drip_response.call(this, payload);
// 		  // FIVE
// 		  successHandler(); // = do whatever's in the passed-in function.
// 	  }
//   }])
//   return this
// }
//
// DripUser.prototype.successful_drip_response = function(payload) {
// 	// FOUR
//   this.drip_contact = payload
//   this.is_anon = payload.anonymous
// }
//
// $(document).ready(function () {
// 	// ONE
//   var the_user = new DripUser().init(function() {
// 	  // anything in here will only happen after Drip responds
// 	  // SIX
// 	  console.log("I have my response from Drip");
//     console.log(the_user.is_anon);
//   });
// });
//
// function DripUser() {}
//
// DripUser.prototype.init = function() {
//   _dcq.push(['identify', { success: this.successful_drip_response.bind(this) }])
//   return this
// }
//
// DripUser.prototype.successful_drip_response = function(payload) {
//   this.drip_contact = payload
//   this.is_anon = payload.anonymous
// 	$.trigger("DripResponse", this);
// }
//
// $(document).ready(function () {
//   var the_user = new DripUser().init();
// });
//
// $(document.body).on("DripResponse", function(User){
//     console.log("I have my response from Drip");
//     console.log(User.is_anon);
// })

