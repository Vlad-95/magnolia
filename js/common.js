window.onload = function() {
    //===========Мобильное меню
    let body = document.querySelector('body')
    let windowWidth = window.innerWidth;
    let header = document.querySelector('.header');
    let headerWrap = header.querySelector('.header__wrap');
    let nav = header.querySelector('.nav');
    let phone = header.querySelector('.phone');
    let burger = header.querySelector('.burger');
    

    if (windowWidth <= 992) {
        //создаем контейнер для менюшки
        let mobileMenu = document.createElement('div');
        mobileMenu.classList.add('mobile-menu');

        headerWrap.append(mobileMenu)

        //клонируем элементы хедера
        let mobileNav = nav.cloneNode(true);
        let mobilePhone = phone.cloneNode(true);

        mobileMenu.append(mobileNav);
        mobileMenu.append(mobilePhone);        
    }

    let flag = false; //флаг - false менюшка закрыта
    //появление менюшки
    function slideMenu (evt)  {
        let mobileMenu = document.querySelector('.mobile-menu');

        if (!flag) {          
            flag = true;
            
            mobileMenu.classList.add('visible'); // добавляем display=block чтобы анимация отрабатывала плавно
            burger.classList.add('active');
            body.classList.add('no-scroll');
            body.classList.add('opacity-layer');

            setTimeout(() => {
                mobileMenu.classList.add('animate'); // слайд менюшки
            });               
        } else {
            flag = false;

            mobileMenu.classList.remove('animate');
            burger.classList.remove('active');
            body.classList.remove('no-scroll');
            body.classList.remove('opacity-layer');

            setTimeout(() => {
                mobileMenu.classList.remove('active');
                mobileMenu.classList.remove('visible');
            }, 500);
        }        
    };    

    burger.addEventListener('click', slideMenu);

    //============Мобильное меню (КОНЕЦ)


    //========ПРОДУКЦИЯ ГЕКСЫ
    let productItem = document.querySelectorAll('.product__item:not(.product__item_empty)');
    let productBlock = document.querySelector('.product-detail');
    
    //функция показа соответствующего блока
    function showProductItem (evt) {
        let target = evt.currentTarget.getAttribute('data-item');

        let productItemContent = productBlock.querySelector('.product-detail__item[data-item="'+ target +'"]');

        let productItems = productItemContent.parentElement.children; // все элементы
        //чистим классы
        [].forEach.call(productItems, function(item) {
            item.classList.remove('visible');
            item.classList.remove('animate');
        });        

        // показываем нужный элемент
        productItemContent.classList.add('visible');
       
        setTimeout(() => {
            productItemContent.classList.add('animate');
        });       
    }

    productItem.forEach(function(item) {
        item.addEventListener('click', showProductItem)
    })
    

    
    //========ПРОДУКЦИЯ ГЕКСЫ (КОНЕЦ)
}


// var proton;
// var canvas;
// var context;
// var container;
// var renderer;
// var stats;
// var logoZone;
// var emitter;
// var imageDatas;
// var rect, rect2;
// var gravityBehaviour, randomBehaviour, gravityWellBehaviour;
// var rootIndex = 1;

// main();

// function main() {
    
//     canvas = document.getElementById("canvas");
//     canvas.width = 1003;
//     canvas.height = 610;
//     context = canvas.getContext('2d');
//     addStats();

//     imageDatas = [];
//     rect = new Proton.Rectangle((canvas.width - 455) / 2, (canvas.height - 200) / 2, 455, 200);
//     rect2 = new Proton.Rectangle(rect.x - 100, rect.y - 100, rect.width + 200, rect.height + 200);
//     randomBehaviour = new Proton.RandomDrift(0, 0, 0.05);
//     var rectZone = new Proton.RectZone(rect2.x, rect2.y, rect2.width, rect2.height);
//     crossBehaviour = new Proton.CrossZone(rectZone, 'bound');
//     gravityWellBehaviour = new Proton.GravityWell({
//         x: canvas.width / 2,
//         y: canvas.height / 2
//     }, 0, 0);

