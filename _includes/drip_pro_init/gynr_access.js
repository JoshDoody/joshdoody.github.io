function(payload, drip) {
    if (drip.is_anon) {
        alert('I dont know you');
    } else {
			if (drip.has_tag('CWYW - Began Course')) {
        alert('hello, tagged: '+payload.email);
			} else {
        alert('hello, UN-tagged: '+payload.email);
			}
    }
}