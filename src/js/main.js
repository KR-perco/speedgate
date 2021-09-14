import './vendor';
import './helpers';
import './components/social';
import { ieFix } from './vendor/ie-fix';
import { vhFix } from './vendor/vh-fix';
import { actualYear } from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';

import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, EffectCube, Mousewheel } from 'swiper/core';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { each } from 'jquery';

ieFix();
vhFix();
actualYear();

header.init();
lazyLoading.init();

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, EffectCube, Mousewheel]);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

Fancybox.bind("[data-fancybox-plyr]", {
    mainClass: 'fullVid',
    on: {
        // done: (fancybox, slide) => {

        //     var sliderVideos = $(".js-sliderdemo-2 .swiper-slide video");
        //     sliderVideos.each(function(index) {
        //         this.pause();
        //     });
        // },
        // closing: (fancybox, slide) => {
        //     let currentVideo = swiper3prod2.slides[swiper3prod2.activeIndex].children[0];
        //     currentVideo.play();
        // }
    }
});

var swiper1 = new Swiper(".slider-hero", {
    effect: "fade",
    loop: true,
    speed: 1300,
    fadeEffect: {
        crossFade: false
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".slider-hero .swiper-pagination",
        clickable: true,
    },
    on: {
        slideChange: function(swiper) {
            // let dynamicText = document.getElementById("js-dynamic-text-1");
            let dynamicSubtext = document.getElementById("js-dynamic-subtext-1");
            dynamicSubtext.innerHTML = swiper.slides[swiper.activeIndex].dataset.subtext;
        }
    },
});

var swiper2 = new Swiper(".slider-prod", {
    loop: true,
    pagination: {
        el: ".slider-prod .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-prod .swiper-button-next',
        prevEl: '.slider-prod .swiper-button-prev',
    },
    on: {
        init: function(swiper) { // фикс: почему-то slideChangeTransitionEnd при инициализации заполняет это поле, что глючит надпись 
            let dynamicText = document.getElementById("js-dynamic-text-3");
            dynamicText.innerHTML = "";
        },
        slideChangeTransitionEnd: function(swiper) {
            let dynamicText = document.getElementById("js-dynamic-text-3");
            let dynamicTextReserve = document.getElementById("js-dynamic-reserve");
            let dynamicSubtext = document.getElementById("js-dynamic-subtext-3");
            dynamicText.innerHTML = swiper.slides[swiper.activeIndex].dataset.text;
            dynamicTextReserve.innerHTML = swiper.slides[swiper.activeIndex].dataset.text;
            dynamicSubtext.innerHTML = swiper.slides[swiper.activeIndex].dataset.subtext;
        }
    },
});

// ST-01
var names0 = [];
$(".js-sliderdemo-0 .swiper-slide").each(function(i) {
    names0.push($(this).data("name"));
});
var swiper3prod0 = new Swiper('.js-sliderdemo-0', {
    effect: "fade",
    loop: false,
    pagination: {
        el: '.js-sliderdemo-0 + .swiper-pagination',
        type: 'custom',
        clickable: true,
        renderCustom: function(swiper, current, total) {
            var text = "";
            for (let i = 1; i <= total; i++) {
                let j = i - 1
                if (current == i) {
                    text += "<span class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names0[j] + "</div></span>";
                } else {
                    text += "<span class='swiper-pagination-bullet'><div class='centered-bullet'>" + names0[j] + "</div></span>";
                }
            }
            return text;
        },

    },
});

var sliderVideos0 = $(".js-sliderdemo-0 .swiper-slide video");
sliderVideos0.each(function(index) {
    this.addEventListener('ended', () => {
        if (swiper3prod0.activeIndex == 5) {
            swiper3prod0.slideTo(0)
        } else {
            swiper3prod0.slideNext();
        }
    });
});

swiper3prod0.on('slideChange', function() {
    let currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0];
    let prevVideo = swiper3prod0.slides[swiper3prod0.previousIndex].children[0];
    sliderVideos0.each(function(index) {
        this.pause();
        this.currentTime = 0;
    });
    currentVideo.play();
    prevVideo.pause();
    prevVideo.currentTime = 0;
});

