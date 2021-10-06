$(document).ready(function() {
    //===========Мобильное меню
    let body = $('body')
    let windowWidth = window.innerWidth;
    let header = $('.header');
    let headerWrap = $('.header__wrap');
    let nav = header.find('.nav');
    let phone = header.find('.phone');
    let burger = $('.burger');


    if (windowWidth <= 992) {
        //создаем контейнер для менюшки
        let mobileMenu = $(document.createElement('div'));
        mobileMenu.addClass('mobile-menu');

        headerWrap.append(mobileMenu)

        //клонируем элементы хедера
        let mobileNav = nav.clone();
        let mobilePhone = phone.clone();

        mobileMenu.append(mobileNav);
        mobileMenu.append(mobilePhone);        
    }

    function showMenu() {
        let mobileMenu = $('.mobile-menu');

        burger.toggleClass('active');
        body.toggleClass('no-scroll');
        mobileMenu.toggleClass('active');
    }

    burger.click(showMenu);

    //============Мобильное меню (КОНЕЦ)

    //=====Якорные ссылки====
    function anchorLinks () {
        let currentLink = $(this).attr('data-anchor');
        let currentDiv = $('[data-anchor="'+ currentLink +'"]:not(a)');        

        //скролл до элемента
        $('html, body').animate({scrollTop: currentDiv.offset().top}, 500);

        if (windowWidth <= 992) {
            let mobileMenu = $('.mobile-menu');

            burger.removeClass('active');
            body.removeClass('no-scroll');
            mobileMenu.removeClass('active');
        }
    }

    $('a[data-anchor]').click(anchorLinks);

    //=====Якорные ссылки КОНЕЦ==

    //========ПРОДУКЦИЯ ГЕКСЫ
    let productItem = $('.product__item:not(.product__item_empty), .footer .nav__item');
    let productBlock = $('.product-detail');
    let productCloseBtn = $('.product-detail__btns .close');

    // функция показа соответствующейго блока
    function showProductItem () {
        let currentItem = $(this);
        let currentItemData = $(this).attr('data-item');
        let productItemContent = $('.product-detail__item[data-item="'+ currentItemData +'"]');

        currentItem.addClass('active').siblings().removeClass('active');
        productBlock.fadeIn();
        productItemContent.fadeIn().siblings().hide();

        //скролл до элемента
        $('html, body').animate({scrollTop: productBlock.offset().top}, 300)

    }

    // функция закрытия блока
    function hideProductItem () {
        let closeBtn = $(this);
        let productItemContent = $(this).closest('.product-detail__item');
        let productItemContentData = productItemContent.attr('data-item');

        productItemContent.slideUp();
        productBlock.slideUp();
        productItem.removeClass('active');
    }

    productItem.click(showProductItem);
    productCloseBtn.click(hideProductItem);

    //========ПРОДУКЦИЯ ГЕКСЫ (КОНЕЦ)
});
