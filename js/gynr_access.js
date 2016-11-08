// This knows about salary calculation things, but doesn't know about
// the DOM or jQuery.

function GYNRAccess() {}

GYNRAccess.prototype = {
  // What sort of access does this person have?
  access: function access(drip) {
		if (drip.is_anon) {
	    return {
	    	access: false,
				anonymous: true				
	    }
	  } else {
	    if (drip.has_tag('Purchased - GYNR')) {
				alert("Purchased - GYNR")
	      return {
	        access: true,
	        anonymous: false
	      }
	    } else {
				alert("Did not purchase GYNR")
	      return {
	        access: false,
	        anonymous: false
	      }
	    }
	  }
  }
};

function Page($jquery) {
  this.$ = $jquery;
};

$(document).ready(function () {
  var gynr_access = new GYNRAccess();
  var page = new Page($, new GYNRAccess());
});