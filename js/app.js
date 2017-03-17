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

    //numbers animation


    $('.numbers span').each(function() {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 2000,
            easing: 'swing',
            step: function(now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

    //quotation slider


    var quotes = $(".quotation ul").children();
    var quotesButton = $(".quotesButton").children();
    // var slideInterval = setInterval(slider(),2000);

    function slider() {

        // quotesButton.first().addClass('active');
        quotes.first().addClass('active');

        quotesButton.on("click", function() {
            var dots = $(this).parent().children();
            var position = dots.index($(this));

            // quotesButton.removeClass('active').eq(position).addClass('active');
            quotes.removeClass('active').eq(position).addClass('active');

        });
    }

    slider();

    //form

    var form = $(".form ul").children();

    var nameInput = form.eq(0).children();
    var emailInput = form.eq(1).children();
    var textArea = form.eq(2).children();
    var sendEmailButton = form.eq(3);

    sendEmailButton.on("click", function(event) {
      event.preventDefault();
      $(".error").remove();

      var nameInputValue = nameInput.val();
      var emailInputValue = emailInput.val();
      var textAreaValue = textArea.val();

      // if (nameInputValue.length < 5 && nameInputValue.length > 20) {
      //
      // }
      //
      // var emailTest = '^[0-9a-zA-Z_.-]+@[0-9a-zA-Z.-]+\.[a-zA-Z]{2,3}$'




    });


});
