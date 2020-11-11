//document.oncontextmenu=function(){return false};
document.ondragstart = function () {
    return false
};
document.oncopy = function () {
    return false
};

$(document).ready(function () {

    var timeoutID;
    var counter = 1;
    var slideAnimation = 1000;
    var prevcounter;


    function findBubble(counter) {
        bubbleDelay = 800;
        if (counter == 0) {
            $(".img-left").find("i[class^='img-']").each(function () {
                $(this).delay(bubbleDelay).queue(function () {
                    $(this).addClass('onLoad').dequeue();
                });
                bubbleDelay += 500;
            });
        }
        if (counter == 1) {
            $(".img-center").find("i[class^='img-']").each(function () {
                $(this).delay(bubbleDelay).queue(function () {
                    $(this).addClass('onLoad').dequeue();
                });
                bubbleDelay += 500;
            });
        }
        if (counter == 2) {
            $(".img-right").find("i[class^='img-']").each(function () {
                $(this).delay(bubbleDelay).queue(function () {
                    $(this).addClass('onLoad').dequeue();
                });
                bubbleDelay += 500;
            });
        }

    }

    function removeBubble() {
        $(".onLoad").each(function () {
            $(this).removeClass('onLoad');
        });
    }

    function slideDirection(direction) {
        prevcounter = counter;
        if (direction == 'next' && counter <= 2) {
            if (counter == 2) {
                counter = 0;
            } else {
                counter++;
            }
        }
        if (direction == 'back' && counter >= 0) {
            if (counter == 0) {
                counter = 2;
            } else {
                counter--;
            }
        }
    }

    function slideOpacityEffect(counter) {
        removeBubble();
        if (counter == 0 && prevcounter == 1) {
            $(".img-center").fadeTo(slideAnimation, 0, function () {
                $(this).hide();
                $(".img-left").fadeTo(slideAnimation, 1).show();
                findBubble(counter);
            });
        }
        if (counter == 0 && prevcounter == 2) {
            $(".img-right").fadeTo(slideAnimation, 0, function () {
                $(this).hide();
                $(".img-left").fadeTo(slideAnimation, 1).show();
                findBubble(counter);
            });
        }

        if (counter == 1 && prevcounter == 2) {
            $(".img-right").fadeTo(slideAnimation, 0, function () {
                $(this).hide();
                $(".img-center").fadeTo(slideAnimation, 1).show();
                findBubble(counter);
            });
        }
        if (counter == 1 && prevcounter == 0) {
            $(".img-left").fadeTo(slideAnimation, 0, function () {
                $(this).hide();
                $(".img-center").fadeTo(slideAnimation, 1).show();
                findBubble(counter);
            });
        }
        if (counter == 2 && prevcounter == 0) {
            $(".img-left").fadeTo(slideAnimation, 0, function () {
                $(this).hide();
                $(".img-right").fadeTo(slideAnimation, 1).show();
                findBubble(counter);
            });
        }
        if (counter == 2 && prevcounter == 1) {
            $(".img-center").fadeTo(slideAnimation, 0, function () {
                $(this).hide();
                $(".img-right").fadeTo(slideAnimation, 1).show();
                findBubble(counter);

            });
        }


    }

    $('.arrow-r').click(function () {
        slideDirection('next');
        slideOpacityEffect(counter);


    });
    $('.arrow-l').click(function () {
        slideDirection('back');
        slideOpacityEffect(counter);
    });

//Start animation when page loads
    findBubble(1);


//// Events on page scroll

    $('.left-sidebar li a,.menu a,.compare-btn,.btn-scroll').on('click', function () {

        var scrollAnchor = $(this).attr('data-scroll'),
            scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 120;

        $('body,html').animate({
            scrollTop: scrollPoint
        }, 500);

        return false;

    });


    $(window).scroll(function () {
        var windscroll = $(window).scrollTop();
        if(window.innerWidth > 576){
            if (windscroll >= 500) {
                $('#section-nav').css('display', 'block')
                $('body').addClass('scrolled');
                if (windscroll >= 600) {
                    $('body').addClass('is-left-sidebar');
                    $('section[data-anchor]').each(function (i) {
                        if ($(this).position().top - 200 <= windscroll + 140) {
                            $('.left-sidebar i.current').removeClass('current');
                            $('.left-sidebar i').eq(i).addClass('current');
                        }
                    });
                } else {
                    $('body').removeClass('is-left-sidebar');
                }
            } else {
                $('body').removeClass('scrolled').removeClass('is-left-sidebar');
                $('.left-sidebar i.current').removeClass('current');
                $('.left-sidebar i:first').addClass('current');
            }
        }else{
            $('body').addClass('scrolled');
            $('#section-nav').css('display', 'none');
        }
    }).scroll();


    $(".modal").click(function () {
        var docH = $(window).scrollTop();
        $(".reveal-modal").css({top: docH + 120});
        $(".reveal-modal-bg").show();


    });
    $(".call-back a").click(function (e) {
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var docH = $(window).scrollTop();
        $(".reveal-modal").css({top: docH + 120});
        $(".reveal-modal-bg-callback").show();
    });
    $(".close-reveal-modal").click(function () {
        $(".reveal-modal-bg,.reveal-modal-bg-callback").hide();
    });
});