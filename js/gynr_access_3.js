window.drip_plinko = function(drip) {
	if (drip.is_anon) {
    return {
			// offer: 'promotion-course',
      // modal: 'promotion-course-modal'
    }
  } else {
		return {
			
		}
    /* if (drip.has_tag('Customer')) {
      return {
        offer: 'show_love',
        footer: 'we-love-our-customers'
      }
    } else {
      return {
        offer: 'product-ad',
        sidebar: 'product-sidebar',
        footer: 'product-footer'
      }
    } */
  }
}