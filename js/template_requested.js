$(function() {
	 $('a[data-template]').click(function() { ga('send', 'event', 'Link', 'Choose raise request template', $(this).data('template')) })
});