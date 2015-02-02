$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 20) {
        $(".scroll").addClass("visible");
    }
});