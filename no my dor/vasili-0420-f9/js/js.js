$(document).ready(function() {

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


  // Smooth scroll
  $("a.smoothscroll").click(function (event) {
      if (this.hash !== "") {
          event.preventDefault();
          var hash = this.hash;
          $("html, body").animate({
              scrollTop: $(hash).offset().top - 100
          },400);
      }
  });



	$("body").mouseleave(function(a) {
		"undefined" !== typeof sessionStorage && !sessionStorage.getItem("modalLeaveShowed") && -12 > a.clientY && (sessionStorage.setItem("modalLeaveShowed", !0), $("#modal-leave").modal("show"))
	});


	$.fn.nav = function(a) {
		var b = {
			offset: 0
		};
		$.extend(b, a);
		var e = this;
		$(e).each(function(a, d) {
			var c = $(d.hash),
				f = $(c).offset();
			if(0 === c.length) return !1;
			$(window).scroll(function() {
				var a = $(window).scrollTop() + b.offset;
				f.top < a && a < f.top + $(c).height() && ($(e).removeClass("active"), $(d).addClass("active"))
			})
		})
	};
	$(".js-nav-scroll").nav({
		offset: 150
	});


	$(window).scroll(function() {
		if(0 < $(window).scrollTop()){
			$("#section-nav").addClass("fixed-nav")
		}else{
			$("#section-nav").removeClass("fixed-nav")
		}
	});


	var owlForm = $(".owl-form").owlCarousel({
		dots: !1,
		items: 1,
		mouseDrag: !1,
		animateIn: "zoomIn",
		autoHeight: !0
	});
	owlForm.on("changed.owl.carousel", function(a) {
		a.item.count < a.item.index + 2 ? $(".owl__controls_next").prop("disabled", !0) : $(".owl__controls_next").prop("disabled", !1);
		$(".owl__dot").removeClass("active").eq(a.item.index).addClass("active")
	});
	$(".owl__controls_prev").click(function() {
		owlForm.trigger("prev.owl.carousel")
	});
	$(".owl__controls_next").click(function() {
		owlForm.trigger("next.owl.carousel")
	});
	$(".owl__dot").click(function() {
		owlForm.trigger("to.owl.carousel", [$(".owl__dot").index(this)])
	})
});



document.addEventListener("DOMContentLoaded", function() {

	try {
		/* countdown */
		var dateEnd = new Date;
		dateEnd.setHours(23, 59, 59);
		new LightCountdown(".lightcountdown", dateEnd, {
			animation: "animated fadeInDown",
			animationDuration: "600ms"
		})
	} catch(c) {
		console.error(c)
	}

});