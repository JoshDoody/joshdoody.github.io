$(function() {
	 $('a[data-template]').click(function() { 
		 ga('send', {
		 	hitType: 'event',
		 	eventCategory: 'Link',
		 	eventAction: 'Choose raise request template',
		 	eventLabel: $(this).data('template'),
		 	nonInteraction: 1
		 });
	 })
});