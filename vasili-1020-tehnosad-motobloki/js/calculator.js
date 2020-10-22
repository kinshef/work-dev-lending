document.addEventListener("DOMContentLoaded", function () {
  try {
    var rightSideItemSteps = $("#right-item__steps");
    var rightSideItemForm = $("#right-item__form");
    var rightSideBarPosition = $("#sidebar-outside");
    var toggleSideBarPosition = $("#toggleHide");
    var sidebarItemSteps = $("#sidebar__item__steps");
    var sidebarItemForm = $("#sidebar__item__form");
    var calculatorWidget = $(".calculator-widget__overlay");
    var calculatorWidgetClose = $(".calculator-widget__close");
    var steps = $("#steps");
    var form = $("#form");
    var currentPage = 0;

    rightSideItemSteps.on("click", showSteps);
    rightSideItemForm.on("click", showForm);
    sidebarItemSteps.on("click", showSteps);
    sidebarItemForm.on("click", showForm);

    calculatorWidgetClose.on("click", function () {
      calculatorWidget.css("display", "none");
      steps.css("display", "none");
      form.css("display", "none");
      $(".calculator-widget__step--active").find(".calculator-grid__item").removeClass("active");
    });

    function showSteps() {
      calculatorWidget.css("display", "block");
      steps.css("display", "block");
      form.css("display", "none");
      sidebarItemSteps.addClass("calculator-sidebar__item_active");
      sidebarItemForm.removeClass("calculator-sidebar__item_active");
      setTimeout(function () {
        $(".calculator-widget__step--active").find(".calculator-grid__item").addClass("active");
      }, 1);
    }

    function showForm() {
      calculatorWidget.css("display", "block");
      form.css("display", "block");
      steps.css("display", "none");
      sidebarItemForm.addClass("calculator-sidebar__item_active");
      sidebarItemSteps.removeClass("calculator-sidebar__item_active");
      $(".calculator-widget__step--active").find(".calculator-grid__item").removeClass("active");
    }

    toggleSideBarPosition.on("click", function () {
      if (rightSideBarPosition.css("right") === "-166px") {
        rightSideBarPosition.css("right", "0");
      } else {
        rightSideBarPosition.css("right", "-166px");
      }
      $(this).toggleClass("calculator-sidebar__hide_close");
    });

    var formSteps = $(".widget-step");
    // var currentPage = 0;
    var prevStep = $("#prevStep");
    var nextStep = $("#nextStep");

    var stepsCounter = $(".calculator-steps-counter");

    nextStep.on("click", function () {
      if (
        ($(formSteps[currentPage]).find("input[type=radio]").length && $(formSteps[currentPage]).find("input[type=radio]:checked").length)
        || ($(formSteps[currentPage]).find("input[type=checkbox]").length && $(formSteps[currentPage]).find("input:checked").length)
        || ($(formSteps[currentPage]).find("input[type=text]").length && $(formSteps[currentPage]).find("input[type=text]").eq(0).val().length)
      ) {
        $(formSteps[currentPage]).find(".calculator-grid__item").removeClass("active");
        prevStep.removeClass("calculator-prev-step_hide");

        if (currentPage < formSteps.length - 2) {
          $(formSteps[currentPage]).removeClass("calculator-widget__step--active");
          currentPage++;
          $(formSteps[currentPage]).addClass("calculator-widget__step--active");
          setTimeout(function () {
            $(formSteps[currentPage]).find(".calculator-grid__item").addClass("active");
          }, 1);
        }

        if (currentPage <= formSteps.length - 3) {
          stepsCounter.text("Шаг " + (currentPage + 1) + " из " + (formSteps.length - 2));
        } else {
          stepsCounter.css("display", "none");
        }

        var progressBar = $(".progress-bar");
        if (currentPage === formSteps.length - 2) {
          $(".calculator-widget__fixed-bottom-wrapper").css("display", "none");

          setTimeout(function () {
            progressBar.css("width", "100%");
          }, 1);

          setTimeout(function () {
            $(".progressBar-wrapper").css("display", "none");
            $(".lastPage").css("display", "block");
          }, 3000);
        }
      } else {
        var overlay = $('#widget-modal-overlay');
        var modal = $('#widget-modal-container');

        overlay.css("display", "block");
        modal.css("display", "block");
        $('#widget-modal-close').on("click", function () {
          modal.css("display", "none");
          overlay.css("display", "none");
        });
      }

    });

    prevStep.on("click", function () {
      $(formSteps[currentPage]).find(".calculator-grid__item").removeClass("active");
      nextStep.css("display", "flex");

      if (currentPage > 0 && currentPage < formSteps.length - 2) {
        $(formSteps[currentPage]).removeClass("calculator-widget__step--active");
        currentPage--;
        $(formSteps[currentPage]).addClass("calculator-widget__step--active");
        setTimeout(function () {
          $(formSteps[currentPage]).find(".calculator-grid__item").addClass("active");
        }, 1);
      }
      if (currentPage === 0) {
        prevStep.addClass("calculator-prev-step_hide");
      }
      if (currentPage <= formSteps.length - 3) {
        stepsCounter.text("Шаг " + (currentPage + 1) + " из " + (formSteps.length - 2));
      } else {
        stepsCounter.css("display", "none");
      }
    });

  } catch (e) {
    console.error(e);
  }
});
