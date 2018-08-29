$(document).ready(function () {

    (function () {

        var i = 0;
        var count = 1;
        var isAjaxStart = 0;
        var getParams = '';
        var loadContainer = $(".b-items-catalog");
        var roundLoader = $("#circleG");
        var host = document.location.host;
        var search = document.location.search;
        var pathUrl = document.location.pathname;
        var currentCount = search.match( /\?page=([\d]*)/);

        if (currentCount && currentCount[0]) {
            getParams = search.replace(currentCount[0], "");
        }

        if (currentCount && currentCount[1]) {
            count = currentCount[1]
        }

        $(".b-content-load").on('click','.more',function () {

            sendAjax();
            if(count >=4) {
                count++;
                window.history.pushState(host, null, pathUrl + '?page=' + count + getParams);
            }
        });

        $(window).scroll( function () {

            var documentHeight = $(document).height();
            var windowHeight = $(window).height();
            var scrollPosition = $(window).scrollTop();
            var scrollHeight = documentHeight - windowHeight;

            if(scrollPosition >= scrollHeight - 550 && i < 3 && isAjaxStart === 0) {
                sendAjax();
                count++;
                window.history.pushState(host, null, pathUrl + '?page='  + count + getParams);
            }
        });

        function sendAjax()
        {
            $.ajax({
                type: "POST",
                url: 'http://app.books/category/loadmore',
                response: "json",
                beforeSend: function () {
                    roundLoader.show();
                    isAjaxStart = 1;
                },
                success: function (data) {
                    i++;
                    if(i >= 3) {
                        $(".more").show();
                    }
                    if(i === 6) {
                        $(".more").hide();
                    }

                    roundLoader.hide();
                    $(loadContainer).append(data);
                    isAjaxStart = 0;
                }
            });
        }
    })();
});
