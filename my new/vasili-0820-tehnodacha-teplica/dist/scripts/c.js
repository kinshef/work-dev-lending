"use strict";$(document).ready(function(){$("form.has-calculator").change(function(){var a=this,b=$("input[name='product']",a).val(),c=$("input[name='option']:checked",a).val();Object.keys(calculatorData[b][c]).forEach(function(d){Object.keys(calculatorData[b][c][d]).forEach(function(e){var f=0;f+=calculatorData[b][c][d][e],$("ul.shag"+d+" .length-"+e,a).removeAttr("style"),"string"==typeof f&&$("ul.shag"+d+" .length-"+e,a).css("color","red");var g=$("ul.shag"+d+" .length-"+e,a),h=$(".jPriceOld",a),i=0<g.data("animateFrom")?g.data("animateFrom"):0;$({animateNumber:i}).animate({animateNumber:f},{duration:800,step:function step(a){g.text((+a).toFixed()+" \u0440\u0443\u0431."),h.text((+(1.4*a)).toFixed()+" \u0440\u0443\u0431.")},complete:function complete(){g.data("animateFrom",(+f).toFixed())}})})})}),$("form.has-calculator").change()});