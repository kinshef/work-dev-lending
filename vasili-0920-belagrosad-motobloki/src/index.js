$(document).ready(function () {
    // Form submit
    $("form").submit(function (event) {
        event.preventDefault();

        if (typeof sessionStorage !== 'undefined') {
            if (sessionStorage.getItem('formSubmitted')) {
                if (!confirm('Вы уже отправили заявку, повторить?')) {
                    return false
                }
            } else {
                sessionStorage.setItem('formSubmitted', 'true')
            }
        }
        var data = $(this).serializeArray();
        data.push({
            name: "source",
            value: "Belagrosad"
        });
        data.push({
            name: "title",
            value: "Мотоблок"
        });
        data.push({
            name: "link",
            value: location.href
        });

        // Testing
        // console.log(JSON.stringify(data));
        // return false;

        $.ajax({
            type: "POST",
            url: "https://skidka-tut.by/action/index.php",
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            dataType: "json",
            data: data,
        }).done(function (response) {
            alert(response.text);
        }).fail(function (error, textStatus) {
            console.log(error, textStatus);
            alert('Извините, произошла ошибка запроса. Свяжитесь с менеджером по телефону!');
        });

        // Event dispatcher for IE9+ included
        if (typeof (Event) === 'function') {
            document.dispatchEvent(new Event('app.form.send'));
        } else {
            var ev = document.createEvent('Event');
            ev.initEvent('app.form.send', false, false);
            document.dispatchEvent(ev);
        }

        // console.log(JSON.stringify(data));
        // return false;
    });

    // Smooth scroll
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

    // jQuery mask on input
    $(document).ready(function () {
        jQuery(function (input) {
            input(".phone").mask("+375(99) 999-99-99")
        })
    });

    // Show header when user start scroll page
    var blockMenu = document.getElementById("section-navigation");
    $(document).scroll(function () {
        var top = $(document).scrollTop();
        // console.log(top);
        if (top > 910) {
            $(blockMenu).addClass("fixed");
        } else {
            $(blockMenu).removeClass("fixed");
        }
    });

    // Show and hidden mobile menu
    $("#navToggle").click(function () {
        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked");
    });
    $('[role="menuitem"]').click(function () {
        $("#navToggle").removeClass('active');
        $(".overlay").toggleClass("open");
        $("body").toggleClass("locked");
    });

    // owl-carousel settings
    $(".owl-carousel-products-img").owlCarousel({
        items: 1,
        nav: true,
        loop: true,
        autoHeight: true,
        navText: ['<i class="fa fa-lg fa-2x fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-lg fa-2x fa-angle-right" aria-hidden="true"></i>'],
    });
});


