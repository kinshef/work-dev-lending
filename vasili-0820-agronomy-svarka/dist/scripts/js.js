"use strict";$(function(){$("form").submit(function(a){if(a.preventDefault(),"undefined"!=typeof sessionStorage)if(!sessionStorage.getItem("formSubmitted"))sessionStorage.setItem("formSubmitted","true");else if(!confirm("\u0412\u044B \u0443\u0436\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C?"))return!1;var b=$(this).serializeArray();if(b.push({name:"source",value:"Test"}),b.push({name:"title",value:"Test message"}),b.push({name:"link",value:location.href}),$.ajax({type:"POST",url:"https://skidka-tut.by/action/index.php",headers:{"X-Requested-With":"XMLHttpRequest"},dataType:"json",data:b}).done(function(a){alert(a.text)}).fail(function(a,b){console.log(a,b),alert("\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430. \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443!")}),"function"==typeof Event)document.dispatchEvent(new Event("app.form.send"));else{var c=document.createEvent("Event");c.initEvent("app.form.send",!1,!1),document.dispatchEvent(c)}return!1}),$("a.smoothscroll").click(function(b){""!==this.hash&&(b.preventDefault(),b=this.hash,$("html, body").animate({scrollTop:$(b).offset().top},400))}),$.fn.nav=function(a){var b={offset:0};$.extend(b,a);var c=this;$(c).each(function(d,a){var e=$(a.hash),f=$(e).offset();$(window).scroll(function(){var d=$(window).scrollTop()+b.offset;f.top<d&&d<f.top+$(e).height()&&($(c).removeClass("active"),$(a).addClass("active"))})})},$(".js-nav-scroll").nav({offset:150})}),document.addEventListener("DOMContentLoaded",function(){try{var a=new Date;a.setDate(a.getDay()?a.getDate()-a.getDay()+8:a.getDate()+1),a.setHours(0,0,0);new LightCountdown(".countdown-week",a,{animation:"animated flipInX",animationDuration:"600ms"})}catch(a){console.error(a)}});