$(function () {
    var formOtprData, otprRespText;
    var proverkaTel = function(formOtpr, data) {

        $('.provercaPhone__inputPhone , .provercaPhone-btnTwo').toggleClass('d-none', true).toggleClass('d-block', false);
        $('.provercaPhone__textPhone, .provercaPhone-btn').toggleClass('d-none', false).toggleClass('d-block', true);
        $('.modal').modal('hide');

        $(".provercaPhone-btn__false").click(function (event) {
            event.preventDefault();
            $('.provercaPhone__inputPhone , .provercaPhone-btnTwo').toggleClass('d-block', true).toggleClass('d-none', false);
            $('.provercaPhone__textPhone, .provercaPhone-btn').toggleClass('d-block', false).toggleClass('d-none', true);
            $('.provercaPhone__inputPhone').focus();
        });

        document.querySelector(".provercaPhone-btn__true").onclick = function (event) {
            event.preventDefault();
            $('#modal-proverca').modal('hide');
            alert(otprRespText);
        };

        if(formOtpr.id !== 'provercaPhone'){
            formOtprData = $(formOtpr).serializeArray()
            $(formOtpr).serializeArray().map(function(formData){
                if(formData['name'] === 'phone'){
                    $('#modal-proverca').modal('show');
                    document.querySelector('.provercaPhone__textPhone').textContent = formData['value'];
                    document.querySelector('.provercaPhone__inputPhone').value = formData['value'];
                }
            })
        }else{
            sessionStorage.setItem('formPhone', 1);
            data.push.apply(data, formOtprData);
            $('#modal-proverca').modal('hide');
        }
    }

    try {
        $('.equipment__card').each(function(event,el){
            var asd = $('.equipment__price span', el).text() * 1.27;
            $('.equipment__price-old span', el).text(asd.toFixed())
        })
    } catch (error) {
        console.log(error);
    }

    $("form").submit(function (event) {
        event.preventDefault();

        // проверка телефона (отключение лишних уведомлений)
        // if(typeof sessionStorage !== 'undefined'){
        //     if(sessionStorage.getItem('formSubmitted')){
        //         if(!confirm('Вы уже отправили заявку, повторить?')){return false}
        //     }else{
        //         sessionStorage.setItem('formSubmitted', 'true')
        //     }
        // }
        // проверка телефона (отключение лишних уведомлений) end
        var data = $(this).serializeArray();

        // проверка телефона
        sessionStorage.setItem('formPhone', 0);
        proverkaTel(this, data);
        // проверка телефона end

        data.push({
            name: "source",
            value: "Sadmarket"
        });
        data.push({
            name: "title",
            value: "Мотоблок"
        });
        data.push({
            name: "link",
            value: location.href
        });

        // console.log(JSON.stringify(data));
        // return false; // Testing

        $.ajax({
            type: "POST",
            url: "https://skidka-tut.by/action/index.php",
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            dataType: "json",
            data: data,
        }).done(function (response) {
            // проверка телефона (отключение лишних благодарностей)
            otprRespText = response.text;
            if(+sessionStorage.getItem('formPhone')){
                alert(response.text);
            }
            // проверка телефона (отключение лишних благодарностей) end
        }).fail(function (error, textStatus) {
            console.log(error, textStatus);
            alert('Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!');
        });

        // Event dispatcher for IE9+ included
        if(typeof(Event) === 'function') {
            document.dispatchEvent(new Event('app.form.send'));
        }else{
            var ev = document.createEvent('Event');
            ev.initEvent('app.form.send', false, false);
            document.dispatchEvent(ev);
        }

        //console.log(JSON.stringify(data))
        return false
    });

    $(".modal").on("shown.bs.modal", function () {
        window.location.hash = "modal"
    });
    $(".modal").on("hide.bs.modal", function (a) {
        "#modal" === window.location.hash && history.replaceState(null, null, " ")
    });
    $(window).on("hashchange", function (a) {
        "#modal" !== window.location.hash && $(".modal").modal("hide")
    });

    try {
        var presentDown = function(activData, timeout){
            if(activData !== sessionStorage.getItem('presentNumber')){
                sessionStorage.setItem('presentNumber', activData);
            }
            if(!activData){
                sessionStorage.setItem('presentNumber', 18);
                activData = 18;
            }
            if(timeout !== sessionStorage.getItem('presentNumber')){
                sessionStorage.setItem('presentTimeout', timeout);
            }
            if(!sessionStorage.getItem('presentNumber')){
                sessionStorage.setItem('presentTimeout', 10000);
                activData = 10000;
            }
    
            var decorateNumber = function(activData){
                $('.presentCol').each(function(ind, el){
                    $('span', el).each(function(item, index){
                        index.textContent = String(activData)[item];
                        if(index.textContent.length < 1){
                            index.parentNode.removeChild(index);
                        }
                    })
                })
                $('span', $('.presentCol__remainder')).each(function(item, index){
                    var remainderGifts = String(50-activData)[item];
                    if(item === 1){
                        switch (+remainderGifts) {
                            case 1:
                                $('.presentCol__gifts').text('подарок');
                                break;
                            case 2:
                                $('.presentCol__gifts').text('подарка');
                                break;
                            case 3:
                                $('.presentCol__gifts').text('подарка');
                                break;
                            case 4:
                                $('.presentCol__gifts').text('подарка');
                                break;
                            default:
                                $('.presentCol__gifts').text('подарков');
                                break;
                        }
                    }
                    index.textContent = remainderGifts;
                })
            }
    
            decorateNumber(+activData)
    
            if(+activData > 8){
                setTimeout(function(){
                    presentDown(--activData,Number(timeout)+10000);
                }, timeout)
            }
        }
        presentDown(sessionStorage.getItem('presentNumber'), sessionStorage.getItem('presentTimeout'))    
    } catch(error) {
		console.error(error)
	}

    try {
        $('.catalog__table a').click(function(){
            $('.catalog__table i').removeClass('animate__heartBeat')
        })
    } catch(error) {
		console.error(error)
	}

    $(".smoothscroll").click(function (event) {
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top - 100
                },
                400
            );
        }
    });

});
document.addEventListener("DOMContentLoaded", function () {

    /* NAV SCROLL AND POSITION FIXED */
    try {
        let headerMenu = document.getElementById("section-header");
        document.addEventListener("scroll", () => {
            if (window.pageYOffset >= 100) {
                headerMenu.classList.add("header_colored",);
            } else {
                headerMenu.classList.remove("header_colored");
            }
        });
    } catch (e) {
        console.error(e);
    }

    /* MOBILE MENU*/
    const showMenu = () => {
        document.querySelector('#mobile-btn_show').style.display = "none";
        var btn_close = document.querySelector('#mobile-btn_close');
        btn_close.style.cssText = `top: ${window.pageYOffset+10}px;display: block;`;
        btn_close.classList.add("animated", "slideInLeft");
        this.body.classList.add("body_hidden");
        this.body.classList.add("body_move");
        document.getElementById("mobile-menu").style.cssText = `top: ${window.pageYOffset}px; display: block;`;
    }

    const hiddenMenu = () => {
        event.target.style.display = "none";
        document.getElementById('mobile-btn_show').style.display = "block";
        document.getElementById("mobile-menu").style.display = 'none';
        this.body.classList.remove("body_hidden");
        this.body.classList.remove("body_move");
    }

    try {
        [...document.getElementsByClassName("mobile-menu__btn")][0].addEventListener("click", event => {
            if (event.target.parentElement.id === "mobile-btn_show") {
                showMenu();
            }
            if (event.target.id === "mobile-btn_close") {
                hiddenMenu();
            } 
        });
        document.getElementById("call").addEventListener("click", () => {
            this.body.classList.remove("body_hidden");
            this.body.classList.remove("body_move");
            this.body.children[0].children[0].style.display = "block";
            this.body.children[0].children[1].style.display = "none";
            document.getElementById("mobile-menu").style.display = "none";
        });
    } catch (error) {
        console.log(error);
    }
    
});