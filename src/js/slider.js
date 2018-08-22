$(document).ready(function () {

    // SLIDER WITH AUTOPLAY And Swipe
    (function () {

        var slider = $(".b-middle-section__slider");
        var buttonNext = $(".b-slider-button__next");
        var buttonPrev = $(".b-slider-button__prev");

        function play() {
            var slide = $(".b-slide");
            var currentSlide = $(".js-active-slide");
            var currentIndex = currentSlide.index();
            var nextIndex = currentIndex + 1;
            var nextImg = slide.eq(nextIndex);
            var lastImg = slide.eq(-1);
            var lastIndex = lastImg.index();
            currentSlide.removeClass("js-active-slide");

            if (lastIndex === currentIndex) {
                slide.eq(0).addClass("js-active-slide");

            } else {
                nextImg.addClass("js-active-slide");
            }
        }

        var slideAutoPlay = setInterval(play, 3000);

        slider.mouseenter(function () {
            clearInterval(slideAutoPlay);
        });

        slider.mouseleave(function () {
            slideAutoPlay = setInterval(play, 3000);
        });

        $(buttonNext).click(function () {
            play();
        });

        function prev() {
            var slide = $(".b-slide");
            var currentSlide = $(".js-active-slide");
            var currentIndex = currentSlide.index();
            var prevIndex = currentIndex - 1;
            var prevImg = slide.eq(prevIndex);
            currentSlide.removeClass("js-active-slide");
            prevImg.addClass("js-active-slide");
        }

        $(buttonPrev).click(function () {
            prev();
        });

        $(function() {

            $(".b-middle-section__slider").swipe( {
                swipeLeft:function() {
                    clearInterval(slideAutoPlay);
                    prev();
                },
                threshold:0
            });
        });

        $(function() {

            $(".b-middle-section__slider").swipe( {
                swipeRight:function() {
                    clearInterval(slideAutoPlay);
                    play();
                },
                threshold:0
            });
        });
    })();
});