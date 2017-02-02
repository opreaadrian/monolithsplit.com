(function(window, document, $, undefined) {
  var $heroForm = $('#hero-FORM');
  var $footerForm = $('#footer-FORM');
  var isHeroFormSubmitted = localStorage.getItem('heroForm#submitted') === 'true';
  var isFooterFormSubmitted = localStorage.getItem('footerForm#submitted') === 'true';
  var notifyMe = $('.navbar-right');
  var HIDE_ANIMATION_DURATION = 300;

  if (isHeroFormSubmitted) {
    $heroForm.hide();
    notifyMe.hide();
  } else {
    $heroForm.on('submit', function(event) {
      $.post($heroForm.attr('action'), $heroForm.serialize());
      localStorage.setItem('heroForm#submitted', true);
      $heroForm.hide(HIDE_ANIMATION_DURATION);
      notifyMe.hide(HIDE_ANIMATION_DURATION);
      event.preventDefault();
    });
  }

  if (isFooterFormSubmitted) {
    $('#contact').hide();
    notifyMe.hide();
  } else {
    $footerForm.on('submit', function(event) {
      $.post($footerForm.attr('action'), $footerForm.serialize());
      localStorage.setItem('footerForm#submitted', true);
      $('#contact').hide(HIDE_ANIMATION_DURATION);
      notifyMe.hide(HIDE_ANIMATION_DURATION);
      event.preventDefault();
    });
  }

  var $contactForm = $('#contact-form');
    if ($contactForm) {
    $contactForm.on('submit', function(event) {
      $.post($contactForm.attr('action'), $contactForm.serialize(), function() {
        $('#success-form').show();
      });
      event.preventDefault();
    });
  }
}(window, document, jQuery));