//     canvas.addEventListener('mousedown', mouseDownHandler, false);
//     loadImage();
// }

// function addStats() {
//     stats = new Stats();
//     stats.setMode(2);
//     stats.domElement.style.position = 'absolute';
//     stats.domElement.style.left = '0px';
//     stats.domElement.style.top = '0px';
//     document.getElementById('container').appendChild(stats.domElement);
// }

// function loadImage() {
//     logoZone = [];
//     var logo = [];
//     var loader = new PxLoader();
//     logo[0] = loader.addImage('img/logo_magnolia.png');
//     logo[1] = loader.addImage('img/logo_magnolia.png');

//     loader.addCompletionListener(function() {

//         for (var i = 0; i < 2; i++) {
//             var imagedata = Proton.Util.getImageData(context, logo[i], rect);
//             logoZone.push(new Proton.ImageZone(imagedata, rect.x, rect.y));
//             imageDatas.push(imagedata);
//         }
//         createProton(rect);
//         tick();
//     });
//     loader.start();
// }

// function createProton() {
//     proton = new Proton;
//     emitter = new Proton.Emitter();
//     emitter.rate = new Proton.Rate(new Proton.Span(3000), new Proton.Span(0.1));
//     emitter.addInitialize(new Proton.Mass(1));
//     emitter.addInitialize(new Proton.P(new Proton.RectZone(rect2.x, rect2.y, rect2.width, rect2.height)));

//     emitter.addBehaviour(randomBehaviour);
//     emitter.addBehaviour(customToZoneBehaviour(logoZone[0], logoZone[1]));
//     emitter.addBehaviour(crossBehaviour);
//     emitter.addBehaviour(gravityWellBehaviour);

//     emitter.emit('once');
//     proton.addEmitter(emitter);

//     renderer = new Proton.PixelRenderer(canvas);
//     renderer.createImageData(rect2);
//     proton.addRenderer(renderer);
// }

// function customToZoneBehaviour(zone1, zone2) {
//     return {
//         initialize: function(particle) {
//             particle.R = Math.random() * 10;
//             particle.Angle = Math.random() * Math.PI * 2;
//             particle.speed = Math.random() * (-2) + 1;
//             particle.zones = [zone1.getPosition().clone(), zone2.getPosition().clone()];
//             particle.colors = getColor(particle.zones);
//         },

//         applyBehaviour: function(particle) {
//             if (rootIndex % 2 != 0) {
//                 particle.v.clear();
//                 particle.Angle += particle.speed;
//                 var index = (rootIndex % 4 + 1) / 2 - 1;
//                 var x = particle.zones[index].x + particle.R * Math.cos(particle.Angle);
//                 var y = particle.zones[index].y + particle.R * Math.sin(particle.Angle);

//                 particle.p.x += (x - particle.p.x) * 0.05;
//                 particle.p.y += (y - particle.p.y) * 0.05;
//                 particle.rgb.r = particle.colors[index].r;
//                 particle.rgb.g = particle.colors[index].g;
//                 particle.rgb.b = particle.colors[index].b;
//             }
//         }
//     }

// }

// function getColor(posArr) {
//     var arr = [];
//     for (var i = 0; i < posArr.length; i++) {
//         arr.push(logoZone[i].getColor(posArr[i].x, posArr[i].y));
//     }
//     return arr;
// }

// function mouseDownHandler(e) {
//     rootIndex++;
//     console.log(rootIndex)
//     if (rootIndex % 2 == 0) {
//         if (rootIndex % 4 == 2)
//             randomBehaviour.reset(30, 30, 0.001);
//         else
//             gravityWellBehaviour.reset({
//                 x: canvas.width / 2,
//                 y: canvas.height / 2
//             }, 3000, 500);
//     } else {
//         randomBehaviour.reset(0, 0, 0.001);
//         gravityWellBehaviour.reset({
//             x: canvas.width / 2,
//             y: canvas.height / 2
//         }, 0, 0);
//     }
// }

// function tick() {
//     requestAnimationFrame(tick);

//     stats.begin();
//     proton.update();
//     stats.end();
// }