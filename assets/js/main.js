jQuery(document).ready(function ($) {
    const window_height = $(window).height();
    $(window).scroll(function () {
        const scroll = $(window).scrollTop();
        const sec = $('.sec__animation');
        sec.each(function(e){
            const $this =  $(this);
            const offset = $this.offset().top;
            if(scroll >= offset - (window_height * 0.3)){
                $this.addClass('sec__animation-default');
            }
        });
    });
});