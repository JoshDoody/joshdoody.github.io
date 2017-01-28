$(document).ready(function () {
	var drip_user = function(dripUser) {
		
		if(dripUser.isAnon) {
			console.log("GYNR_access: Anonymous");
			$(".anonymous").show();
		} else {
			if(dripUser.rawDripContact.tags.indexOf('Purchased - Get Your Next Raise') !== -1){
				console.log("GYNR_access: Customer");
				$(".gynr-customer").show();
			} else {
				console.log("GYNR_access: Subscriber");
				$(".subscriber").show();
			}
		}
		
		// Example of personalization for future use
		// if(window.dripUser.rawDripContact.custom_fields.first_name){
		//	$('span.first_name').html(window.dripUser.rawDripContact.custom_fields.first_name);
		//	$('span.first_name').parent().show();
		// }
	};
	
	dripSetup.init(drip_user);
		
	$("#next-lesson").click(function() {
		var lesson_number = $(this).data('lesson-number');
		
		switch(lesson_number) {
			case 1:
				var next_lesson_one_word_name = "estimate"
				break;
			case 2:
				var next_lesson_one_word_name = "goal"
				break;
			case 3:
				var next_lesson_one_word_name = "build"
				break;
			case 4:
				var next_lesson_one_word_name = "write"
				break;
			case 5:
				var next_lesson_one_word_name = "ask"
				break;
			case 6:
				var next_lesson_one_word_name = "plan"
				break;
			case 7:
				var next_lesson_one_word_name = "thanks"
				break;
		 default:
				var next_lesson_one_word_name = "thanks"
		};
		
		 _dcq.push(["track", "Completed Lesson GYNR", {
		  "lesson_number": lesson_number,
			 "completed_by": "student",
		  success: function() { window.location = "{{ site.baseurl }}/get-your-next-raise/"+next_lesson_one_word_name; }
		 }]);
	});
});