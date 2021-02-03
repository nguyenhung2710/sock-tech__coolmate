jQuery(document).ready(function ($) {
    $(window).scroll(function () {
        if ($(document).scrollTop() > 600) {
            //$(".sec-2__img").addClass("sec-2__animation");
            $(".sec-2__animation").addClass("sec-2__animation-default");
        }
        if ($(document).scrollTop() > 1200) {
            //$(".sec-3__img").addClass("sec-3__animation");
            $(".sec-3__animation").addClass("sec-3__animation-default");
        }
        if ($(document).scrollTop() > 2550) {
            //$(".h1st").addClass("h1st__animation");
            $(".h1st__animation").addClass("h1st__animation-default");
        }
    });
});