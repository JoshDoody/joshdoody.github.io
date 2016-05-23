// This knows about salary calculation things, but doesn't know about
// the DOM or jQuery.
function SalaryLogic() {}

SalaryLogic.prototype ={
  // calculates the counteroffer.
  counter: function counter(offer, they_need_you, you_need_them, minimum) {
    console.log(arguments);
    // need is 0 -> .1 for how much more you should increase your counteroffer.
    var need = Math.max(0, they_need_you - you_need_them) * .01;
    raw_counter = Math.max(
      minimum, // never go lower than the minimum
      offer * (1.1 + need) // always counter at least 10% more, even if need is 0.
    );
		return round_nearest_1000(raw_counter);
  },

  // generates the data structure for the script w/ increments from your
  // initial offer to your counter.
  script_increments: function script_increments(offer, counteroffer, minimum_acceptable) {
    /*
     Increment calculation/rules
     - Up to 9 increments between offer and counter
     - Baseline for increments is $1k each
     - Only as many increments as needed to bridge gap between offer and counter
     - If more than 9 increments needed at $1k each, go to $2k per increment, if $2k won't work, go to $3k, then $4k, then $5k.
     - Once you hit $5k per increment, show up to 9 increments with a "..." for everything below the lowests of the 9 and above the offer.
     - Start counting UP from the offer when setting increments. (eg, if offer is $100k and counter is $115k, we would use $2k increments and the FIRST one would be $102k)
     */
    var increment = 1000;
    var disparity = parseInt(counteroffer - offer);
    if (disparity > 10000) { // more than 9 1k increments
      increment = round_nearest_10((disparity / 1000)) * 100;
    }
    var options = [];
    for (var i = 0; i < 11; i++) {
      var next_entry = offer + (increment * i);
      if (next_entry > counteroffer) {
        break;
      }
      options.unshift(next_entry);
    }
    var more_than_9 = counteroffer - (increment * 9) > offer;
    return {
      counters: options,
      more_than_9: more_than_9
    };
  }
	
	


};

function round_nearest_10(num) {
  return Math.ceil(num/10)*10;
}

function round_nearest_500(num) {
  return Math.round(num/500)*500;
}

function round_nearest_1000(num) {
  return Math.round(num/1000)*1000;
}

// formats a number to look like nice money. Discards cents, but can
// handle string inputs. 50000 -> $50,000
function pretty_money(number) {
  //return '$'+ Number(Number(number).toFixed(0)).toLocaleString();
	return '$'+ Math.round(number).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Page($jquery) {
  this.$ = $jquery;
};

Page.prototype = {
	
  set_counteroffer:  function (text) {
    this.$('.counteroffer-number').text(text);
  },

  set_original_offer: function (text) {
    this.$('.original-offer').text(pretty_money(text));
  },
	
  set_minimum_acceptable: function (text) {
    this.$('.minimum-acceptable').text(pretty_money(text));
  },
	
  set_benefits: function (text) {
		if( this.$('#benefit_1').val() ) {
			this.$('.benefit_1').text(this.$('#benefit_1').val());
			this.$('.benefit_1').closest('li').show();
		} else {
			this.$('.benefit_1').closest('li').hide();
		}
		
		if( this.$('#benefit_2').val() ) {
			this.$('.benefit_2').text(this.$('#benefit_2').val());
			this.$('.benefit_2').closest('li').show();
		} else {
			this.$('.benefit_2').closest('li').hide();
		}	
		
		if( this.$('#benefit_3').val() ) {
			this.$('.benefit_3').text(this.$('#benefit_3').val());
			this.$('.benefit_3').closest('li').show();
		} else {
			this.$('.benefit_3').closest('li').hide();
		}	
  },
	
  //set_benefit_2: function (text) {
  //  this.$('.benefit_2').text(get_benefit_2());
  //},
	//
  //set_benefit_3: function (text) {
  //  this.$('.benefit_3').text(get_benefit_3());
  //},

  get_offer: function () {
    return Number(this.$('#offer_amount').val().replace(',', ''));
  },

  get_they_need: function () {
    return Number($('#they_need_you').val());
  },
  
  get_you_need: function () {
    return Number($('#you_need_them').val());
  },

  minimum_acceptable: function () {
    return Number($('#minimum_acceptable').val().replace(',', ''));
  },

  show_counteroffer: function () {
    this.$('#counteroffer-section').slideDown();
    this.$('#counteroffer-script').show();
  },

  write_script: function (step_info) {
    // loop through step_info.counters to build up dom.
    this.$('.js-script').empty();
    for (var step in step_info.counters) {
      // Strip off the first and last entry (counter & offer
      // respectively) as those are handled specially in the template.
      if (step == 0 || step == step_info.counters.length - 1) {
        continue;
      }
      this.$('.js-script').append("<li><strong>" + pretty_money(step_info.counters[step])  + "</strong></li>");
    }
  }
};


$(document).ready(function () {
  $('#generate_script').click(function (e) {
    e.preventDefault();
    var logic = new SalaryLogic();
    var page = new Page($, new SalaryLogic());
    var minimum_acceptable = page.minimum_acceptable();
    var original_offer = page.get_offer();

    // calculate counteroffer here.
    var counteroffer = logic.counter(
      original_offer,
      page.get_they_need(),
      page.get_you_need(),
      page.minimum_acceptable()
    );

    page.set_counteroffer(pretty_money(counteroffer));
    page.set_original_offer(original_offer);
		page.set_minimum_acceptable(minimum_acceptable);
    page.write_script(logic.script_increments(original_offer, counteroffer, minimum_acceptable));
    page.show_counteroffer();
		page.set_benefits();
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