"use strict";$(document).ready(function(){$(".jPrices").change(function(){var a=this,b=+$(".jPrice",a).text(),c=$(".jPriceOld",a);c.text((1.3*b).toFixed())}),$(".jPrices").change()});