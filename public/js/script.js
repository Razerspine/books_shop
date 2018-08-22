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

        var btnPlus = $(".js-section-1 .js-tooltip__input-plus");
        var btnMinus = $(".js-section-1 .js-tooltip__input-minus");
        var btnRemove = $(".js-section-1 .js-tooltip__remove");
        var countValue = $(".js-section-1 .js-tooltip__count");
        var minValue = 1;
        var maxValue = 10;

        $(btnPlus).click(function(){

            $(countValue).val(parseInt(countValue.val()) + 1 );

            if (parseInt(countValue.val()) >= maxValue) {
                return countValue.val(maxValue);
            }
        });

        $(btnMinus).click(function(){

            $(countValue).val(parseInt(countValue.val()) - 1 );

            if (parseInt(countValue.val()) <= minValue) {
                 return countValue.val(minValue);
            }
        });

        $(btnRemove).click(function () {
            $(".js-section-1").remove();
        });
    })();
});