(function(window, document, $, undefined) {
  var $heroForm = $('#hero-FORM');
  var $footerForm = $('#footer-FORM');
  var isHeroFormSubmitted = localStorage.getItem('heroForm#submitted') === 'true';
  var isFooterFormSubmitted = localStorage.getItem('footerForm#submitted') === 'true';

  if (isHeroFormSubmitted) {
    $heroForm.hide();
  } else {
    $heroForm.on('submit', function(event) {
      $.post($heroForm.attr('action'), $heroForm.serialize());
      localStorage.setItem('heroForm#submitted', true);
      $heroForm.hide();
      event.preventDefault();
    });
  }

  if (isFooterFormSubmitted) {
    $('#contact').hide();
  } else {
    $footerForm.on('submit', function(event) {
      $.post($footerForm.attr('action'), $footerForm.serialize());
      localStorage.setItem('footerForm#submitted', true);
      $('#contact').hide();
      event.preventDefault();
    });
  }

}(window, document, jQuery));