// ST-11 
var names1 = [];
$(".js-sliderdemo-1 .swiper-slide").each(function(i) {
    names1.push($(this).data("name"));
});
var swiper3prod1 = new Swiper('.js-sliderdemo-1', {
    effect: "fade",
    loop: false,
    pagination: {
        el: '.js-sliderdemo-1 + .swiper-pagination',
        type: 'custom',
        clickable: true,
        renderCustom: function(swiper, current, total) {
            var text = "";
            for (let i = 1; i <= total; i++) {
                let j = i - 1
                if (current == i) {
                    text += "<span class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names1[j] + "</div></span>";
                } else {
                    text += "<span class='swiper-pagination-bullet'><div class='centered-bullet'>" + names1[j] + "</div></span>";
                }
            }
            return text;
        },
    },
});

var sliderVideos1 = $(".js-sliderdemo-1 .swiper-slide video");
sliderVideos1.each(function(index) {
    this.addEventListener('ended', () => {
        if (swiper3prod1.activeIndex == 5) {
            swiper3prod1.slideTo(0)
        } else {
            swiper3prod1.slideNext();
        }
    });
});

swiper3prod1.on('slideChange', function() {
    let currentVideo = swiper3prod1.slides[swiper3prod1.activeIndex].children[0];
    let prevVideo = swiper3prod1.slides[swiper3prod1.previousIndex].children[0];
    sliderVideos1.each(function(index) {
        this.pause();
        this.currentTime = 0;
    });
    currentVideo.play();
    prevVideo.pause();
    prevVideo.currentTime = 0;
});

// ST-02 
var names2 = [];
$(".js-sliderdemo-2 .swiper-slide").each(function(i) {
    names2.push($(this).data("name"));
});
var swiper3prod2 = new Swiper('.js-sliderdemo-2', {
    effect: "fade",
    loop: false,
    pagination: {
        el: '.js-sliderdemo-2 + .swiper-pagination',
        type: 'custom',
        clickable: true,
        renderCustom: function(swiper, current, total) {
            var text = "";
            for (let i = 1; i <= total; i++) {
                let j = i - 1
                if (current == i) {
                    text += "<span class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names2[j] + "</div></span>";
                } else {
                    text += "<span class='swiper-pagination-bullet'><div class='centered-bullet'>" + names2[j] + "</div></span>";
                }
            }
            return text;
        },

    },
});

var sliderVideos2 = $(".js-sliderdemo-2 .swiper-slide video");
sliderVideos2.each(function(index) {
    this.addEventListener('ended', () => {
        if (swiper3prod2.activeIndex == 5) {
            swiper3prod2.slideTo(0)
        } else {
            swiper3prod2.slideNext();
        }
    });
});

swiper3prod2.on('slideChange', function() {
    let currentVideo = swiper3prod2.slides[swiper3prod2.activeIndex].children[0];
    let prevVideo = swiper3prod2.slides[swiper3prod2.previousIndex].children[0];
    sliderVideos2.each(function(index) {
        this.pause();
        this.currentTime = 0;
    });
    currentVideo.play();
    prevVideo.pause();
    prevVideo.currentTime = 0;
});

// ST-02 
var names3 = [];
$(".js-sliderdemo-3 .swiper-slide").each(function(i) {
    names3.push($(this).data("name"));
});
var swiper3prod3 = new Swiper('.js-sliderdemo-3', {
    effect: "fade",
    loop: false,
    pagination: {
        el: '.js-sliderdemo-3 + .swiper-pagination',
        type: 'custom',
        clickable: true,
        renderCustom: function(swiper, current, total) {
            var text = "";
            for (let i = 1; i <= total; i++) {
                let j = i - 1
                if (current == i) {
                    text += "<span class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names3[j] + "</div></span>";
                } else {
                    text += "<span class='swiper-pagination-bullet'><div class='centered-bullet'>" + names3[j] + "</div></span>";
                }
            }
            return text;
        },

    },
});

var sliderVideos3 = $(".js-sliderdemo-3 .swiper-slide video");
sliderVideos3.each(function(index) {
    this.addEventListener('ended', () => {
        if (swiper3prod3.activeIndex == 5) {
            swiper3prod3.slideTo(0)
        } else {
            swiper3prod3.slideNext();
        }
    });
});

