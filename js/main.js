$(function () {
  $(".header__btn").on("click", function () {
    $(".rightside-menu").removeClass("rightside-menu--close");
  }),
    $(".rightside-menu__close").on("click", function () {
      $(".rightside-menu").addClass("rightside-menu--close");
    }),
    $(".header__btn-menu").on("click", function () {
      $(".menu").toggleClass("menu--open");
    }),
    $(".top__slider").slick({ dots: !0, arrows: !1, fade: !0, autoplay: !0 }),
    $(".contact-slider").slick({
      slidesToShow: 10,
      slidesToScroll: 5,
      dots: !0,
      arrows: !1,
      responsive: [
        { breakpoint: 1700, settings: { slidesToShow: 8, slidesToScroll: 8 } },
        { breakpoint: 1511, settings: { slidesToShow: 6, slidesToScroll: 6 } },
        { breakpoint: 540, settings: { slidesToShow: 4, slidesToScroll: 4 } },
        { breakpoint: 340, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    }),
    $(".article-slider__box").slick({
      prevArrow:
        '<button type="button" class="article-slider__arrow article-slider__arrowleft"><img src="images/arrow-slide-left.svg" alt="arrow left"></button>',
      nextArrow:
        '<button type="button" class="article-slider__arrow article-slider__arrowright"><img src="images/arrow-slide-right.svg" alt="arrow left"></button>',
    }),
    mixitup(".gallery__inner", { load: { filter: ".living" } });
});
