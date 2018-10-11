$(window).on("load", function() {
  $(".loader .inner").fadeOut(500, function() {
    $(".loader").fadeOut(750);
  });
});

$(document).ready(function() {
  // slides section
  $("#slides").superslides({
    animation: "fade",
    play: 5000,
    pagination: false
  });

  // title section
  var typed = new Typed(".typed", {
    strings: ["Creator.", "Developer.", "Dreamer."],
    typeSpeed: 70,
    bakcSpead: 5000,
    loop: true,
    showCursor: false
  });

  // owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    item: 4,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      768: {
        items: 3
      },
      938: {
        items: 4
      }
    }
  });

  var skillsTopOffset = $(".skillsSection").offset().top;
  //  var statsTopOffset = $(".statsSection").offset().top;
  var countUpFinished = false;

  $(window).scroll(function() {
    //window.pageYOffset is how far from top
    if (window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
      //Activating the charts on scroll
      $(".chart").easyPieChart({
        easing: "easeInOut",
        barColor: "#fff",
        trackColor: false,
        scaleColor: false,
        lineWidth: 4,
        size: 152,
        onStep: function(from, to, percent) {
          $(this.el)
            .find(".percent")
            .text(Math.round(percent));
        }
      });
    }

    // if (
    //   !countUpFinished &&
    //   window.pageYOffset > statsTopOffset - $(window).height() + 200
    // ) {
    //   //Counting stats up
    //   $(".countUp").each(function() {
    //     var element = $(this);
    //     var endVal = parseInt(element.text());

    //     element.countup(endVal);
    //   });
    //   countUpFinished = true;
    // }
  });

  // for portfolio
  $("[data-fancybox]").fancybox();

  $(".items").isotope({
    filter: "*",
    animationOptions: {
      duration: 1500,
      easing: "linear",
      queue: false
    }
  });

  $("#filters a").click(function() {
    $("#filters .current").removeClass("current");
    $(this).addClass("current");

    var selector = $(this).attr("data-filter");

    $(".items").isotope({
      filter: selector,
      animationOptions: {
        duration: 1500,
        easing: "linear",
        queue: false
      }
    });

    return false;
  });

  //sliding to section on link click
  $("#navigation li a").click(function(e) {
    e.preventDefault();

    var targetElement = $(this).attr("href");
    var targetPosition = $(targetElement).offset().top;
    $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
  });

  //sticking navigation bar on scroll
  const nav = $("#navigation");
  const navTop = nav.offset().top;

  $(window).on("scroll", stickyNavigation);

  function stickyNavigation() {
    const body = $("body");

    if ($(window).scrollTop() >= navTop) {
      body.css("padding-top", nav.outerHeight() + "px");
      body.addClass("fixedNav");
    } else {
      body.css("padding-top", 0);
      body.removeClass("fixedNav");
    }
  }
});
