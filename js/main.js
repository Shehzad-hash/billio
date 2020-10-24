$(document).ready(function () {
    $('#range-1').range({
        min: 0,
        max: 10,
        start: 5
      });

    //   Double range
      $('.double.range').range({
        min: 0,
        max: 100,
        start:100
      });
});

$(document).ready(function () {
  $("#optimize-btn").click(function (e) { 
    e.preventDefault();
    $(".all-allocation.optimize-card-2").css("display", "none");
    $(".optimize-card-2.hide").css("display", "block");
  });
});

$(document).ready(function () {
  $("#closed").click(function (e) { 
    e.preventDefault();
    $(".all-allocation.optimize-card-2").css("display", "block");
    $(".optimize-card-2.hide").css("display", "none");
  });
});

$("#side-menu-btn").click(function (e) { 
  e.preventDefault();
  $(".side-menu").toggleClass("d-block");
  
});