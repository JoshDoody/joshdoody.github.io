window._drip_pro = new DripPro

window.drip_plinko = function(drip, page) {
	var response = {}
	var context = window.context
	
	
	if (context == 'home') {
		if (drip.is_anon) {
			response = {
				modal: drip.file('tics-modal-with-form'),
				footer: drip.file('tics-footer'),
				inline: drip.file('tics-inline')
			}
		} else {
			response = {
				footer: drip.file('fsn-footer'),
				inline: drip.file('fsn-inline')
			}
		}
	} else if (context == 'coach') {
		response = {
			offer: 'coach',
			modal: drip.file('coach-modal'),
			footer: drip.file('coach-footer'),
			inline: drip.file('coach-inline')
		}
	} else if (window.location.pathname.startsWith('/book')) {
		response = {
			offer: 'fsn',
			footer: drip.file('fsn-footer'),
			inline: drip.file('fsn-inline')
		}
	} else if (drip.is_anon) {
		if (context == 'raise') {
			response = {
				offer: 'salary-increase-template',
				modal: drip.file('salary-increase-template-modal-with-form'),
				footer: drip.file('salary-increase-template-footer'),
				inline: drip.file('salary-increase-template-inline')
			}
		} else if (context == 'negotiate') {
			response = {
				offer: 'salary-negotiation-template',
				modal: drip.file('salary-negotiation-template-modal-with-form'),
				footer: drip.file('salary-negotiation-template-footer'),
				inline: drip.file('salary-negotiation-template-inline-with-form')
			}
		} else if (context == 'negotiate-lowball') {
			response = {
				offer: 'salary-negotiation-lowball-template',
				modal: drip.file('salary-negotiation-lowball-template-modal-with-form'),
				inline: drip.file('salary-negotiation-lowball-template-inline-with-form')
				// footer: drip.file('salary-negotiation-lowball-template-footer'),
			}
		} else if (context == 'interview') {
			response = {
				offer: 'tics',
				modal: drip.file('tics-modal-with-form'),
				footer: drip.file('tics-footer'),
				inline: drip.file('tics-inline')
			}
		} else if (context == 'sales-page-interview') {
			response = {
				offer: 'interview-sample-chapter',
				modal: drip.file('interview-sample-chapter-modal-with-form'),
				inline: drip.file('interview-sample-chapter-inline')
			}
		} else if (context == 'salary-questions') {
			response = {
				offer: 'salary-question-scripts',
				modal: drip.file('salary-question-scripts-modal-with-form'),
				footer: drip.file('salary-question-scripts-footer'),
				inline: drip.file('salary-question-scripts-inline')
			}
		} else if (context == 'promotion') {
			response = {
				offer: 'promotion-course',
				modal: drip.file('promotion-course-modal-with-form'),
				footer: drip.file('promotion-course-footer'),
				inline: drip.file('promotion-course-inline')
			}
		}
	} else {
		// Disabling this for now - it pitches coaching and I'm booked up
		// if (context == 'negotiate') {
		// 	response = {
		// 		offer: 'coach',
		// 		modal: drip.file('coach-modal'),
		// 		footer: drip.file('coach-footer'),
		// 		inline: drip.file('coach-inline')
		// 	}
		// } else
		if (!drip.has_tag('Purchased - FSN - Bundle') && !context.startsWith('sales-page')) {
				response = {
					offer: 'fsn',
					footer: drip.file('fsn-footer'),
					inline: drip.file('fsn-inline')
				}
		}		
	}
			
					
	return response
}

window.survey_plinko = function(drip) {
	
}

window.drip_replacements = {
	
}

