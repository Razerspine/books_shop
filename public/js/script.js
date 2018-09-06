$(document).ready(function () {
    //ITEMS TABS
    (function () {

        var buttonTabs = $(".b-main-tabs__header");
        var contentTabs = $(".b-main-tabs__content");
        $(buttonTabs).click(function () {

            var tabAttr = $(this).attr("data-tab");
            var tabContent1 = $("#tab1");
            var tabContent2 = $("#tab2");
            var tabContent3 = $("#tab3");
            var tabContent4 = $("#tab4");

            $(buttonTabs).removeClass("js-tab-button");
            $(this).addClass("js-tab-button");
            contentTabs.removeClass("js-active");

            if (tabAttr === "tab1") {
                tabContent1.addClass("js-active");
            }
            if (tabAttr === "tab2") {
                tabContent2.addClass("js-active");
            }
            if (tabAttr === "tab3") {
                tabContent3.addClass("js-active");
            }
            if (tabAttr === "tab4") {
                tabContent4.addClass("js-active");
            }
        });
    })();

    // ACCORDION/TOGGLE MENU
    (function () {

        var button = $(".js-button");
        var content = $(".b-accordion__content");

        $(button).click(function () {

            $(this).next(content).slideToggle();
            // accordion concept
            // if (false === $(this).next().is(':visible')) {
            //     $(content).slideUp();
            // }
            // $(this).next().slideToggle();
        });
    })();

    //TOOLTIP
    (function () {

        var content = $(".js-tooltip");
        var cart = $(".b-left-section__title");

        $(cart).hover(function () {
            $(content).slideDown();

            $(content).mouseleave(function () {
                $(content).slideUp();
            });

            $(function() {

                $(content).swipe( {
                    swipeRight:function() {
                        content.slideUp();
                    },
                    threshold:0
                });
            });
        });
    })();

    (function () {

        var wishList = $(".b-right-section__title");
        var wishContent = $(".js-tooltip-wish");

        $(wishList).hover(function () {
            $(wishContent).slideDown();

            $(wishContent).mouseleave(function () {
                $(wishContent).slideUp();
            });

            $(function() {

                $(wishContent).swipe( {
                    swipeRight:function() {
                        wishContent.slideUp();
                    },
                    threshold:0
                });
            });
        });
    })();

    (function () {

        var menuButton = $(".js-responsive-btn");
        var menuItem = $(".b-nav-menu__item");
        var subMenuButton = $(".js-submenu-btn");

        $(menuButton).click(function () {

            menuItem.toggleClass("b-nav-menu__item_responsive");
        });

        $(subMenuButton).click(function () {

            $(this).next().slideToggle();
        });
    })();

    (function () {

        var buttonTab = $(".b-tabs-section__buttons");
        var contentTabs = $(".b-tabs-section__content");
        $(buttonTab).click(function () {

            var tabAttr = $(this).attr("data-info");
            var tabContent1 = $("#tab1");
            var tabContent2 = $("#tab2");

            $(buttonTab).removeClass("b-tabs-section_current");
            $(this).addClass("b-tabs-section_current");
            contentTabs.removeClass("b-tabs-section_active");

            if (tabAttr === "tab1") {
                tabContent1.addClass("b-tabs-section_active");
            }
            if (tabAttr === "tab2") {
                tabContent2.addClass("b-tabs-section_active");
            }
        });
    })();

    (function () {

        var btnPlus = $(".js-tooltip__input-plus");
        var btnMinus = $(".js-tooltip__input-minus");
        var btnRemove = $(".js-tooltip__remove");
        var btnCart = $(".b-section-cart__btn");
        var productTitle = $(".b-content-section__title");
        var count = $(".js-tooltip__count");
        var minValue = 1;
        var maxValue = 10;
        var result = $(".js-tooltip__total-value");
        var product = $(".js-product");
        var productValue = product.attr("data-val");
        var productName = product.attr("data-name");

        var userData = {
            product1: {
                name: "TheWarOfArt",
                price: 60
            },
            product2: {
                name: "TheImmortalsOfMeluha",
                price: 80
            },

            total: parseInt(result.text())
        };

        $(count).keyup(function() {

            var enterValue = $(this).val();
            var currentValue = $(this).parents(".js-tooltip__section-item").find(".js-itemData");
            currentValue.val(enterValue);
        });

        $(btnPlus).on( "click", function () {

            var countValue = $(this).parents(".js-tooltip__section-item").find(".js-tooltip__count");
            var currentValue = $(this).parents(".js-tooltip__section-item").find(".js-itemData");
            var value = countValue.val();

            if (value < maxValue) {
                var newValue = countValue.val( +value + 1 );

                currentValue.val(newValue[0].value);
            }
        });

        $(btnMinus).on( "click", function() {

            var countValue = $(this).parents(".js-tooltip__section-item").find(".js-tooltip__count");
            var currentValue = $(this).parents(".js-tooltip__section-item").find(".js-itemData");
            var value = countValue.val();

            if (value > minValue) {
                var newValue = countValue.val( +value - 1 );

                currentValue.val(newValue[0].value);
            }
        });

        $(btnRemove).on("click", product, function () {

            var currentElem = $(this).parents(".js-tooltip__section-item");
            currentElem.remove();
            var value = currentElem.attr("data-val");
            var result = userData.total - value;
            userData.total = result;
            $(".js-tooltip__total-value").html(result);
        });

        $(btnCart).on("click", function () {

            var product = "<div class='js-tooltip__section-item'>";
                product += "<a class='js-tooltip__item' href='#'>" + productTitle.text() + "</a>";
                product += "<label style='margin-left: 5px;'>";
                    product += "<input class='js-tooltip__input-minus' type='button' value='&#706;'/>";
                product += "</label>";
                product += "<label>";
                    product += "<input style='margin: 0 4px 0 2px;' class='js-tooltip__count' type='text' value='1'/>";
                product += "</label>";
                product += "<label>";
                    product += "<input class='js-tooltip__input-plus' type='button' value='&#707;'/>";
                product += "</label>";
                product += "<span class='js-tooltip__badge' style='margin-left: 10px;'>" + '&#215;' + "</span>";
                product += "<span class='js-tooltip__cy'>"+ "$" + "</span>";
                product += "<span class='js-tooltip__value'>" + productValue + "</span>";
                product += "<span class='js-tooltip__remove' title='remove item'>" + '&#215;' + "</span>";
                product += "<label>";
                    product += "<input class='js-itemData' type='hidden' data-name='" + productName +"' " +
                        "data-price='"+ productValue +"' value=''/>";
                product += "</label>";
            product += "</div>";

            $(".js-tooltip__quantity").append(product);

                userData.product = {
                    name: productName,
                    price: parseInt(productValue)
                };

            var newValue = userData.total + userData.product.price;
            userData.total = newValue;
            result.html(newValue);
        });
    })();
});