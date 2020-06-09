/* NAV SCROLL AND POSITION FIXED */
try {
    let scrollPosPrev = 0;
    window.addEventListener("scroll", function () {
        let currentScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (currentScroll == scrollPosPrev) return;
        if (currentScroll > scrollPosPrev) {
            document.getElementById("section-header-main").classList.add("show");
            document.getElementById("section-header-main").classList.add("colorTrigger");
            // document.getElementById("header-icons").style.opacity = 1;
        } else {
            document.getElementById("section-header-main").classList.remove("show");
            document.getElementById("section-header-main").classList.remove("colorTrigger");
            // document.getElementById("header-icons").style.opacity = 0;
        }
        scrollPosPrev = currentScroll;
    });
} catch (e) {
    console.error(e);
}