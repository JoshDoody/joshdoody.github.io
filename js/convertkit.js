---
---
jQuery(function() {
  var newHtmlOne = '';
  var newHtmlTwo = '';

  if (window.context === 'negotiate') {
    newHtmlOne = '<script async data-uid="fc02377ce7" src="https://fsn.ck.page/fc02377ce7/index.js"></script>';
    newHtmlTwo = '<script async data-uid="b4886973fa" src="https://f.convertkit.com/b4886973fa/f5c5f1c1b7.js"></script>';
  } else if (window.context === 'negotiate-lowball') {
    newHtmlOne = '<script async data-uid="e4c30349cb" src="https://f.convertkit.com/e4c30349cb/706071ef59.js"></script>';
    newHtmlTwo = '<script async data-uid="75acccc04e" src="https://f.convertkit.com/75acccc04e/a7f913c23e.js"></script>';
  } else if (window.context === 'interview') {
    newHtmlOne = '<script async data-uid="924b16269b" src="https://f.convertkit.com/924b16269b/684c090757.js"></script>';
    newHtmlTwo = '<script async data-uid="7dfb11ffb6" src="https://f.convertkit.com/7dfb11ffb6/40897dba56.js"></script>';
  } else if (window.context === 'salary-questions') {
    newHtmlOne = '<script async data-uid="6e81b524d2" src="https://f.convertkit.com/6e81b524d2/19329f248b.js"></script>';
    newHtmlTwo = '<script async data-uid="db63da20f9" src="https://f.convertkit.com/db63da20f9/88785aad15.js"></script>';
  } else if (window.context === 'raise') {
    newHtmlOne = '<script async data-uid="a67c23a86b" src="https://f.convertkit.com/a67c23a86b/0377f73051.js"></script>';
    newHtmlTwo = '<script async data-uid="c80ce67c4d" src="https://f.convertkit.com/c80ce67c4d/66f1c9c588.js"></script>';
  } else if (window.context === 'promotion') {
    newHtmlOne = '<script async data-uid="bc826ce96f" src="https://f.convertkit.com/bc826ce96f/85b298718d.js"></script>';
    newHtmlTwo = '<script async data-uid="494ba8a0af" src="https://f.convertkit.com/494ba8a0af/6047bb3c9d.js"></script>';
  } else if (window.context === 'coach') {
	// Currently hard-coded for faster Drip-to-CK migration
    // newHtmlOne = 'context3div1';
    // newHtmlTwo = 'context3div2';
  }

  $("div.inline-ad").replaceWith(newHtmlOne);
  // $("div.modal-ad").replaceWith(newHtmlTwo);
});