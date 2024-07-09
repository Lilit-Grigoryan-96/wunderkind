$(document).ready(function() {
  //change navbar style on scroll

  $(window).on("scroll", function() {
    if ($(window).scrollTop() > 100) {
      $(".header__nav").addClass("scroll");
    } else if ($(window).scrollTop() < 100) {
      $(".header__nav").removeClass("scroll");
    }
  });

  //progress bars

  $(".progress__section").waypoint(function() {
    $(".progress-bar").each(function() {
      var max = $(this).data("max");

      $(this).animate({
        width: max + "%",
      });
      $('[data-toggle="tooltip"]').tooltip("show");
    });
  });

  //swiper sliders

  new Swiper(".image-slider", {
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    loopedSlides: 3,
    speed: 1000,
    breakpoints: {
      300: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 3,
      },
    },
  });

  new Swiper(".text__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    spaceBetween: 30,

    loop: true,
    loopedSlides: 1,

    speed: 1000,
  });

  // youtube video play button

  $("#player").on("click", function() {
    $("#player").css({ display: "none" });
    $("#img").css({ display: "none" });
  });

  // count up numbers

  $(".numbers").waypoint(function() {
    $(".num").each(function() {
      $(this)
        .prop(".numbers__count", 80)
        .animate(
          {
            counter: $(this).text(),
          },
          {
            duration: 1000,
            easing: "swing",
            step: function(now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
  });

  // scroll up button

  $(".scroll-up").on("click", function() {
    $("html").animate({ scrollTop: 0 }, 1000);
  });
});
