/**
 * Chat
 */
var app = {h:''};
/*var app = {h:'cHJvbW8udGVobm9zaG9wLmJ5'};
(function(w,d,s,l,i){
    var a = document.createElement(s);
    a.type = 'text/javascript';
    a.async = true;
    a.src = l;
    a.dataset.jvId = i;
    var aa = document.getElementsByTagName(s)[0];
    aa.parentNode.insertBefore(a, aa);
})(window, document, "script", "//code.jivosite.com/widget.js", "ZDd9MwFX5I");

/**
 * Analytics
 */
/*(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

ym(47791183, "init", {
    clickmap:true,
    trackLinks:true,
    accurateTrackBounce:true,
    webvisor:true
});

document.addEventListener('app.form.send', function (event) {
    ym(47791183, 'reachGoal', 'form_send');
});*/

(function(w,d,s){
    var a = document.createElement(s);
    a.type = 'text/javascript';
    a.src = 'https://cdn.jsdelivr.net/npm/magic-snowflakes@4.1.3/dist/snowflakes.min.js';
    a.addEventListener("load", function(){
        Snowflakes({count: 20, minOpacity: 0.4, maxOpacity: 0.8});
    });
    var aa = document.getElementsByTagName(s)[0];
    aa.parentNode.insertBefore(a, aa);
})(window, document, "script");