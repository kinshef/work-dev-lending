document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.to_test a').addEventListener('click', ()=>{
        var input = document.querySelector('.to_test input');
        var asd;
        if(input.value[0] === '/'){
            asd = 'http://test.skidka-tut.by' + input.value;
        }else{
            asd = 'http://test.skidka-tut.by/' + input.value;
        }
        input.value = '';
        window.open(asd);
    })
})
