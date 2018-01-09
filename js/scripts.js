$(document).ready(function() {
  $(".topic").click(function() {
    $(".definition").hide();
    $("#" + this.id + "-def").fadeIn();
  });
});
