$(function() {

    // przewijanie strony headerWrapper

    var headerWrapper = $("#headerWrapper");
    var shape = headerWrapper.find("a");

    headerWrapper.on("click", "a", function(event) {
        event.preventDefault();

        var myId = $(this).attr("href");
        var myElement = $(myId);
        var myNewOffset = myElement.offset().top;

        $("html, body").animate({
            scrollTop: myNewOffset

        }, 1000);
    });

    //przewijanie strony nav

    var list = $(".list");
    var a = list.find("a");

    list.on("click", "a", function(event) {
        event.preventDefault();

        var myId = $(this).attr("href");
        var myElement = $(myId);
        var myNewOffset = myElement.offset().top;

        $("html, body").animate({
            scrollTop: myNewOffset

        }, 1000);
    });

    //sticky menu

    var nav = $("nav");
    var menu = $(".list");
    var menuTop = menu.position().top;
    console.log(menuTop, "menuTop");

    $(window).on("scroll", function(event) {
        var dist = $(this).scrollTop();

        if (dist > menuTop) {
            menu.addClass("sticky");
        } else {
            menu.removeClass("sticky");
        }
    });

    $(window).on("resize", function(event) {

        var dist = menu.offset().top;

        if (!menu.hasClass("sticky")) {
            menuTop = dist;
        } else {
            menuTop = nav.offset().top;
        }

    });

    //hamburger menu

    var hamburgerMenu = $(".hamburger");

    menu.addClass("hidden");

    hamburgerMenu.on("click", function(event) {
      event.preventDefault();

      menu.toggleClass("hidden");
    });

    //event slider ourTeam

    var leftArrow = $(".arrows img").eq(0);
    var rightArrow = $(".arrows img").eq(1);
    var photos = $(".ourTeam").children();
    var slideIndex = 0;

    console.log(photos);

    photos.eq(slideIndex).addClass("visible");
    photos.eq(slideIndex + 1).addClass("visible");
    photos.eq(slideIndex + 2).addClass("visible");

    leftArrow.on('click', function(event) {
        event.preventDefault();

        if (slideIndex > 0) {
            photos.eq(slideIndex).removeClass("visible");
            photos.eq(slideIndex + 1).removeClass("visible");
            photos.eq(slideIndex + 2).removeClass("visible");
            slideIndex--;
            photos.eq(slideIndex).addClass("visible");
            photos.eq(slideIndex + 1).addClass("visible");
            photos.eq(slideIndex + 2).addClass("visible");
        }
    });

    rightArrow.on("click", function(event) {
        event.preventDefault();

        if (slideIndex < photos.length - 3) {
            photos.eq(slideIndex).removeClass('visible');
            photos.eq(slideIndex + 1).removeClass("visible");
            photos.eq(slideIndex + 2).removeClass("visible");
            slideIndex++;
            photos.eq(slideIndex).addClass('visible');
            photos.eq(slideIndex + 1).addClass("visible");
            photos.eq(slideIndex + 2).addClass("visible");
        }
    });

    //progressBars animation

    var data = $("#data");
    var allSpans = data.find(".data span");

    function animateSpans() {

      allSpans.eq(0).animate({
          width: "90%"
      }, 2000);

      allSpans.eq(1).animate({
          width: "75%"
      }, 2000);

      allSpans.eq(2).animate({
          width: "70%"
      }, 2000);

      allSpans.eq(3).animate({
          width: "86%"
      }, 2000);
    }

    //numbers animation

    function animateNumbers() {
      $(".numbers span").each(function() {
          $(this).prop("Counter", 0).animate({
              Counter: $(this).text()
          }, {
              duration: 2000,
              easing: "swing",
              step: function(now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });
    }

    animateNumbers();

    //animations starts on scroll

    var ourSkills = $(".ourTeam");
    var ourSkillsTop = ourSkills.position().top;

    $(window).on("scroll", function(event) {
        var dist = $(this).scrollTop();

        if (dist > ourSkillsTop) {
          animateSpans();
          // animateNumbers();
        }
    });

    //quotation slider

    var quotes = $(".quotation ul").children();
    var quotesButton = $(".quotesButton").children();

    function slider() {

        quotes.first().addClass('active');
        quotesButton.first().addClass('active');

        quotesButton.on("click", function() {
            var dots = $(this).parent().children();
            var position = dots.index($(this));

            quotes.removeClass('active').eq(position).addClass('active');
            quotesButton.removeClass('active').eq(position).addClass('active');

        });
    }

    slider();

    // var moveQuotes = setInterval(slider(),1000);
    // var itemWidth = quotes.outerWidth();
    // var leftValue = itemWidth * (-1);
    //
    // $(".quotation ul").eq(0).before($(".quotation ul").eq(5));
    // $(".quotation ul").css({"left" : leftValue})



    // ourPortfolio gallery filter

    var portfolioButtons = $(".buttons button");
    var portfolioImages = $(".gallery").find("div");

    // console.log(portfolioImages);

    portfolioButtons.on("click", function(event) {
        event.preventDefault();
        var buttonDataTag = $(this).data("tag");

        if ($(this).index() === 0) {
            portfolioImages.removeClass("hide");
        } else {
            portfolioImages.each(function() {
                var imagesDataTag = $(this).data("tag");

                if (imagesDataTag.indexOf(buttonDataTag) == -1) {
                    $(this).addClass("hide");
                } else {
                    $(this).removeClass("hide");
                }
            });
        }
    });

    //form

    var form = $(".form ul").children();

    var nameInput = form.eq(0).children();
    var emailInput = form.eq(1).children();
    var textArea = form.eq(2).children();
    var sendEmailButton = form.eq(3);

    nameInput.on('input', function() {
        var nameTest = /^[a-zA-Z0-9._-]{5,25}$/;
        if (nameTest.test($(this).val())) {
            $(this).removeClass("invalid").addClass("valid");
        } else {
            $(this).removeClass("valid").addClass("invalid");
        }
    });

    emailInput.on('input', function() {
        var emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (emailTest.test($(this).val())) {
            $(this).removeClass("invalid").addClass("valid");
        } else {
            $(this).removeClass("valid").addClass("invalid");
        }
    });

    textArea.keyup(function(event) {

        console.log($(this).val());

        if ($(this).val()) {
            $(this).removeClass("invalid").addClass("valid");
        } else {
            $(this).removeClass("valid").addClass("invalid");
        }
    });

    sendEmailButton.click(function(event) {
        event.preventDefault();
        if (nameInput.hasClass("valid") && emailInput.hasClass("valid") && textArea.hasClass("valid")) {
            alert("Submitted");
        } else {
            alert("Error, invalid data");
        }

    });

});
