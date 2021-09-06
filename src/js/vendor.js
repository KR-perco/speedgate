import 'core-js/stable';
import 'regenerator-runtime/runtime';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import objectFitImages from 'object-fit-images';
import MmenuLight from 'mmenu-light';
import AOS from 'aos';
import Typed from 'typed.js';

// import objectFitVideos from 'object-fit-videos';

svg4everybody();
objectFitImages();
// objectFitVideos();

window.$ = $;
window.jQuery = $;
window.objectFitImages = objectFitImages;
// window.objectFitVideos = objectFitVideos;

require('ninelines-ua-parser');

AOS.init({
    // Global settings:
    // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    // initClassName: 'aos-init', // class applied after initialization
    // animatedClassName: 'aos-animate', // class applied on animation
    // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    // offset: 120, // offset (in px) from the original trigger point
    // delay: 0, // values from 0 to 3000, with step 50ms
    // duration: 400, // values from 0 to 3000, with step 50ms
    // easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    // mirror: false, // whether elements should animate out while scrolling past them
    // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

var tOptions1 = {
    strings: ['Скоростные проходы'],
    typeSpeed: 40,
    showCursor: false,
};
var tOptions2 = {
    strings: ['Преимущества'],
    typeSpeed: 40,
    showCursor: false,
};
var tOptions3 = {
    strings: ['Скоростной проход ST-01'],
    typeSpeed: 40,
    showCursor: false,
};

var tOptions4 = {
    strings: ['Установка дополнительного оборудования'],
    typeSpeed: 40,
    showCursor: false,
};

var tOptions5 = {
    strings: ['Фотогалерея'],
    typeSpeed: 40,
    showCursor: false,
};

var tOptions6 = {
    strings: ['Почему PERCo'],
    typeSpeed: 40,
    showCursor: false,
};

var tOptions7 = {
    strings: ['Напишите нам'],
    typeSpeed: 40,
    showCursor: false,
};

var typed1 = new Typed('#js-dynamic-text-1', tOptions1);
var typed2 = new Typed('#js-dynamic-text-2', tOptions2);
var typed3 = new Typed('#js-dynamic-text-3', tOptions3);
var typed4 = new Typed('#js-dynamic-text-4', tOptions4);
var typed5 = new Typed('#js-dynamic-text-5', tOptions5);
var typed6 = new Typed('#js-dynamic-text-6', tOptions6);
var typed7 = new Typed('#js-dynamic-text-7', tOptions7);