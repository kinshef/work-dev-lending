"use strict";$(document).ready(function(){$("form.has-calculator").change(function(){var a=this,b=$("input[name='product']",a).val(),c=$("input[name='length']:checked",a).val(),d=$("input[name='interval']:checked",a).val(),e=$("input[name='shirina']:checked",a).val(),f=$("input[name='stringery']:checked",a).val(),g=$("input[name='profil']:checked",a).val(),h=$("input[name='kreplenie']:checked",a).val(),i=$("input[name='additional[]']:checked",a),j=0,k=function(b){$(".has-calculator__img img",a).attr("src",b.img),$(".has-calculator__img a",a).attr("href",b.img)};f?(j+=calculator.products[b][c][d][f][g][h].prise,k(calculator.products[b][c][d][f][g][h])):1<$("input[name='shirina']",a).length?(j+=calculator.products[b][c][d][e].prise,k(calculator.products[b][c][d][e])):(j+=calculator.products[b][c][d].prise,k(calculator.products[b][c][d])),i.each(function(a,b){j+=calculator.additional[$(b).val()]});var l=$(".catalog__price",a),m=$(".jPrice",a),n=$(".jPriceOld",a),o="pulse";l.addClass("animated faster "+o),l.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){l.removeClass("animated faster "+o)});var p=0<m.data("animateFrom")?m.data("animateFrom"):0;$({animateNumber:p}).animate({animateNumber:j},{duration:800,step:function step(a){m.text((+a).toFixed()),n.text((+(a/.7)).toFixed())},complete:function complete(){m.data("animateFrom",(+j).toFixed())}})}),$("form.has-calculator").change()});