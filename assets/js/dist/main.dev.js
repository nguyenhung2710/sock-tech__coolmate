"use strict";

jQuery(document).ready(function ($) {
  var window_height = $(window).height();
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var sec = $('.sec__animation');
    sec.each(function (e) {
      var $this = $(this);
      var offset = $this.offset().top;

      if (scroll >= offset - window_height * 0.4) {
        $this.addClass('sec__animation-default');
      }
    });
  });
});