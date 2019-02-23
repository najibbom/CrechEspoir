$(document).ready(function() {
  /* Sticky Navbar */
  $(".js--section-features").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  /* Smooth Scroll */
  $("#link1").click(function() {
    $path = $("#box1").offset().top;
    $("body").animate({ scrollTop: $path }, 2000);
  });
  $("#link2").click(function() {
    $path = $("#box2").offset().top;
    $("body").animate({ scrollTop: $path }, 2000);
  });
  $("#link3").click(function() {
    $path = $("#box3").offset().top;
    $("body").animate({ scrollTop: $path }, 1000);
  });

  /* Animation on Scroll */
  $(".js--wp-1").waypoint(
    function(direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );
  $(".js--wp-2").waypoint(
    function(direction) {
      $(".js--wp-2").addClass("animated fadeIn");
    },
    {
      offset: "50%"
    }
  );

  /* Map */
  var map = new GMaps({
    div: ".map",
    lat: 36.5241271,
    lng: 6.2703874,
    zoom: 15
  });

  map.addMarker({
    lat: 36.529044,
    lng: 6.26049,
    title: "Sidi Merouane",
    infoWindow: {
      content:
        "<p>Crèche de l'espoir - Mila, Sidi Merouane</p><p>روضة الآطقال ميلة - سيدي مروان</p>"
    }
  });
});