swiper3prod3.on('slideChange', function() {
    let currentVideo = swiper3prod3.slides[swiper3prod3.activeIndex].children[0];
    let prevVideo = swiper3prod3.slides[swiper3prod3.previousIndex].children[0];
    sliderVideos3.each(function(index) {
        this.pause();
        this.currentTime = 0;
    });
    currentVideo.play();
    prevVideo.pause();
    prevVideo.currentTime = 0;
});


var swiperCube = new Swiper(".slider-cube", {
    loop: false,
    effect: "cube",
    slidesPerView: 1,
    speed: 900,
    cubeEffect: {
        shadow: false,
        slideShadows: false,
    },
    mousewheel: {
        eventsTarget: ".slider-cube",
        releaseOnEdges: true,
    },
    navigation: {
        nextEl: '.slider-cube .swiper-button-next',
        prevEl: '.slider-cube .swiper-button-prev',
    },
    on: {
        slideChangeTransitionEnd: function() {
            if (this.isBeginning || this.isEnd) {
                this.params.mousewheel.releaseOnEdges = true;
            } else {
                this.params.mousewheel.releaseOnEdges = false;
            }

            let sliderVideosRefactor1 = $(".js-sliderdemo-" + this.previousIndex + " .swiper-slide video");
            let sliderVideosRefactor2 = $(".js-sliderdemo-" + this.activeIndex + " .swiper-slide video");

            sliderVideosRefactor1.each(function() {
                this.pause();
                this.currentTime = 0;
            });
            sliderVideosRefactor2.each(function() {
                this.pause();
                this.currentTime = 0;
            });

            if (this.activeIndex == 0) {
                var targetVid = document.getElementById("prod-section-0").getElementsByTagName("video")[swiper3prod0.activeIndex];
            } else if (this.activeIndex == 1) {
                var targetVid = document.getElementById("prod-section-1").getElementsByTagName("video")[swiper3prod1.activeIndex];
            } else if (this.activeIndex == 2) {
                var targetVid = document.getElementById("prod-section-2").getElementsByTagName("video")[swiper3prod2.activeIndex];
            } else if (this.activeIndex == 3) {
                var targetVid = document.getElementById("prod-section-3").getElementsByTagName("video")[swiper3prod3.activeIndex];
            }

            targetVid.play();
        }
    }
});
swiperCube.mousewheel.disable();
var namesDop = [];
$(".js-sliderdemo-dop .swiper-slide").each(function(i) {
    namesDop.push($(this).data("name"));
});
var swiperDop = new Swiper(".slider-dop", {
    effect: "fade",
    loop: false,
    slidesPerView: 1,
    // mousewheel: {
    //     eventsTarget: ".dop-prod",
    //     releaseOnEdges: false,
    // },
    speed: 500,
    pagination: {
        el: '.slider-dop__wrap + .swiper-pagination-container .swiper-pagination',
        type: 'custom',
        clickable: true,
        renderCustom: function(swiper, current, total) {
            var text = "";
            for (let i = 1; i <= total; i++) {
                let j = i - 1
                if (current == i) {
                    text += "<span class='cell-6 cell-4-md swiper-pagination-btn swiper-pagination-bullet swiper-pagination-btn-active'><div class='centered-btn'>" + namesDop[j] + "</div></span>";
                } else {
                    text += "<span class='cell-6 cell-4-md swiper-pagination-btn swiper-pagination-bullet'><div class='centered-btn'>" + namesDop[j] + "</div></span>";
                }
            }
            return text;
        },
    },
    // on: {
    //     slideChangeTransitionEnd: function() {
    //         if (this.isBeginning || this.isEnd) {
    //             this.params.mousewheel.releaseOnEdges = true;
    //         } else {
    //             this.params.mousewheel.releaseOnEdges = false;
    //         }
    //     }
    // }
});

var swiper4 = new Swiper(".slider-gallery", {
    effect: "fade",
    loop: true,
    // height: 800,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.slider-gallery .swiper-button-next',
        prevEl: '.slider-gallery .swiper-button-prev',
    },
});


