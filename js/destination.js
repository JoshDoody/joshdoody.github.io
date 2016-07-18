---
---
$(document).ready(function(){
	function getParameterByName(name, url) { // function to get a specific url param value by name
	    if (!url) url = window.location.href;
	    name = name.replace(/[\[\]]/g, "\\$&");
	    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
	        results = regex.exec(url);
	    if (!results) return null;
	    if (!results[2]) return '';
	    return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
	
	var p = getParameterByName("dest"); // get the value of 'dest'
	
	if (p !== 'undefined' && p) { // only do something if 'dest' is present
	  var rootUrl = "/"; // set the root url for the redirect
		var url = rootUrl + p; // build the entire redirect url
		 $.ajax({ // check to see if the redirect url exists and redirect only if it does
		     type: 'HEAD',
		     url: url,
		 success: function() {
		   window.location.href = url; // destination page exists, so reroute
		 },
		 error: function() {
		         // page does not exist so do nothing
		 }
		 });
	 }
 });