jQuery(function(){
  window._drip_pro.init({
    debug: false,
    template_path: '/ads/',
    survey_trigger: function() {
      return true // If a question is available, should the survey widget be triggered?
    },
    can_display: function(intent, options) {
      return true // Given the "intent" (like modal), should we show it on this page? Useful for checking to see if you're on the checkout page, etc. and forcing DPT offers to not show.
    },
    pre_init: function() {
      this.settings.track = this.settings.track.bind(this)
      // this.settings.score = this.settings.score.bind(this)
      // this.settings.increment_score = this.settings.increment_score.bind(this)
      // this.settings.content_leaderboard = this.settings.content_leaderboard.bind(this)
    },
    post_drip_response: function(payload) {
      this.settings.track()
			if(this.is_anon) {
				//console.log("Anonymous");
				$('[data-offer-plinko="optional"]').show();
				$('head').append('<style type="text/css">.drip-lightbox-wrapper { display: block; }</style>');
			}
      // this.settings.score()
      //
      // $.each(this.custom_fields(), function(key, value) {
      //   $('table').append(
      //     $('<tr>').append(
      //       $('<th>').text(key),
      //       $('<td>').text(value)
      //     )
      //   )
      // })
    },
    score: function(drip) {
      // var t = this
      // $('.category-name a').each(function() {
      //   var tag_name = $(this).text()
      //   tag_name = tag_name.toLowerCase().replace(/ /g, '_')
      //   t.settings.increment_score(tag_name, "12345")
      // })
    },
    increment_score: function(category, article_id) {
      // var posts_cache_count = 30
      // if (!article_id) return
      // var category_posts = (this.custom_fields()[category] || '').split(',')
      // category_posts.push(article_id)
      // this.add_custom_field(category, _.uniq(_.filter(category_posts)).join(','))
      // var recent_posts = (this.custom_fields()['recent_posts'] || '').split(',')
      // var o = {} ; o[category] = article_id
      // recent_posts.push(JSON.stringify(o))
      // this.add_custom_field('recent_posts', _.last(_.uniq(_.filter(recent_posts)), posts_cache_count).join(','))
    },
    content_leaderboard: function() {
      // var recent_posts = (this.custom_fields()['recent_posts'] || '').split(',')
      // recent_posts = _.map(_.filter(recent_posts), JSON.parse)
      // total_posts = recent_posts.length
      // var posts_summary = {}
      // _.each(recent_posts, function(tuple) {
      //   var key = _.keys(tuple)[0]
      //   var value = tuple[key]
      //   posts_summary[key] = posts_summary[key] || []
      //   posts_summary[key].push(value)
      // })
      // _.each(posts_summary, function(value, key) {
      //   percent = value.length / total_posts
      //   posts_summary[key] = percent
      // })
      // var posts_ranked = _.sortBy(_.pairs(posts_summary), function(arr) {
      //   return arr[1]
      // }).reverse()
      // return posts_ranked
    },
    track: function() {
      var traits = { anon: true }
      if (!this.is_anon) {
        traits = {
          anon: false,
          email: this.drip_contact.email,
          firstName: this.custom_fields()['MS_FNAME'],
          lastName: this.custom_fields()['MS_LNAME']
        }
        $.each(this.tags(), function(idx, key) {
          traits[key] = true
        })
      }

      traits = $.extend(traits, this.custom_fields())

			//var pageName = document.title.replace(' | Fearless Salary Negotiation','').replace(' | Get Your Next Raise','')
			//var pageURL = window.location.origin + window.location.pathname
			
			//removed window.location.origin to keep tags cleaner
			var pageURL = window.location.pathname
      
			if (pageURL.length && window.location.origin != 'http://localhost:4000') {
        this.add_tag('Read - ' + pageURL)
				//console.log("Tags: " + this.tags())
      }
    },
    survey_widget: function(survey, drip) {

    },
    renderers: {
		  modal: function(intent, content, options) {
				var dom = jQuery(content)
		    jQuery('body').append(dom)
				
				var ga_event_label = dom.find('#modal-cta').data("event-label")

				var modal_fired = false
				var modal_dismissed = false
				
	      // if you want to use the 'fire' or 'disable' fn,
	      // you need to save OuiBounce to an object
	      var _ouibounce = ouibounce(document.getElementById('modal-ad'), {
	        // aggressive: true,
	        timer: 0,
					cookieExpire: 7,
					sitewide: true,
	        callback: function() { 
						modal_fired = true
						if(window.ga && ga.loaded) {
							ga('send', {
								hitType: 'event',
								eventCategory: 'Modal',
								eventAction: 'Show ad',
								eventLabel: ga_event_label,
								nonInteraction: 1
							});
						}
					}
	      });
				
				var modal_disabled = _ouibounce.isDisabled();
				
				// -------- Adding "fire after delay" code to test with -------- //
				if(options.show == 'auto') {
				  // Creates a timeout to call `showModal` after 1s.
				  setTimeout(showModal, 3000);

				  function showModal() {
				    if (!modal_disabled && !modal_dismissed) {
				      _ouibounce.fire();
						 $('#slider-ad').slideUp('fast', function() {
							 $('#slider-ad').remove();
						 });
				    }
				  }
				}
				
				// -------- Adding "fire after delay" code to test with -------- //
								
			  function closeModal(ga_event_label) {
	        $('#modal-ad').hide();				
					if(!modal_disabled && modal_fired && !modal_dismissed) {
						modal_dismissed = true
					  ga('send', {
					  	hitType: 'event',
					  	eventCategory: 'Modal',
					  	eventAction: 'Close ad',
					  	eventLabel: ga_event_label,
					  	nonInteraction: 1
					  });
					}
			  }

	      $('body').on('click', function() {
	        closeModal(ga_event_label);
	      });

	      $('#modal-ad .modal-dismiss').on('click', function(e) {
					e.preventDefault();
	        closeModal(ga_event_label);
	      });

	      $('#modal-ad .modal').on('click', function(e) {
	        e.stopPropagation();
	      });
				
				// Set up a handler for the Click event on the modal ad
				var modal_cta_link = document.getElementById('modal-cta');
				var modal_click_event_action = modal_cta_link.dataset.eventAction;

				var ModalCTAClickHandler = function(event) {
				  // Prevents the browser from clicking the link
				  // and thus unloading the current page.
				  event.preventDefault();

				  // Creates a timeout to call `clickModalCTA` after 250ms.
				  setTimeout(clickModalCTA, 250);

				  // Keeps track of whether or not the link has been clicked.
				  // This prevents the link from being clicked twice in cases
				  // where `hitCallback` fires normally.
				  var ModalCTAClicked = false;

				  function clickModalCTA() {
				    if (!ModalCTAClicked) {
				      ModalCTAClicked = true;
						  modal_cta_link.removeEventListener('click', ModalCTAClickHandler);
					    modal_cta_link.click();
				    }
				  }

				  // Sends the event to Google Analytics and
				  // re-clicks the link once the hit is done.
					ga('send', {
						hitType: 'event',
						eventCategory: 'Modal',
						eventAction: modal_click_event_action,
						eventLabel: ga_event_label,
						nonInteraction: 1
					});
				};
				
				// Adds a listener for the "click" event.
				modal_cta_link.addEventListener('click', ModalCTAClickHandler);
			},			
			
		  footer: function(intent, content, options) {
		      var os = jQuery.extend({
						percent_scrolled_threshold: 25,
						windows_scrolled_threshold: 3
		      }, options)

		      if (this.dom_slider)
		          this.dom_slider.remove()
					
					var dptScope = this
		      var dom = jQuery(content)
					
					// Make sure the Ouibounce modal isn't waiting to be fired
					// Modal should only ever fire once for a user - includes ALL modals
					// var modal_dom_element = document.getElementById('modal-ad');
					// if (modal_dom_element != null) {
					// 	var modal = ouibounce(document.getElementById('modal-ad'));
					// 	var modal_waiting_to_be_fired = !modal.isDisabled();
					// }
					
					var ga_event_label = dom.find('#slider-cta').data("event-label")
					var cta_label = dom.find('#slider-cta').data("cta-label")
					this.dom_slider = dom
					
					// If this particular slider has already been dismissed, do nothing
          if (dptScope.storage.get(cta_label+'_dismissed')) return
						
		      jQuery('body').append(dom)
		      var has_scrolled = false
		      jQuery(window).scroll(function() {
		          var scroll_speed = 800;
		          var wintop = jQuery(window).scrollTop(),
		              docheight = jQuery(document).height(),
		              winheight = jQuery(window).height()
		          percent_scrolled = ((wintop / (docheight - winheight)) * 100)
		          if ((docheight - wintop) < 900) {
		              dom.removeClass('expanded')
		          } else if ((percent_scrolled > os.percent_scrolled_threshold) || (wintop > (winheight * os.windows_scrolled_threshold))) {
		              if (!has_scrolled) {
	                  this.debug('Displaying slider')
	                  has_scrolled = true
	                  $(document).trigger('dpt:slide', [new this.fn_helper(this), this])
										ga('send', {
											hitType: 'event',
											eventCategory: 'Slider',
											eventAction: 'Show ad',
											eventLabel: ga_event_label,
											nonInteraction: 1
										});
		              }
		              dom.addClass('expanded')
		          }
		      }.bind(this))
					
					// Set up a handler for the Click event on the slide-in ad
					var cta_link = document.getElementById('slider-cta');
					var click_event_label = cta_link.dataset.eventLabel;

					var ctaButtonHandler = function(event) {

					  // Prevents the browser from clicking the link
					  // and thus unloading the current page.
					  event.preventDefault();

					  // Creates a timeout to call `clickLink` after 250ms.
					  setTimeout(clickLink, 250);

					  // Keeps track of whether or not the link has been clicked.
					  // This prevents the link from being clicked twice in cases
					  // where `hitCallback` fires normally.
					  var linkClicked = false;

					  function clickLink() {
					    if (!linkClicked) {
					      linkClicked = true;
							  cta_link.removeEventListener('click', ctaButtonHandler);
						    cta_link.click();
					    }
					  }

					  // Sends the event to Google Analytics and
					  // re-clicks the link once the hit is done.
						ga('send', {
							hitType: 'event',
							eventCategory: 'Slider',
							eventAction: 'Click ad',
							eventLabel: click_event_label,
							nonInteraction: 1
						});
					};
					
					// Adds a listener for the "click" event.
					cta_link.addEventListener('click', ctaButtonHandler);

					$(function() {
					// dismiss when clicked
						var cta_dismissal_link = $('#slider-dismiss-cta');
						var ga_dismiss_event_label = $('#slider-cta').data("event-label");
						var dismiss_cta_label = $('#slider-cta').data("cta-label");

						cta_dismissal_link.click(function(event){
							 event.preventDefault();
							 $('#slider-ad').slideUp('fast', function() {
								 $('#slider-ad').remove();
							 });
							 ga('send', {
							 	hitType: 'event',
							 	eventCategory: 'Slider',
							 	eventAction: 'Close ad',
							 	eventLabel: ga_dismiss_event_label,
							 	nonInteraction: 1
							 });
							 
							 // localStorage to 'cookie' them so they don't see the ad again for 5 days
							 dptScope.storage.set(dismiss_cta_label+'_dismissed', '1', 5*86400000 );
						});
					});
		  },
			
		  inline: function(intent, content, options) {
		      var dom = jQuery(content)					
					var ga_event_label = dom.find('#inline-cta').data("event-label")
					var cta_label = dom.find('#inline-cta').data("cta-label")
					this.dom_inline = dom
											
					jQuery( "div.inline-ad" ).replaceWith(content);
					
					// Set up a handler for the Click event on the slide-in ad
					var cta_link = document.getElementById('inline-cta');
					if (cta_link) {
						var click_event_label = cta_link.dataset.eventLabel;
					};
					var ctaButtonHandler = function(event) {

					  // Prevents the browser from clicking the link
					  // and thus unloading the current page.
					  event.preventDefault();

					  // Creates a timeout to call `clickLink` after 250ms.
					  setTimeout(clickLink, 250);

					  // Keeps track of whether or not the link has been clicked.
					  // This prevents the link from being clicked twice in cases
					  // where `hitCallback` fires normally.
					  var linkClicked = false;

					  function clickLink() {
					    if (!linkClicked) {
					      linkClicked = true;
							  cta_link.removeEventListener('click', ctaButtonHandler);
						    cta_link.click();
					    }
					  }

					  // Sends the event to Google Analytics and
					  // re-clicks the link once the hit is done.
						ga('send', {
							hitType: 'event',
							eventCategory: 'Inline',
							eventAction: 'Click ad',
							eventLabel: click_event_label,
							nonInteraction: 1
						});
					};
					
					// Adds a listener for the "click" event.
					if (cta_link) {
						cta_link.addEventListener('click', ctaButtonHandler);
					};
		  }
    }
  })
})