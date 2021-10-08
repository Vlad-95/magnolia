$(document).ready(function() {
    //===========Мобильное меню
    let body = $('body')
    let windowWidth = window.innerWidth;
    let header = $('.header');
    let headerWrap = $('.header__wrap');
    let nav = header.find('.nav');
    let phone = header.find('.phone');
    let burger = $('.burger');
    let windowHeight = $(window).height();

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

    // переменные для скролла
    let allProductItems = $('.product__item');

    // анимация закрашивания
    $(window).scroll(function() {
        
        allProductItems.each(function() {
            if (($(this).offset().top - $(window).scrollTop()) < windowHeight / 2) {
                $(this).addClass('anim');
            }
            
        })
    })

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

    //========Преимущества=====
    
    //открытие по клику
    function showAdvantage () {
        advantageFlag = true;
        let currentAdvantage = $(this).closest('.advantages__item');
        let currentAdvantageData = currentAdvantage.attr('data-item');
        let advantagesContent = $('.advantages-content');
        let currentAdvantageContent = $('.advantages-content__item[data-item="'+ currentAdvantageData +'"]');

        $('html, body').animate({scrollTop: $('.advantages').offset().top}, 300)
        currentAdvantage.removeClass('opacity').siblings().not('.advantages__item_main').addClass('opacity');
        advantagesContent.fadeIn();
        currentAdvantageContent.fadeIn().siblings('.advantages-content__item').hide();
        //пагинация
        $('.pagination__item').eq(currentAdvantage.index() - 1).addClass('active');
    }

    //закрытие по лику
    function hideAdvantage () {        
        let advantagesContent = $('.advantages-content');
        let advantagesContentItem = $('.advantages-content__item');
        
        $('.advantages__item').removeClass('opacity');
        $('.pagination__item').removeClass('active');
        advantagesContent.fadeOut();
        advantagesContentItem.fadeOut();
        
    }

    // пагинация
    function advantagesPag () {
        let targetPage = $(this).not('.active');
        let targetPageData = targetPage.attr('data-item');
        let targetAdvantagesContentItem = $('.advantages-content__item[data-item="'+ targetPageData +'"]');

        targetPage.addClass('active').siblings().removeClass('active');
        targetAdvantagesContentItem.fadeIn().siblings('.advantages-content__item').hide();

    }

    $('.advantages-content .close').click(hideAdvantage);

    $('.advantages__item .btn').click(showAdvantage);
    
    $('.pagination__item').click(advantagesPag);

    //========Преимущества КОНЕЦ=========

    //паралакс эффект
    function parallax (evt) {
        let parallaxItem = $('.parallax');
        let scrolled = $(window).scrollTop();

        parallaxItem.each(function() {
            let currentItemDelay = $(this).attr('data-parallax-delay')
            
            $(this).css('top',(0 - (scrolled*currentItemDelay))+'px');
        })
    }

    // if ($(window).width() >= 992) {
    //     $(window).scroll(parallax);
    // }

    

    // появление элементов
    $(window).scroll(function () {
        $('.fade').each(function() {
            if (($(this).offset().top - $(window).scrollTop()) < windowHeight / 2) {
                $(this).addClass('anim');
            }
        })
    })

});
