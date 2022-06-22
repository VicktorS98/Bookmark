
$(".toggle").click(function() {
  $(".logo-toggle-1").hide("slow");
  $(".logo-nav-abierto").css("filter", "invert(100%) sepia(100%) saturate(0%) hue-rotate(164deg) brightness(102%) contrast(101%)")
  $("nav").toggleClass("active");
  $("html, body").css({
    overflow: "hidden",
    height: "100%"
  });
  if (!$("nav").hasClass("active")) {
    $(".logo-toggle-1").show("slow");
    $("html, body").css({
      overflow: "auto",
      height: "auto"
    });
  }
});


$(document).ready(function() {
  $(".tab-1").css("border-bottom", "5px solid rgb(83, 99, 238)").css("color", "rgb(83, 99, 238)");
});


$(document).ready(function() {
  if ($(window).width() >= 768) {
    $(".card-busqueda").addClass("hidden");
    $(".card-compartir").addClass("hidden");
  }
})

function checkWidthForTabs() {
  if ($(window).width() > 768) {
    $(".card-señala").removeClass("hidden");
    $(".card-busqueda").addClass("hidden");
    $(".card-compartir").addClass("hidden");
  } if($(window).width() < 768) {
    $(".cards").removeClass("hidden");
  }
}
$(window).resize(checkWidthForTabs);


$(".tab").click(function(e) {
  if ($(e.target).hasClass("tab-1")) {
    $(".tab").css("border-bottom", "2px solid rgb(150, 149, 149)").css("color", "rgb(150, 149, 149)");
    $(e.target).css("border-bottom", "5px solid rgb(83, 99, 238)").css("color", "rgb(83, 99, 238)");
    $(".cards").addClass("hidden");
    $(".card-señala").removeClass("hidden");
  }
  if ($(e.target).hasClass("tab-2")) {
    $(".tab").css("border-bottom", "2px solid rgb(150, 149, 149)").css("color", "rgb(150, 149, 149)");
    $(e.target).css("border-bottom", "5px solid rgb(83, 99, 238)").css("color", "rgb(83, 99, 238)");
    $(".cards").addClass("hidden");
    $(".card-busqueda").removeClass("hidden");
  }
  if ($(e.target).hasClass("tab-3")) {
    $(".tab").css("border-bottom", "2px solid rgb(150, 149, 149)").css("color", "rgb(150, 149, 149)");
    $(e.target).css("border-bottom", "5px solid rgb(83, 99, 238)").css("color", "rgb(83, 99, 238)");
    $(".cards").addClass("hidden");
    $(".card-compartir").removeClass("hidden");
  }
});
