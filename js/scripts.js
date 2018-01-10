$(document).ready(function() {
  $(".topic").click(function() {
    $(".definition").hide();
    $("#" + this.id + "-def").fadeIn();
    document.getElementById("clicked-topic").innerHTML = this.innerHTML;

    $(".selected").removeClass("selected");
    $(this).addClass("selected");
  });

  $("#highlight").click(function() {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
});

  $(".clear").click(function() {
    $(".definition").hide();
    document.getElementById("clicked-topic").innerHTML = "Click a Topic!"
    $(".selected").removeClass("selected");
  });

});
