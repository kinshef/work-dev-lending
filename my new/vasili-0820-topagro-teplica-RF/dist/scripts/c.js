"use strict";$(document).ready(function(){$("form.has-calculator").change(function(){var a=this,b=$("input[name='product']",a).val(),c=$("input[name='length']:checked",a).val(),d=0;d+=calculator.products[b][c];var e=$(".catalog__card__price",a),f=$(".calculator-price",a),g=$(".calculator-price-old",a),h="pulse";e.addClass("animated faster "+h),e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){e.removeClass("animated faster "+h)});var i=0<f.data("animateFrom")?f.data("animateFrom"):0;$({animateNumber:i}).animate({animateNumber:d},{duration:800,step:function step(a){a=(+a).toFixed(),f.text((+a).toFixed()),g.text((+(a/.5)).toFixed())},complete:function complete(){f.data("animateFrom",(+d).toFixed(2))}})}),$("form.has-calculator").change()});