(function ( $ ) {

    var expireTimestamp = 0;
    var timerReady = false;

    /**
     * Core DYMTimer countdown plugin for Jquery
     * @param options
     * @returns {$.fn.DYMTimer}
     * @constructor
     */
    $.fn.DYMTimer = function( options ) {

        var defaults = {
            campaign : null,
            contactId : null,
            template: 'Only {{DAY}} days, {{HOUR}} hours, {{MIN}} minute & {{SEC}} sec remaining.',
            domain: null,
            endMessage: 'This offer has expired',
            redirectUrl: null,
            endTime: null
        };

        var els = this;        // Stores the elements passed through the plugin
        var settings = $.extend( {}, defaults, options );

        if(!isInteger(settings.contactId)){
            settings.contactId = getQueryVal(settings.contactId);
        }

        if(settings.endTime){
            expireTimestamp = settings.endTime;
            timerReady = true;
            updateTimers(els, settings);
        } else {
            if(!settings.contactId){ console.log('contactId must be set'); return this;}
            if(!settings.campaign){ console.log('campaign must be set'); return this;}
            if(!settings.domain){ console.log('domain must be set'); return this;}
            getTimeRemaining(els, settings);
        }
        return this;
    };

    /**
     * Get the amount of time remaining from the time server
     */
    function getTimeRemaining(els, settings){

        $.get( settings.domain + '?contactId=' + settings.contactId + '&campaign=' + settings.campaign, function( data ) {
            expireTimestamp = data;
            timerReady = true;
            updateTimers(els, settings);
        });
    }

    /**
     * Update the HTML of all the available timers
     */
    function updateTimers(els, settings) {

        var timeNow = Math.floor(Date.now() / 1000);
        var timeLeft = expireTimestamp - timeNow;

        if(timeLeft > 0){

            els.each(function(){
                $(this).html(format_output(timeLeft, settings));
            });
            setTimeout(function(){updateTimers(els, settings)}, 1000);

        } else {

            els.each(function(){
                $(this).html(settings.endMessage);
                if(settings.redirectUrl != null){
                    setTimeout(function(){ document.location = settings.redirectUrl;}, 1000)
                }
            });

        }
    }


    /**
     * Format the countdown string, based on the provided template
     * @param time_left
     * @returns {string}
     */
    function format_output(time_left, settings) {
        var hours, minutes, seconds, days;
        seconds = time_left % 60;
        minutes = Math.floor(time_left / 60) % 60;
        hours = Math.floor(time_left / 3600) % 24;
        days = Math.floor(time_left / (3600 * 24));

        seconds = add_leading_zero( seconds );

        var daytext = (days == 1) ? 'day' : 'days';
        var hourtext = (hours == 1) ? 'hour' : 'hours';
        var mintext = (minutes == 1) ? 'min' : 'mins';
        var sectext = (seconds == 1) ? 'sec' : 'secs';

        var daysOut = days + ' ' + daytext;
        var hoursOut = hours + ' ' + hourtext;
        var minsOut = minutes + ' ' + mintext;
        var secsOut = seconds + ' ' + sectext;

        if(settings.template == null) {
            return 	((days > 0) ? daysOut + ', ' : '') +
                ((hours > 0 || days > 0) ? hoursOut+', ' : '') +
                ((minutes > 0 || hours > 0 || days > 0) ? minsOut +', ' : '') +
                secsOut;
        }

        return settings.template.replace('{{DAY}}', days)
            .replace('{{HOUR}}', hours)
            .replace('{{MIN}}', minutes)
            .replace('{{SEC}}', seconds)
            .replace('{{DAY_FULL}}', daysOut)
            .replace('{{HOUR_FULL}}', hoursOut)
            .replace('{{MIN_FULL}}', minsOut)
            .replace('{{SEC_FULL}}', secsOut);
    }


    /**
     * Add leading 0s to numbers that are smaller than 10
     * @param n
     * @returns {*}
     */
    function add_leading_zero(n) {
        if(n.toString().length < 2) {
            return '0' + n;
        } else {
            return n;
        }
    }

    /**
     * Returns the value of a variable in the query string
     * @param name
     * @returns {string}
     */
    function getQueryVal(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    function isInteger(x) {
        return x % 1 === 0;
    }


}( jQuery ));