window.onload = function() {
    const ShowScroll = btnScrollTop => {
        window.addEventListener('scroll', () => {
            const shouldBeVisible = window.pageYOffset > 1700;
            btnScrollTop.classList.toggle('visible', shouldBeVisible);
        })
    }
    ShowScroll(document.getElementById('scroll-top'));
};

$(".btn-change").on("click", function(e) {
    $(".btn-change").toggleClass("active");
    $("#main").toggleClass("ver2");
});


$(".btn-change").on("click", function(e) {
    $(".btn-change").toggleClass("active");
    $("#main").toggleClass("ver2");
});

$("[data-prod-section]").on("click", function(e) {
    e.preventDefault;
    gsap.to(window, { duration: .5, scrollTo: "#products-cube" });
    swiperCube.slideTo($(this).data("prod-section"));
});



// var sectionEnterFromTop = document.querySelector("#products");
var sectionCube = document.querySelector("#products-cube");
var sectionDopProd = document.querySelector("#dop-prod");
// var sectionGallery = document.querySelector(".three");
var easeType = "power2";
var easeTime = .3;
var sliderhero = document.querySelector(".slider-hero");



// sectionEnterFromTop.addEventListener('wheel', function(event) {
//     if (event.deltaY < 0) {} else if (event.deltaY > 0) {
//         gsap.to(window, { duration: easeTime, scrollTo: "#products-cube", ease: easeType });
//     }
// });
sectionCube.addEventListener('wheel', function(event) {
    if (event.deltaY < 0 && swiperCube.activeIndex == 0 && swiperCube.params.mousewheel.releaseOnEdges) { //"up"  
        event.preventDefault;
        gsap.to(window, { duration: easeTime, scrollTo: "#products", ease: easeType });
    } else if (event.deltaY > 0 && swiperCube.activeIndex == 3 && swiperCube.params.mousewheel.releaseOnEdges) { //"down" 
        event.preventDefault;
        gsap.to(window, { duration: easeTime, scrollTo: "#dop-prod", ease: easeType });
    } else {
        gsap.to(window, { duration: easeTime, scrollTo: "#products-cube", ease: easeType });
        swiperCube.mousewheel.enable();
    }
});

sectionDopProd.addEventListener('wheel', function(event) {
    if (event.deltaY < 0 && swiperDop.activeIndex == 0 && swiperDop.params.mousewheel.releaseOnEdges) { //"up"  
        gsap.to(window, { duration: easeTime, scrollTo: "#products-cube", ease: easeType });
    }
    // else if (event.deltaY > 0 && swiperDop.activeIndex == 5 && swiperCube.params.mousewheel.releaseOnEdges) { //"down" 
    //     event.preventDefault;
    //     gsap.to(window, { duration: easeTime, scrollTo: ".three", ease: easeType });
    // } else {
    //     gsap.to(window, { duration: easeTime, scrollTo: "#dop-prod", ease: easeType });
    // }
});


// sectionGallery.addEventListener('wheel', function(event) {
//     if (event.deltaY < 0) {
//         gsap.to(window, { duration: easeTime, scrollTo: "#dop-prod", ease: easeType });
//     }
// });


sliderhero.addEventListener('click', function(event) {
    console.log(swiper1.slideNext());
});

// Динамическая смена якоря

// var menu_selector = ".dot-nav"; 

// function onScroll(){
// var scroll_top = $(document).scrollTop();
// $(menu_selector + " a").each(function(){
//     var hash = $(this).attr("href");
//     var target = $(hash);
//     if (target.position().top <= scroll_top && target.position().top + 
//     target.outerHeight() > scroll_top) {
//         $(menu_selector + " a.active").removeClass("active");
//         $(this).addClass("active");
//     } else {
//         $(this).removeClass("active");
//     }
// });
// }

// $(document).ready(function () {

// $(document).on("scroll", onScroll);

// $("a[href^=#]").click(function(e){
//     e.preventDefault();

//     $(document).off("scroll");
//     $(menu_selector + " a.active").removeClass("active");
//     $(this).addClass("active");
//     var hash = $(this).attr("href");
//     var target = $(hash);

//     $("html, body").animate({
//         scrollTop: target.offset().top
//     }, 500, function(){
//         window.location.hash = hash;
//         $(document).on("scroll", onScroll);
//     });

// });