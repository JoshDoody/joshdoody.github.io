$(function() {
	 $('a[data-template]').click(function() { 
		 ga('send', {
		 	hitType: 'event',
		 	eventCategory: 'Link',
		 	eventAction: $(this).data('action'),
			eventLabel: $(this).data('template'),
		 	nonInteraction: 1
		 });
	 })
});