$(function () {
    /* Fixed Header */
    let header = $("#header");
    let headerH = header.height();
    let intro = $("#intro");
    let introH = intro.innerHeight();
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load", function () {

        scrollPos = $(this).scrollTop();

        if (scrollPos >= introH - headerH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    });

    /* Scroll */
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let elId = $(this).data('scroll');
        let elOffset = $(elId).offset().top;
        headerH = header.height();

        $("html, body").animate({
            scrollTop: elOffset - headerH + 20
        });
    });
});