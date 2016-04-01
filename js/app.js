(function() {
  (function($) {
    return $(function() {
      $(".js-multiple-choice").click(function(event) {
        var $button, choices_id;
        $button = $(this);
        choices_id = $button.attr('data-multiple-choices-id');
        $('#' + choices_id).toggle();
        $(".package__feature-details").hide();
        $(".js-expand").removeClass('expanded');
        event.preventDefault();
        return event.stopPropagation();
      });
      $(".js-multiple-choice-close").click(function(event) {
        event.preventDefault();
        return $(event.target).parents(".package__multiple-choices").hide();
      });
      $(".js-expand").click(function(event) {
        var $clicked, $details, expandId, offset;
        $clicked = $(event.target).closest('a');
        expandId = $clicked.attr('data-expand-id');
        $details = $("#" + expandId);
        if ($details.length === 0) {
          event.preventDefault();
          alert("Whoops! There is no div with the ID #" + expandId + ".");
          return;
        }
        if ($clicked.hasClass('expanded')) {
          $clicked.removeClass('expanded');
          $details.hide();
        } else if ($details.length) {
          $(".package__feature-details").hide();
          $details.toggle();
          $(".js-expand").removeClass('expanded');
          $clicked.toggleClass('expanded');
          offset = $clicked.offset();
          $details.css({
            top: offset.top + $clicked.outerHeight() + 10,
            left: 0
          });
        }
        event.preventDefault();
        return event.stopPropagation();
      });
      $(".js-close").click(function(event) {
        var $clicked;
        $clicked = $(event.target).closest('a');
        $(".package__feature-details").hide();
        $(".js-expand").removeClass('expanded');
        return event.preventDefault();
      });
      $("body").click(function(event) {
        if (!$(event.target).parents('.package__feature-details').length) {
          $(".package__feature-details").hide();
          $(".js-expand").removeClass('expanded');
          $(".package__multiple-choices").hide();
        }
        if (!$(event.target).parents('.package__multiple-choices').length) {
          $(".package__multiple-choices").hide();
          $(".package__feature-details").hide();
          return $(".js-expand").removeClass('expanded');
        }
      });
      $(".videoWrapper").each(function() {
        var attr;
        attr = $(this).attr('data-image-src');
        if (typeof attr !== typeof void 0 && attr !== false) {
          $(this).css('background-image', 'url(' + attr + ')');
          return $(this).css('background-size', 'cover');
        }
      });
      return $(".videoWrapper").click(function(event) {
        var char, currentSrc;
        event.preventDefault();
        $(this).addClass('clicked');
        currentSrc = $(this).find('iframe')[0].src;
        if (currentSrc.match(/youtube/)) {
          char = "?";
          if (currentSrc.match(/\?/)) {
            char = "&";
          }
          return $(this).find('iframe')[0].src += char + "autoplay=1";
        }
      });
    });
  })(jQuery);

}).call(this);
