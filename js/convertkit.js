---
---
jQuery(function() {
	// console.log("BYE!");
  var newHtmlOne = '';
  var newHtmlTwo = '';

  if (window.context === 'negotiate') {
		console.log("negotiate");
    newHtmlOne = '<script async data-uid="b531d99d25" src="https://f.convertkit.com/b531d99d25/4e577c86fe.js"></script>';
    newHtmlTwo = 'context1div2';
		console.log(newHtmlOne);
  } else if (window.context === 'negotiate-lowball') {
    newHtmlOne = '<script async data-uid="e4c30349cb" src="https://f.convertkit.com/e4c30349cb/706071ef59.js"></script>';
    newHtmlTwo = 'context3div2';
  } else if (window.context === 'interview') {
    newHtmlOne = '<script async data-uid="924b16269b" src="https://f.convertkit.com/924b16269b/684c090757.js"></script>';
    newHtmlTwo = 'context2div2';
  } else if (window.context === 'salary-questions') {
    newHtmlOne = '<script async data-uid="6e81b524d2" src="https://f.convertkit.com/6e81b524d2/19329f248b.js"></script>';
    newHtmlTwo = 'context2div2';
  } else if (window.context === 'raise') {
    newHtmlOne = '<script async data-uid="a67c23a86b" src="https://f.convertkit.com/a67c23a86b/0377f73051.js"></script>';
    newHtmlTwo = 'context3div2';
  } else if (window.context === 'promotion') {
    newHtmlOne = '<script async data-uid="bc826ce96f" src="https://f.convertkit.com/bc826ce96f/85b298718d.js"></script>';
    newHtmlTwo = 'context3div2';
  } else if (window.context === 'coach') {
		// Currently hard-coded for faster Drip-to-CK migration
    // newHtmlOne = 'context3div1';
    // newHtmlTwo = 'context3div2';
  }

  $("div.inline-ad").replaceWith(newHtmlOne);
  // $('#divTwoToReplace').html(newHtmlTwo);
});