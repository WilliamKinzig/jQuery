$(document).ready(function() {
  $("h1").click(function() {
    $("img").show();
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});
