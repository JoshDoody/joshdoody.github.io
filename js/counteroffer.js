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

  'show_counteroffer': function () {
    this.$('#counteroffer-section').show();
    this.$('#counteroffer-script').show();
  }
};


$(document).ready(function () {
  $('#generate_script').click(function (e) {
    e.preventDefault();
    var page = new Page($);

    // calculate counteroffer here.
    var counteroffer = counter(
      $('#offer_amount').val().replace(',', ''),
      Number($('#they_need_you').val()),
      Number($('#you_need_them').val()),
      $('#minimum_acceptable').val().replace(',', '')
    );

    page.set_counteroffer('$'+ Number(counteroffer.toFixed(0)).toLocaleString());
    page.show_counteroffer();
  });
});
