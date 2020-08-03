$(document).ready(function () {
    $("#navToggle").click(function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
    });
    $('[role="menuitem"]').click(function () {
        $("#navToggle").removeClass('active');
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked");
    });
});