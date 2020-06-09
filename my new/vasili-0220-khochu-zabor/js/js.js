$(function () {
    // Form submit
    $("form").submit(function (event) {
        event.preventDefault();

        if(typeof sessionStorage !== 'undefined'){
            if(sessionStorage.getItem('formSubmitted')){
                if(!confirm('Вы уже отправили заявку, повторить?')){return false}
            }else{
                sessionStorage.setItem('formSubmitted', 'true')
            }
        }
        debugger;
        var data = $(this).serializeArray();
        data.push({
            name: "source",
            value: "Agronext"
        });
        data.push({
            name: "title",
            value: "Теплица"
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










    $("#get-prices__range").ionRangeSlider({
        type: "double",
        min: 5,
        max: 130,
        max_postfix: " \u0438 \u0431\u043e\u043b\u0435\u0435",
        from: 20,
        to: 40,
        grid: !0,
        postfix: " \u043c2",
        onStart: function(a) {
            $("#get-prices__range__from").val(a.from);
            $("#get-prices__range__to").val(a.to)
        },
        onChange: function(a) {
            $("#get-prices__range__from").val(a.from);
            $("#get-prices__range__to").val(a.to)
        }
    });
    $("#get-prices__range__from").change(function() {
        $("#get-prices__range").data("ionRangeSlider").update({
            from: this.value
        })
    });
    $("#get-prices__range__to").change(function() {
        $("#get-prices__range").data("ionRangeSlider").update({
            to: this.value
        })
    });
    
    $("#get-prices__range_price").ionRangeSlider({
        type: "double",
        min: 400,
        max: 21E3,
        max_postfix: " \u0438 \u0431\u043e\u043b\u0435\u0435",
        from: 400,
        to: 2E3,
        grid: !0,
        postfix: " \u0440\u0443\u0431",
        onStart: function(a) {
            $("#get-prices__range_price_from").val(a.from);
            $("#get-prices__range_price_to").val(a.to)
        },
        onChange: function(a) {
            $("#get-prices__range_price_from").val(a.from);
            $("#get-prices__range_price_to").val(a.to)
        }
    });
    $("#get-prices__range_price_from").change(function() {
        $("#get-prices__range_price").data("ionRangeSlider").update({
            from: this.value
        })
    });
    $("#get-prices__range_price_to").change(function() {
        $("#get-prices__range_price").data("ionRangeSlider").update({
            to: this.value
        })
    })
})



document.addEventListener("DOMContentLoaded", function () {

// калькулятор
    var calculationPages = document.querySelectorAll('.calculation-pages>div');
    var calculatorBtnNambrTop = [];
    var calculationBtnPages = document.querySelector('.cost-calculation .calculation-btn-pages');
    (function(){
        var calculationBtnPagesHtml = '<span class="btn my-2 activ">1</span>';
        for(var i=1;i<calculationPages.length;i++){
            calculationBtnPagesHtml += '<i class="mx-4 fa fa-angle-double-right" aria-hidden="true"></i><span class="btn my-2">' + (i+1) + '</span>'
            calculationBtnPages.innerHTML = calculationBtnPagesHtml;
            calculatorBtnNambrTop = document.querySelectorAll('.cost-calculation .calculation-btn-pages span.btn');
        }    
    })()

    var calculatorBtnNextBottom = document.querySelector('.cost-calculation div.next-bottom');
    var calculatorBtnNextTop = document.querySelector('.cost-calculation div.next-top');
    var calculatorBtnPrevBottom = document.querySelector('.cost-calculation div.prev-bottom');
    var pageTo = 0;
    function disabledBtn() {
        Choosed()
        if(0 !== pageTo){
            calculatorBtnPrevBottom.classList.remove('disabled');
        }else{
            calculatorBtnPrevBottom.classList.add('disabled');
        }
        if(calculationPages.length-1 > pageTo){
            calculatorBtnNextBottom.classList.remove('disabled');
            calculatorBtnNextTop.classList.remove('disabled');
        }else{
            calculatorBtnNextBottom.classList.add('disabled');
            calculatorBtnNextTop.classList.add('disabled');
        }
    }
    disabledBtn()

    calculationBtnPages.onclick = function () {
        if(event.target && event.target.classList.contains('btn')) {
            for(var i = 0; i < calculatorBtnNambrTop.length; i++) {
                if(event.target == calculatorBtnNambrTop[i]) {
                    calculationPages[pageTo].classList.remove('activ');
                    calculatorBtnNambrTop[pageTo].classList.remove('activ')
                    pageTo = i;
                    calculationPages[pageTo].classList.add('activ');
                    calculatorBtnNambrTop[pageTo].classList.add('activ');
                    disabledBtn()
                }
            }
        }
    };

    calculatorBtnNextTop.onclick = function () {
        if(!this.classList.contains('disabled')){
            calculationPages[pageTo].classList.remove('activ');
            calculatorBtnNambrTop[pageTo].classList.remove('activ')
            pageTo++;
            calculationPages[pageTo].classList.add('activ');
            calculatorBtnNambrTop[pageTo].classList.add('activ');
            disabledBtn()
        }
    }
    calculatorBtnNextBottom.onclick = function () {
        if(!this.classList.contains('disabled')){
            calculationPages[pageTo].classList.remove('activ');
            calculatorBtnNambrTop[pageTo].classList.remove('activ')
            pageTo++;
            calculationPages[pageTo].classList.add('activ');
            calculatorBtnNambrTop[pageTo].classList.add('activ');
            disabledBtn()
        }
    }
    calculatorBtnPrevBottom.onclick = function () {
        if(!this.classList.contains('disabled')){
            calculationPages[pageTo].classList.remove('activ');
            calculatorBtnNambrTop[pageTo].classList.remove('activ')
            pageTo--;
            calculationPages[pageTo].classList.add('activ');
            calculatorBtnNambrTop[pageTo].classList.add('activ');
            disabledBtn()
        }
    }
// калькулятор /

// end page 
var progressBar = document.querySelector('.end-page__one .progress-bar');

function Choosed(){
    if(calculationPages[pageTo] == calculationPages[calculationPages.length-1]){
        var ulYouChoosed = '';
        var calculationFormRang = document.querySelectorAll('.cost-calculation input[type="text"]');
        for(var i=0;i<calculationFormRang.length;i++){
            if(calculationFormRang[i].dataset.range_text){
                ulYouChoosed += '<li class="mt-2 font-weight-bold">'+ calculationFormRang[i].dataset.range_text + ': от ' + calculationFormRang[i].value.split(';')[0] + ' до ' + calculationFormRang[i].value.split(';')[1] +'</li>';
            }
        }
        var calculationForm = document.querySelectorAll('.cost-calculation input:checked');
        for(var i=0;i<calculationForm.length;i++){
            ulYouChoosed += '<li class="mt-2 font-weight-bold">'+ calculationForm[i].value +'</li>';
            document.querySelector('.you-choosed').innerHTML = ulYouChoosed;
        }
        var calculationFormSelect = document.querySelectorAll('.cost-calculation select');
        for(var i=0;i<calculationFormSelect.length;i++){
            ulYouChoosed += '<li class="mt-2 font-weight-bold">'+ calculationFormSelect[i].value +'</li>';
            document.querySelector('.you-choosed').innerHTML = ulYouChoosed;
        }
        progressBar.style.width = '100%';
        setTimeout(function(){
            progressBar.style.width = '0%';
            document.querySelector('.end-page__one').style.display = 'none';
            document.querySelector('.end-page__two').style.display = 'block';
            document.querySelector('.end-page__two .end-page__nambr').textContent = Math.floor(Math.random() * (20 - 5 + 1)) + 5;
        },2000)
    } else{
        document.querySelector('.end-page__one').style.display = 'block';
        document.querySelector('.end-page__two').style.display = 'none';
    }
}

});












