// document.querySelector(".header__burger")
// $(".header__burger")

// $(function () {
//   $(".header__burger").on("click", function(){
//     $(".header__menu").slideToggle().css("display", "flex")
//   })

//   $(window).on("resize", function(){
//     if ($(window).width() > 768) {
//       $(".header__menu").removeAttr("style")
//     }
//   })
// })

$(function () {
  $(".header__burger").addClass("unToggled");
  $(".header__burger").on("click", function () {
    $(this).toggleClass("toggled");
    $(this).toggleClass("unToggled");
    $(".header__menu").slideToggle().css("display", "flex");
  });

  $(window).on("resize", function () {
    if ($(window).width() > 768) {
      $(".header__menu").removeAttr("style");
    }
  });
});
