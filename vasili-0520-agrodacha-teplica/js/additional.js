$(document).ready(function () {
    $(".owl-sales").owlCarousel({
        items: 1,
        loop: true,
        center: true,
        margin: 40,
        nav: true,
        navText: ['', ''],
        dots: true,
        responsiveClass: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 500,
        responsive: {
            992: {
                items: 2,
            }
        }
    });

    $(".owl-catalog").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        dots: true,
        autoHeight:true,
        navText: ['<i class="fa fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-2x fa-angle-right" aria-hidden="true"></i>'],
    });

    // try {
    //     // countdown
    //     let dateEnd = new Date();
    //     dateEnd.setDate(dateEnd.getDay() ? dateEnd.getDate() - dateEnd.getDay() + 8 : dateEnd.getDate() + 1);
    //     dateEnd.setHours(0, 0, 0);
    //     let countdown = new LightCountdown(".countdown-week", dateEnd, {animation: "animated flipInX", animationDuration: "600ms"});
    // } catch (e) {
    //     console.error(e);
    // }


});