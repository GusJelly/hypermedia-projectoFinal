$("#script1").on("click", function() {
  $(this).addClass("hidden");
  $("#script2").removeClass("hidden");
});

$("#script2").on("click", function() {
  $(this).addClass("hidden");
  $("#script3").removeClass("hidden");
});

$("#script3").on("click", function() {
  $(this).addClass("hidden");
  $("#script1").removeClass("hidden");
});
