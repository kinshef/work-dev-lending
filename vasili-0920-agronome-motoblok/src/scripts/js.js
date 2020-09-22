$(function () {

    $("form").submit(function (event) {
        event.preventDefault();

        if(typeof sessionStorage !== 'undefined'){
            if(sessionStorage.getItem('formSubmitted')){
                if(!confirm('Вы уже отправили заявку, повторить?')){return false}
            }else{
                sessionStorage.setItem('formSubmitted', 'true')
            }
        }
        var data = $(this).serializeArray();
        data.push({
            name: "source",
            value: "Test"
        });
        data.push({
            name: "title",
            value: "Test message"
        });
        data.push({
            name: "link",
            value: location.href
        });

        /*console.log(JSON.stringify(data));
        return false;*/ // Testing

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

    $("a.smoothscroll").click(function(a) {
        "" !== this.hash && (a.preventDefault(), a = this.hash, $("html, body").animate({
            scrollTop: $(a).offset().top
        }, 400))
    });

});
document.addEventListener("DOMContentLoaded", function () {

    // section-calculator
    try{
        var calculationPages = document.querySelectorAll('.calculation-pages>div');
        var calculatorBtnNextBottom = document.querySelector('.cost-calculation div.next-bottom');
        var calculatorBtnPrevBottom = document.querySelector('.cost-calculation div.prev-bottom');
        var pageTo = 0;
        function disabledBtn() {
            if(0 !== pageTo){
                calculatorBtnPrevBottom.classList.remove('disabled');
            }else{
                calculatorBtnPrevBottom.classList.add('disabled');
            }
            if(calculationPages.length-1 > pageTo){
                calculatorBtnNextBottom.classList.remove('disabled');
            }else{
                calculatorBtnNextBottom.classList.add('disabled');
            }
        }
        disabledBtn()
        calculatorBtnNextBottom.onclick = function () {
            if(!this.classList.contains('disabled')){
                calculationPages[pageTo].classList.remove('activ');
                pageTo++;
                calculationPages[pageTo].classList.add('activ');
                disabledBtn()
            }
        }
        calculatorBtnPrevBottom.onclick = function () {
            if(!this.classList.contains('disabled')){
                calculationPages[pageTo].classList.remove('activ');
                pageTo--;
                calculationPages[pageTo].classList.add('activ');
                disabledBtn()
            }
        }
    }catch (e) {
        console.error(e);
    }
    // section-calculator end



});












