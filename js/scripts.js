$(document).ready(function() {
  $(".topic").click(function() {
    $(".definition").hide();
    $("#" + this.id + "-def").fadeIn();
    document.getElementById("clicked-topic").innerHTML = this.innerHTML;
  });

  $(".clear").click(function() {
    $(".definition").hide();
    document.getElementById("clicked-topic").innerHTML = "Click a Topic!"
  });

});
