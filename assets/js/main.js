jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 600) {
            $(".sec-2__img").addClass("sec-2__animation");
        }
        if ($(document).scrollTop() > 1200) {
            $(".sec-3__img").addClass("sec-3__animation");
        }
        if ($(document).scrollTop() > 2300) {
            $(".h1st").addClass("h1st__animation");
        }
    });
});