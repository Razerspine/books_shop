$(document).ready(function () {

    (function () {

    var tabButton = $(".b-main-tabs__header");

        $(tabButton).click(function () {

            var btnAttr = $(this).attr("data-tab");

            sendAjax(btnAttr);
        });

        function sendAjax(tabId) {

            var tabContent = $('#' + tabId);
            var loader = tabContent.find('.cssload-container');

            $.ajax({
                type: "POST",
                url: 'http://app.books/home/',
                response: "json",
                beforeSend: function(){
                    loader.show();
                },
                success: function (data) {
                    var test = "<div class='test'>";
                    $.each(data, function (key, val) {

                        console.log(val.src);

                        test += "<div class='b-tabs-content'>";
                        test += "<div class='b-tabs-content__img'>";
                        test += '<img class="b-tabs-img" src="'+ val.src +'" alt="books"/>';
                        test += "</div>";
                        test += "<div class='b-tabs-content__title'>" + val.name + "</div>";
                        test += "<span class='b-tabs-content__value'>" + "$" + val.price + "</span>";

                        if (val.sale) {
                            test += "<div class='b-tabs-content__badge'>";
                            test += "<span class='b-tabs-content__badge-item'>" + val.sale + "%" + "</span>";
                            test += "<span class='b-tabs-content__badge-text'>" + "off" + "</span>";
                            test += "</div>";
                        }
                        test += "</div>";
                    });
                    test += "</div>";

                    tabContent.html(test);

                    loader.hide();
                }
            });
        }
    })();

    (function () {

        var pagerBtn = $(".b-tabs-pager__item");

        $(pagerBtn).click(function (event) {
            event.preventDefault();

            $(pagerBtn).removeClass("b-tabs-pager_current");
            $(this).addClass("b-tabs-pager_current");
            var btnAttr = $(this).attr("data-page");

            window.history.pushState(btnAttr, null, "?" + btnAttr);
        });
    })();
});
