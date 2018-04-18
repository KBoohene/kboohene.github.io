jQuery(document).ready(function($) {
  //Arrow animation for page scrolling
  $("#scroll").click(function(e) {
    e.preventDefault();
    var position = $(".cool-dev").offset().top;
    $("body, html").animate(
      {
        scrollTop: position
      },
      1200
    );
  });

  /*Preloading page animation*/
  $("#loading-center").click(function() {
    $("#loading").fadeOut(500);
  });

  /*Hover animation for different items */

  //Added pulse animation on hover to social icons
  $("[id^=social]").hover(
    function() {
      $(this).addClass("animated infinite pulse");
    },
    function() {
      $(this).removeClass("animated infinite pulse");
    }
  );

  //Added flash animation on hover to skills icons
  $("[id^=skills]").hover(
    function() {
      $(this).addClass("animated infinite pulse");
    },
    function() {
      $(this).removeClass("animated infinite pulse");
    }
  );

  /*Change section title based on dots hover*/
  $("#dot1").hover(
    function() {
      document.getElementById("section-title").innerHTML = "Welcome";
      $("#section-title").addClass("animated fadeIn");
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
      $("#section-title").removeClass("animated fadeIn");
    }
  );

  $("#dot2").hover(
    function() {
      document.getElementById("section-title").innerHTML = "Profile";
      $("#section-title").addClass("animated fadeIn");
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
      $("#section-title").removeClass("animated fadeIn");
    }
  );

  $("#dot3").hover(
    function() {
      document.getElementById("section-title").innerHTML = "Skills";
      $("#section-title").addClass("animated fadeIn");
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
      $("#section-title").removeClass("animated fadeIn");
    }
  );

  $("#dot4").hover(
    function() {
      document.getElementById("section-title").innerHTML = "Projects";
      $("#section-title").addClass("animated fadeIn");
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
      $("#section-title").removeClass("animated fadeIn");
    }
  );

  $("#dot5").hover(
    function() {
      document.getElementById("section-title").innerHTML = "Books";
      $("#section-title").addClass("animated fadeIn");
    },
    function() {
      document.getElementById("section-title").innerHTML = "";
      $("#section-title").removeClass("animated fadeIn");
    }
  );

  /*Hides and displays navbar after certain scroll*/

  //Hide navbar initially
  $(".nav-bar").hide();

  // Fade animation
  $(() => {
    $(window).scroll(() => {
      // Determines position on page before navbar displays
      if ($(this).scrollTop() > 400) {
        $(".nav-bar").fadeIn();
      } else {
        // disableToggle();
        $(".nav-bar").fadeOut();
      }
    });
  });

  //Fades text into page
  function fadeIn(id) {
    $("#" + id).addClass("animated fadeInRight");
  }

  //Timer on when to load the animation
  setTimeout(() => {
    fadeIn("tag1");
    fadeIn("tag2");
    fadeIn("tag3");
  }, 10);

  /*Hamburger animation*/
  $(".hamburger").click(() => {
    toggleSideBar();
    if ($(".is-active")[0]) {
      $(".hamburger").removeClass("is-active");
    } else {
      $(".hamburger").addClass("is-active");
    }
  });

  /*Modal transitions*/

  //Front End Modal
  $(".fd-md-trigger").click(function(e) {
    $("#modal-1").addClass("md-show");
  });

  $(".fd-md-close").click(function(e) {
    $("#modal-1").removeClass("md-show");
  });

  //TODO: Complete the rest of the modal functions
});

/*Toggles the side menu*/
function toggleSideBar() {
  if ($(".active")[0]) {
    $(".sidebar").removeClass("active");
    $(".hamburger-menu").removeClass("loaded");
  } else {
    $(".sidebar").addClass("active");
    $(".hamburger-menu").addClass("loaded");
  }
}
