import './vendor';
import './helpers';
import './components/social';
import { ieFix } from './vendor/ie-fix';
import { vhFix } from './vendor/vh-fix';
import { actualYear } from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';
import scrollToAnchor from './modules/scrollToAnchor';
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/core';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";

ieFix();
vhFix();
actualYear();
scrollToAnchor.init();

header.init();
lazyLoading.init();

SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade]);

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
        slideChange: function(swiper) {
            let dynamicText = document.getElementById("js-dynamic-text");
            let dynamicSubtext = document.getElementById("js-dynamic-subtext");
            dynamicText.innerHTML = swiper.slides[swiper.activeIndex].dataset.text;
            dynamicSubtext.innerHTML = swiper.slides[swiper.activeIndex].dataset.subtext;
        }
    },
});

// ST-01
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
    on: {
        init: function() {
            // console.log("swiper init");
        }
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

// ST-11 
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
    on: {
        init: function() {
            // console.log("swiper init");
        }
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



$(".js-startstop").on("click", function(e) {
    let next = $(this).next()
    let vids = next.find("video");

    vids.each(function() {
        $(this).trigger("pause");
    });
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
    on: {
        init: function() {
            // console.log("swiper init");
        }
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


var swiper4 = new Swiper(".slider-gallery", {
    effect: "fade",
    loop: true,
    // height: 800,
    // autoplay: {
    //     delay: 3000,
    //     disableOnInteraction: false,
    // },
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