document.addEventListener("DOMContentLoaded", function () {
    // для IE spread operator
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) symbols = symbols.filter(function (sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
            keys.push.apply(keys, symbols);
        }
        return keys;
    }

    function _objectSpread(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function (key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function (key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {value: value, enumerable: true, configurable: true, writable: true});
        } else {
            obj[key] = value;
        }
        return obj;
    }

    // для IE spread operator /

    try {
        /* ANIMATE NAVIGATION PROGRESS BAR */
        var bodyHeight = document.getElementById("body").offsetHeight - window.innerHeight;
        var progressBar = document.getElementById("progress-bar");
        var menuItem = _objectSpread([], document.getElementsByClassName("smoothscroll"));

        menuItem.forEach(function (menu) {
            menu.addEventListener("click", progressFill);
        });
        document.addEventListener("wheel", progressFill);
        document.addEventListener("touchmove", progressFill);

        function progressFill() {
            var point = window.pageYOffset;
            var number = Math.round(point * 100 / bodyHeight);
            progressBar.style.width = "".concat(number, "%");
        }

    } catch (error) {
        console.log(error);
    }

    //Cart simulation
    var localNewValue = function (key, nevValue, obgect) {
        var inquiry = JSON.parse(localStorage.getItem(key));
        if (obgect) {
            var Value = _objectSpread({}, inquiry, _defineProperty({}, obgect, _objectSpread({}, inquiry[obgect], {}, nevValue)));
        } else {
            var Value = _objectSpread({}, inquiry, {}, nevValue);
        }
        localStorage.setItem(key, JSON.stringify(Value));
    };

    var localDeleteValue = function (key, deleteObject) {
        var json = _objectSpread({}, oldJson);
        delete json[deleteObject];
        localStorage.setItem(key, JSON.stringify(json));
    };

    var eventHandler = function () {
        Array.prototype.forEach.call(document.querySelectorAll('.order-item'), function (item) {
            var itemProduct = item.querySelector('input[name="product"]').value;
            item.querySelector('.order-item__close').onclick = function () {
                localDeleteValue('cart', itemProduct)
                displayResult()
            };
            item.querySelector('.order-item__minus').onclick = function () {
                var nevValCol = --oldJson[itemProduct].col
                var nevValPrice = oldJson[itemProduct].onePrice * nevValCol;
                if (nevValCol > 0) {
                    localNewValue('cart', {col: nevValCol, price: nevValPrice}, itemProduct)
                    displayResult()
                } else {
                    localDeleteValue('cart', itemProduct)
                    displayResult()
                }
            };
            item.querySelector('.order-item__plus').onclick = function () {
                var nevValCol = ++oldJson[itemProduct].col
                var nevValPrice = oldJson[itemProduct].onePrice * nevValCol;
                localNewValue('cart', {col: nevValCol, price: nevValPrice}, itemProduct)
                displayResult()
            };

            item.querySelector('.order-item__col-span').onclick = function () {
                this.style.display = 'none';
                item.querySelector('.order-item__col-input').value = oldJson[itemProduct].col;
                item.querySelector('.order-item__col-input').style.display = 'block';
                item.querySelector('.order-item__col-input').focus()
            };
            item.querySelector('.order-item__col-input').onblur = function () {
                this.style.display = 'none';
                if (this.value > 0) {
                    var nevValPrice = oldJson[itemProduct].onePrice * this.value;
                    localNewValue('cart', {col: +this.value, price: nevValPrice}, itemProduct)
                } else {
                    localDeleteValue('cart', itemProduct)
                }
                displayResult()
                item.querySelector('.order-item__col-span').style.display = 'block';
            }

        })
    };


    var oldJson = JSON.parse(localStorage.getItem('cart'));
    if (oldJson === null) {
        localStorage.setItem('cart', JSON.stringify({}));
    }
    var displayResult = function () {
        document.querySelector('.modal-order__total-price').innerHTML = 0;
        oldJson = JSON.parse(localStorage.getItem('cart'));
        document.querySelector('.order-wrap').innerHTML = '';
        var itogCatalog = {itogPrice: 0, itogCol: 0};
        for (var key in oldJson) {
            itogCatalog.itogPrice = itogCatalog.itogPrice + oldJson[key].price;
            itogCatalog.itogCol = itogCatalog.itogCol + oldJson[key].col;
            document.querySelector('.order-wrap').innerHTML +=
                '<div class="order-item font-weight-light">' +
                '<input type="hidden" name="product" value="' + key + '">' +
                '<input type="hidden" name="productName-col" value="' + oldJson[key].title + '-' + oldJson[key].col + '">' +
                '<div class="row align-items-center text-center">' +
                '<div class="col-6 col-md-3">' +
                '<img src="' + oldJson[key].img + '" class="img-fluid" width="70" height="70" style="border-radius: 7px">' +
                '</div>' +
                '<div class="col-6 col-md-3 p-0 text-left">' +
                '<div class="form-item__title">' + oldJson[key].title + '</div>' +
                '</div>' +
                '   <div class="col-6 col-md-3 d-flex justify-content-between align-items-center">' +
                '       <span class="order-item__minus">' +
                '           <span class="fa-stack">' +
                '               <i class="fa fa-circle-thin fa-stack-2x"></i>' +
                '               <i class="fa fa-minus fa-stack-1x"></i>' +
                '           </span>' +
                '       </span>' +
                '       <span class="order-item__col-span">' + oldJson[key].col + '</span>' +
                '       <input class="order-item__col-input text-center" style="display: none;" type="number" name="order-item__col" />' +
                '       <span class="order-item__plus">' +
                '           <span class="fa-stack">' +
                '               <i class="fa fa-circle-thin fa-stack-2x"></i>' +
                '               <i class="fa fa-plus fa-stack-1x"></i>' +
                '           </span>' +
                '       </span>' +
                '   </div>' +
                '<div class="col-6 col-md-3 d-flex justify-content-around">' +
                '           <span class="order-item__price">' + oldJson[key].price + ' р.</span>' +
                '           <span class="order-item__close">' +
                '           <span class="fa-stack">' +
                '               <i class="fa fa-circle-thin fa-stack-2x"></i>' +
                '               <span class="fa-stack-1x">&#10005;</span>' +
                '           </span>' +
                '           </span>' +
                '       </div>' +
                '   </div>' +
                '</div>';
        }
        if (Object.keys(oldJson).length) {
            localNewValue('itogCatalog', itogCatalog);
            document.querySelector('.active-catalog').style.display = 'block';
            document.querySelector('.active-catalog__item').textContent = JSON.parse(localStorage.getItem('itogCatalog')).itogCol;
            document.querySelector('.active-catalog__col').textContent = JSON.parse(localStorage.getItem('itogCatalog')).itogPrice + ' р.';
            document.querySelector('.modal-order__total-price').textContent = JSON.parse(localStorage.getItem('itogCatalog')).itogPrice;
            eventHandler()
        } else {
            localStorage.removeItem('itogCatalog');
            document.querySelector('.active-catalog').style.display = 'none';
            $('.modal').modal('hide');
        }
    };
    displayResult();


    Array.prototype.forEach.call(document.querySelectorAll('.has-calculator'), function (item) {
        var itemProduct = item.querySelector('input[name="product"]').value;
        item.querySelector('.has-calculator__img').setAttribute('src', calculatorData[itemProduct].img);
        item.querySelector('.has-calculator__img').setAttribute('alt', calculatorData[itemProduct].title);
        item.querySelector('.has-calculator__title').textContent = calculatorData[itemProduct].title;
        item.querySelector('.has-calculator__Price').innerHTML = '<span>' + calculatorData[itemProduct].price + ' р.</span>';
        item.querySelector('.has-calculator__Price_old') && (item.querySelector('.has-calculator__Price_old').innerHTML = '<s>' + (calculatorData[itemProduct].price * 1.43).toFixed(0) + ' р.</s>');

        item.onclick = function () {
            if (event.target && event.target.getAttribute('data-target') === ('#modal-order')) {
                $('.modal').modal('hide');
                if (oldJson.hasOwnProperty(itemProduct)) {
                    var nevValCol = ++oldJson[itemProduct].col;
                    var nevValPrice = oldJson[itemProduct].onePrice * nevValCol;

                    localNewValue('cart', {col: nevValCol, price: nevValPrice}, itemProduct);
                    displayResult();
                } else {
                    var nevVal = {col: 1, onePrice: calculatorData[itemProduct].price};
                    var json = _objectSpread({}, oldJson, _defineProperty({}, itemProduct, _objectSpread({}, calculatorData[itemProduct], {}, nevVal)));
                    localStorage.setItem('cart', JSON.stringify(json));
                    displayResult();
                }

            }
        }
    });
    //Cart simulation /


    //bonus Calculator

    //change start page to Calculator steps
    document.querySelector('.calculator-start span.btn').onclick = function () {
        document.querySelector('.calculator-start').classList.add('active');
        setTimeout(function () {
            document.querySelector('.calculator-start').style.display = 'none';
            document.querySelector('.calculator-steps').style.display = 'block';
        }, 900);
    };
    //change start page to Calculator steps /

    var bonusSteps = document.querySelectorAll('.cost-calculation .options__block'),
        currentPage = 1,
        maxAllowPage = 2;

    //show Calculator steps progress
    function setProgressBar() {
        $('.steps_done').text(((currentPage - 1) / bonusSteps.length) * 100);
        $('#modal-calculate .progress-bar').css('width', ((currentPage - 1) / bonusSteps.length) * 100 + '%');
        $('.discount__value').text(((currentPage - 1) / bonusSteps.length) * 25);
    }

    setProgressBar();
    //show Calculator steps progress /

    //show expert prompt for current step /
    function showCurrentExpertPrompt(num) {
        $('.expert__prompt').removeClass('show');
        num === 1 && $('.prompt_first').addClass('show') && $('.expert').addClass('show');
        num === 2 && $('.prompt_second').addClass('show') && $('.expert').addClass('show');
        num > 2 && $('.expert').removeClass('show');
    }

    //show expert prompt for current step /

    //navigation buttons behavior
    var calculatorBtnNext = document.querySelector('.left-option a.next');
    var calculatorBtnPrev = document.querySelector('.left-option a.prev');

    function disabledBtn() {
        if (currentPage !== 1) {
            calculatorBtnPrev.classList.remove('disabled');
        } else {
            calculatorBtnPrev.classList.add('disabled');
        }
        if (currentPage < maxAllowPage) {
            calculatorBtnNext.classList.remove('disabled');
        } else {
            calculatorBtnNext.classList.add('disabled');
        }
    }

    calculatorBtnNext.onclick = function (event) {
        if (currentPage !== bonusSteps.length) {
            if (!calculatorBtnNext.classList.contains('disabled')) {
                currentPage++;
                showCurrentExpertPrompt(currentPage);
                calculatorBtnNext.href = "#calculationOption" + currentPage;

                var discountLabel = $('.value__label');
                $(discountLabel).text('+' + (1 / bonusSteps.length) * 25);
                $(discountLabel).addClass('show');
                setTimeout(function () {
                    $(discountLabel).removeClass('show');
                }, 1500);
            }
        } else if (currentPage === bonusSteps.length) {
            disabledBtn();
        } else {
            calculatorBtnPrev.href = '#calculationOption' + currentPage;
        }
        disabledBtn();
        setProgressBar();
    };
    calculatorBtnPrev.onclick = function () {
        if (currentPage !== 1) {
            if (!calculatorBtnPrev.classList.contains('disabled')) {
                currentPage--;
                showCurrentExpertPrompt(currentPage);
                calculatorBtnPrev.href = "#calculationOption" + currentPage;
            }
        } else {
            calculatorBtnPrev.href = '#calculationOption' + currentPage;
        }
        disabledBtn();
        setProgressBar();
    };
    //navigation buttons behavior /

    //first Calculator page & custom input[type=range] behavior
    var rangeLabel = $('.range__label');
    var formControlRange = $('#formControlRange');
    var forNumberRange = $('#forNumberRange');


    function setLabelPosition() {
        $(rangeLabel).css({'left': '' + (Number($(formControlRange).val() - 5) / (200 - 5)) * 100 + '%'});
        $(rangeLabel).text($(formControlRange).val());
    }

    $(forNumberRange).val(Number($(formControlRange).val()));
    setLabelPosition();

    $(formControlRange).on('change', function () {
        $(forNumberRange).val(Number($(formControlRange).val()));
        setLabelPosition();
        setCSSProperty();
    });

    $(formControlRange).on('input', function () {
        $(forNumberRange).val(Number($(formControlRange).val()));
        setLabelPosition();
        setCSSProperty();
    });

    $(forNumberRange).on('change', function () {
        $(formControlRange).val(Number($(this).val()));
        setLabelPosition();
        setCSSProperty();
    });

    //set current progress percent on input[type=range]
    const inputElement = document.querySelector('#formControlRange');

    function setCSSProperty() {
        const percent =
            ((inputElement.value - inputElement.min) /
                (inputElement.max - inputElement.min)) *
            100;
        inputElement.style.setProperty("--webkitProgressPercent", percent + '%');
    }

    setCSSProperty();
    //set current progress percent on input[type=range] /

    //first Calculator page & custom input[type=range] behavior /

    //indicate checked answers
    $('.answer input').change(function () {
        $(this).prop('type') === 'radio' && $(this).closest('.answer__variants').find('.answer').removeClass('active');
        $(this).closest('.answer').toggleClass('active');
    });
    //indicate checked answers /

    //tracking selected parameters
    var costCalculation = document.querySelector("form.cost-calculation")
    costCalculation.onchange = function () {
        var workTypes = costCalculation.querySelector(".calculation-options input[name='Вид работ']:checked");
        var optionalEquipment = costCalculation.querySelector(".calculation-options input[name='Навесное оборудование']:checked");
        var paymentMethod = costCalculation.querySelector(".calculation-options input[name='Способ оплаты']:checked");
        var date = costCalculation.querySelector(".calculation-options input[name='Срок поставки']:checked");
        if (workTypes) {
            calculatorBtnNext.classList.remove('disabled');
            maxAllowPage = 3;
            disabledBtn();
        } else {
            maxAllowPage = 2;
            disabledBtn();
        }
        if (optionalEquipment) {
            calculatorBtnNext.classList.remove('disabled');
            maxAllowPage = 4;
            disabledBtn();
        }
        if (paymentMethod && document.querySelector('.calculator-steps').style.display !== ('none')) {
            calculatorBtnNext.classList.remove('disabled');
            setTimeout(function () {
                maxAllowPage = 5;
                calculatorBtnNext.click();
            }, 300);
        }
        if (date && document.querySelector('.calculator-steps').style.display !== ('none')) {
            disabledBtn();
            setTimeout(function () {
                document.querySelector('.calculator-steps').style.display = 'none';
                document.querySelector('.calculator-submit').style.display = 'flex';
            }, 300);
        }
    };
    //tracking selected parameters /

    //show final Calculator page after Calculator form submit
    $('form.cost-calculation').submit(function () {
        $('.calculator-submit').css('display', 'none');
        $('.calculator-result').css('display', 'block');
    });
    //show final Calculator page after Calculator form submit /

    //mobile version widgets behavior
    $('.steps__discount_mobile  .sidebar_mobile__close').click(function () {
        $('.steps__discount_mobile').addClass('small');

    });

    $('.steps__discount_mobile .discount-wrapper').click(function () {
        $('.steps__discount_mobile').removeClass('small');

    });

    $('.steps__bonus_mobile .sidebar_mobile__close').click(function () {
        $('.steps__bonus_mobile').addClass('small');
    });

    $('.steps__bonus_mobile .discount-wrapper').click(function () {
        $('.steps__bonus_mobile').removeClass('small');

    });
    //mobile version widgets behavior /

    //smooth page change
    var anchors = document.querySelectorAll('.cost-calculation .left-option a[href*="#"]');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        var _loop = function _loop() {
            var anchor = _step.value;
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            });
        };

        for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            _loop();
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                // throw _iteratorError;
            }
        }
    }
    //smooth page change /
});
