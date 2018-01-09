$(document).ready(function() {
  $(".topic").click(function() {
    $(".definition").hide();
    $("#" + this.id + "-def").fadeIn();
    console.log($("#clicked-topic").innerHTML);
    document.getElementById("clicked-topic").innerHTML = this.innerHTML;
  });

  $(".clear").click(function() {
    $(".definition").hide();
  });

});
