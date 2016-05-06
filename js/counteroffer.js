// calculates the counteroffer.
function counter(offer, they_need_you, you_need_them, minimum) {
  console.log(arguments);
  // need is 0 -> .1 for how much more you should increase your counteroffer.
  var need = Math.max(0, they_need_you - you_need_them) * .01;
  return Math.max(
    minimum, // never go lower than the minimum
    offer * (1.1 + need) // always counter at least 10% more, even if need is 0.
  );
}

function Page($jquery) {
  this.$ = $jquery;
};

Page.prototype = {
  'set_counteroffer':  function (text) {
    this.$('.counteroffer-number').text(text);
  },

  'set_original_offer': function (text) {
    this.$('.original-offer').text(pretty_money(text));
  },

  'get_they_need': function () {
    return Number($('#they_need_you').val());
  },
  
  'get_you_need': function () {
    return Number($('#you_need_them').val());
  },

  'minimum_acceptable': function () {
    return $('#minimum_acceptable').val().replace(',', '');
  },

  'show_counteroffer': function () {
    this.$('#counteroffer-section').slideDown();
    this.$('#counteroffer-script').show();
  }
};

// formats a number to look like nice money. Discards cents, but can
// handle string inputs. 50000 -> $50,000
function pretty_money(number) {
  return '$'+ Number(Number(number).toFixed(0)).toLocaleString();
}


$(document).ready(function () {
  $('#generate_script').click(function (e) {
    e.preventDefault();
    var page = new Page($);
    var original_offer = $('#offer_amount').val().replace(',', '');

    // calculate counteroffer here.
    var counteroffer = counter(
      original_offer,
      page.get_they_need(),
      page.get_you_need(),
      page.minimum_acceptable()
    );

    page.set_counteroffer(pretty_money(counteroffer));
    page.set_original_offer(original_offer);
    page.show_counteroffer();
  });
	
  $('#they_need_you').slider({
    tooltip: 'always',
		formatter: function(value) {
			if(value <= 3){
        return value + ': Not much';
      }
			else if(value <= 6){
        return value + ': Somewhat';
      }
			else {
        return value + ': A lot';
      }
    }
  });
	
  $('#you_need_them').slider({
    tooltip: 'always',
		formatter: function(value) {
			if(value <= 3){
        return value + ': Not much';
      }
			else if(value <= 6){
        return value + ': Somewhat';
      }
			else {
        return value + ': A lot';
      }
    }
  });
});
