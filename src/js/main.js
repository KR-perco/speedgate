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
        done: (fancybox, slide) => {

            var sliderVideos = $(".slider-demonstration .swiper-slide video");
            sliderVideos.each(function(index) {
                this.pause();
            });
        },
        closing: (fancybox, slide) => {
            let currentVideo = swiper3.slides[swiper3.activeIndex].children[0];
            currentVideo.play();
        }
    }
});

var swiper1 = new Swiper(".slider-hero", {
    effect: "fade",
    loop: true,
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

var names = [];
$(".slider-demonstration .swiper-slide").each(function(i) {
    names.push($(this).data("name"));
});
var swiper3 = new Swiper('.slider-demonstration', {
    effect: "fade",
    loop: false,
    pagination: {
        el: '.slider-demonstration + .swiper-pagination',
        type: 'custom',
        clickable: true,
        renderCustom: function(swiper, current, total) {
            var text = "";
            for (let i = 1; i <= total; i++) {
                let j = i - 1
                if (current == i) {
                    text += "<span class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names[j] + "</div></span>";
                } else {
                    text += "<span class='swiper-pagination-bullet'><div class='centered-bullet'>" + names[j] + "</div></span>";
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

var sliderVideos = $(".slider-demonstration .swiper-slide video");
sliderVideos.each(function(index) {
    this.addEventListener('ended', () => {
        if (swiper3.activeIndex == 5) {
            swiper3.slideTo(0)
        } else {
            swiper3.slideNext();
        }
    });
});

swiper3.on('slideChange', function() {
    let currentVideo = swiper3.slides[swiper3.activeIndex].children[0];
    let prevVideo = swiper3.slides[swiper3.previousIndex].children[0];
    sliderVideos.each(function(index) {
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

var figure = $(".chess__row");
var vid = figure.find("video");

[].forEach.call(figure, function(item, index) {
    item.addEventListener('mouseover', hoverVideo.bind(item, index), false);
    item.addEventListener('mouseout', hideVideo.bind(item, index), false);
});

function hoverVideo(index, e) {
    vid[index].play();
}

function hideVideo(index, e) {
    vid[index].pause();
}

$("#adapt-vid").on("click", function(e) {
    e.preventDefault;
    $(".js-video-side-gap").toggleClass("cell-2").toggleClass("cell-1");
    $(".js-video-main-wrap").toggleClass("cell-8").toggleClass("cell-10");
    swiper3.update();
});