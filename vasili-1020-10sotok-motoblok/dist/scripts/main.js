"use strict";$(function(){$("form").submit(function(a){if(a.preventDefault(),"undefined"!=typeof sessionStorage)if(!sessionStorage.getItem("formSubmitted"))sessionStorage.setItem("formSubmitted","true");else if(!confirm("\u0412\u044B \u0443\u0436\u0435 \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443, \u043F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u044C?"))return!1;var b=$(this).serializeArray();if(b.push({name:"source",value:"Tensotok"}),b.push({name:"title",value:"\u041C\u043E\u0442\u043E\u0431\u043B\u043E\u043A"}),b.push({name:"link",value:location.href}),$.ajax({type:"POST",url:"https://skidka-tut.by/action/index.php",headers:{"X-Requested-With":"XMLHttpRequest"},dataType:"json",data:b}).done(function(a){alert(a.text)}).fail(function(a,b){console.log(a,b),alert("\u0418\u0437\u0432\u0438\u043D\u0438\u0442\u0435, \u043F\u0440\u043E\u0438\u0437\u043E\u0448\u043B\u0430 \u043E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u043F\u0440\u043E\u0441\u0430. \u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440\u043E\u043C \u043F\u043E \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0443!")}),"function"==typeof Event)document.dispatchEvent(new Event("app.form.send"));else{var c=document.createEvent("Event");c.initEvent("app.form.send",!1,!1),document.dispatchEvent(c)}return!1}),$("[data-toggle=\"popover\"]").popover(),$("#modal-order").on("show.bs.modal",function(a){a=$(a.relatedTarget).closest(".modal"),0<a.length&&a.modal("hide")}),$(".owl-carousel-prodyctsImg").owlCarousel({items:1,nav:!0,loop:!0,navText:["<",">"]})}),document.addEventListener("DOMContentLoaded",function(){for(var a=document.querySelectorAll(".product_card-prices"),b=0;b<a.length;b++)a[b].querySelector(".product_card-price-old span")&&(a[b].querySelector(".product_card-price-old span").textContent=(70*(+a[b].querySelector(".product_card-price span").innerHTML/100)).toFixed(2));for(var c=document.querySelectorAll(".card.product_card--shadow>.card-body>.card-text"),d=0,b=0;b<c.length;b++)if(d<c[b].scrollHeight){d=c[b].scrollHeight;for(var e=0;e<c.length;e++)c[e].style.height=d+"px"}});