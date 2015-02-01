$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
        $(".accio").addClass("visible");
    }
});