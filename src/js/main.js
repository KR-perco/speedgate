import './vendor';
import helpers from './helpers';
import './components/social';
import { ieFix } from './vendor/ie-fix';
import { vhFix } from './vendor/vh-fix';
import { actualYear } from './modules/actualYear';
import header from './components/header';
import lazyLoading from './modules/lazyLoading';

import Typed from "typed.js";
import inView from "in-view";
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, EffectCube, Mousewheel, Lazy } from 'swiper/core';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import MmenuLight from "mmenu-light";
import AOS from "aos";
import { each } from 'jquery';

ieFix();
vhFix();
actualYear();

header.init();
lazyLoading.init();


SwiperCore.use([Navigation, Pagination, Autoplay, EffectFade, EffectCube, Mousewheel, Lazy]);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);


var promises = [];
var responsePromises = [];
const MOCK_URL_SOURCE = [
    "ehZqNokVylyWk",
    "hDqq4LalRAUiQ",
    "yjTccXlnh6LXW",
    "3FjEPbKqEPhPpmC8uY",
    "3ohs7NLUXtNW98mtIQ",
    "9U8wVRThbHWA8ADPa2",
    "3og0IvJaagEkDMbRi8",
];
var randomItem = () => {
    return MOCK_URL_SOURCE[
        Math.floor(Math.random() * MOCK_URL_SOURCE.length)
    ];
};


const refactorProdMap = new Map([
    ['0_0', ['st01', '1']],
    ['0_1', ['st01', '2']],
    ['0_2', ['st01', '6']],
    ['0_3', ['st01', '4']],
    ['0_4', ['st01', '5']],
    ['0_5', ['st01', '3']],
    ['1_0', ['st11', '1']],
    ['1_1', ['st11', '2']],
    ['1_2', ['st11', '3']],
    ['1_3', ['st11', '4']],
    ['1_4', ['st11', '5']],
    ['1_5', ['st11', '6']],
    ['2_0', ['st02', '1']],
    ['2_1', ['st02', '2']],
    ['2_2', ['st02', '5']],
    ['2_3', ['st02', '4']],
    ['2_4', ['st02', '3']],
    ['3_0', ['wmd06_bh06', '1']],
    ['3_1', ['wmd06_bh06', '2']],
    ['3_2', ['wmd06_bh06', '3']],
    ['3_3', ['wmd06_bh06', '4']],
]);
let resolution_s = "320x182";
let resolution_lg = "586x330";
let resolution_wide = "990x560";

var intViewportHeight = window.innerHeight;
var intViewportWidth = window.innerWidth;


function startPlayback(video) {
    return video.play();
}

async function InsertCorrectVideo(mapVidOptions, resolution) {
    var videos = document.getElementsByTagName("video")
    var videosList = Array.prototype.slice.call(videos);

    videosList.forEach((value, ar) => {
        mapVidOptions.forEach((model, id) => {
            if (value.id == `index-${id}`) {

                let video = document.getElementById(value.id);
                let vidSource = document.createElement('source');
                if (video.canPlayType('video/mp4').length > 0) {
                    var typeVid = 'video/mp4; codecs="avc1.4D401E, mp4a.40.2"';
                    var urlVid = `https://media0.giphy.com/media/${randomItem()}/giphy.mp4`;
                    var pathToVid = `video/${model[0]}/${resolution}/${model[1]}.mp4`;
                } else if (video.canPlayType('video/webm').length > 0) {
                    var typeVid = 'video/webm';
                    var pathToVid = `video/${model[0]}/${resolution}/webm/${model[1]}.webm`;
                } else {
                    var pathToVid = "";
                }
                if (video.getElementsByTagName('source').length > 0) {
                    var sourceEl = video.getElementsByTagName("source"),
                        index;
                    for (index = sourceEl.length - 1; index >= 0; index--) {
                        sourceEl[index].parentNode.removeChild(sourceEl[index]);
                    };
                }
                vidSource.setAttribute('src', pathToVid);
                vidSource.setAttribute('type', typeVid);

                video.appendChild(vidSource);

                promises.push(video);
                // asyncVideo(video);
            }
        });
    });
    console.log(promises);
    responsePromises = await Promise.all(promises).then(() => {
        console.log('The play() fulfilled');
        for (let index = 0; index < promises.length; index++) {

            promises[index].load();
            // startPlayback(promises[index]);
        }
    }).catch(error => {
        console.log('The play() rejected');
        console.log(error);
        // console.log('Use the Play button instead.');
        // var playButton = document.querySelector('#play'); 
    });
}

function anchorPhotoGallery() {
    var galleryToScrollElHeight = document.querySelector(".slider-gallery").offsetHeight / 2;
    var galleryConst = (intViewportHeight / 2) - galleryToScrollElHeight + 90;
    document.getElementById("gallery").style.top = "-" + galleryConst + "px";
}

function positionArrowsCube() {
    var cubeWrapVideoHeight = document.querySelector(".js-sliderdemo-0").offsetHeight / 2;
    var cubeBtnHeight = document.querySelector(".header-demo__video-btn").offsetHeight / 2;
    var cubeWrapVideoOffset = document.querySelector(".js-sliderdemo-0").offsetTop;
    var cubeBtnOffset = document.querySelector(".header-demo__video-btn").offsetTop;
    var cubeProdSection = document.getElementById("prod-section-0");
    var styleProdSection = cubeProdSection.currentStyle || window.getComputedStyle(cubeProdSection);
    styleProdSection = styleProdSection.paddingTop;
    styleProdSection = parseInt(styleProdSection.replace('px', ''), 10);
    if (intViewportWidth > 1024) {
        // для десктопа 
        document.querySelector(".slider-cube-nav").style.top = (cubeWrapVideoHeight + cubeWrapVideoOffset + styleProdSection) + "px";
    } else {
        // для планшета   
        console.log("cubeBtnHeight: " + cubeBtnHeight + " cubeBtnOffset: " + cubeBtnOffset + " styleProdSection: " + styleProdSection);
        document.querySelector(".slider-cube-nav").style.top = (cubeBtnHeight + cubeBtnOffset + styleProdSection) + "px";
    }
}

window.onload = function() {

    AOS.init({
        once: true,
    });

    Fancybox.bind("[data-fancybox-plyr]", {
        mainClass: 'fullVid',
        on: {
            done: (fancybox, slide) => {

                var sliderVideos = $("#prod-section-" + swiperCube.activeIndex + " video");
                sliderVideos.each(function(index) {
                    this.pause();
                    console.log("pause из Fancybox");
                });
            },
            closing: (fancybox, slide) => {
                if (swiperCube.activeIndex == 0) {
                    var currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0];
                } else if (swiperCube.activeIndex == 1) {
                    var currentVideo = swiper3prod1.slides[swiper3prod1.activeIndex].children[0];
                } else if (swiperCube.activeIndex == 2) {
                    var currentVideo = swiper3prod2.slides[swiper3prod2.activeIndex].children[0];
                } else if (swiperCube.activeIndex == 3) {
                    var currentVideo = swiper3prod3.slides[swiper3prod3.activeIndex].children[0];
                } else {}
                currentVideo.play();
                console.log("play из Fancybox");
            }
        }
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
        strings: ['Скоростной проход ST‑01'],
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

    var tOptions8 = {
        strings: ['Скоростной проход ST‑01'],
        typeSpeed: 40,
        showCursor: false,
        onComplete: function(self) {
            document.querySelector(".js-sliderdemo-0").classList.add("reveal");
            document.getElementById("index-0_0").play();
            const refactorProdMap = new Map([
                ['0_1', ['st01', '2']],
                ['0_2', ['st01', '6']],
                ['0_3', ['st01', '4']],
                ['0_4', ['st01', '5']],
                ['0_5', ['st01', '3']],
                ['1_1', ['st11', '2']],
                ['1_2', ['st11', '3']],
                ['1_3', ['st11', '4']],
                ['1_4', ['st11', '5']],
                ['1_5', ['st11', '6']],
                ['2_1', ['st02', '2']],
                ['2_2', ['st02', '5']],
                ['2_3', ['st02', '4']],
                ['2_4', ['st02', '3']],
                ['3_1', ['wmd06_bh06', '2']],
                ['3_2', ['wmd06_bh06', '3']],
                ['3_3', ['wmd06_bh06', '4']],
            ]);

            if (intViewportWidth < 640) {
                InsertCorrectVideo(refactorProdMap, resolution_s);
            } else if (intViewportWidth > 640 && intViewportWidth < 1200) {
                console.log("test width is: 640 < intViewportWidth < 1200");
                InsertCorrectVideo(refactorProdMap, resolution_lg);
            } else {
                console.log("test width > 1200");
                InsertCorrectVideo(refactorProdMap, resolution_wide);
            }
        }
    };

    inView('#js-dynamic-text-1')
        .once('enter', el => {
            var typed1 = new Typed(el, tOptions1);
            const refactorProdMap = new Map([
                ['0_0', ['st01', '1']]
            ]);

            if (intViewportWidth < 640) {
                InsertCorrectVideo(refactorProdMap, resolution_s);
            } else if (intViewportWidth > 640 && intViewportWidth < 1200) {
                console.log("test width is: 640 < intViewportWidth < 1200");
                InsertCorrectVideo(refactorProdMap, resolution_lg);
            } else {
                console.log("test width > 1200");
                InsertCorrectVideo(refactorProdMap, resolution_wide);
            }
            positionArrowsCube();
        })

    inView('#js-dynamic-text-2')
        .once('enter', el => {
            var typed2 = new Typed(el, tOptions2);
            const refactorProdMap = new Map([
                ['1_0', ['st11', '1']],
            ]);

            if (intViewportWidth < 640) {
                InsertCorrectVideo(refactorProdMap, resolution_s);
            } else if (intViewportWidth > 640 && intViewportWidth < 1200) {
                console.log("test width is: 640 < intViewportWidth < 1200");
                InsertCorrectVideo(refactorProdMap, resolution_lg);
            } else {
                console.log("test width > 1200");
                InsertCorrectVideo(refactorProdMap, resolution_wide);
            }
        })

    inView('#js-dynamic-text-3')
        .once('enter', el => {
            var typed3 = new Typed(el, tOptions3);
            const refactorProdMap = new Map([
                ['2_0', ['st02', '1']],
                ['3_0', ['wmd06_bh06', '1']],
            ]);

            if (intViewportWidth < 640) {
                InsertCorrectVideo(refactorProdMap, resolution_s);
            } else if (intViewportWidth > 640 && intViewportWidth < 1200) {
                console.log("test width is: 640 < intViewportWidth < 1200");
                InsertCorrectVideo(refactorProdMap, resolution_lg);
            } else {
                console.log("test width > 1200");
                InsertCorrectVideo(refactorProdMap, resolution_wide);
            }
        })

    inView('#js-dynamic-text-4')
        .once('enter', el => {
            var typed4 = new Typed(el, tOptions4);
        })

    inView('#js-dynamic-text-5')
        .once('enter', el => {
            var typed5 = new Typed(el, tOptions5);
        })

    inView('#js-dynamic-text-6')
        .once('enter', el => {
            var typed6 = new Typed(el, tOptions6);
        })

    inView('#js-dynamic-text-7')
        .once('enter', el => {
            var typed7 = new Typed(el, tOptions7);
        })

    // Скоростной проход ST‑01
    inView('#js-dynamic-prod1')
        .once('enter', el => {
            var typed8 = new Typed(el, tOptions8);
        })

    inView('.slider-gallery')
        .once('enter', el => {
            swiper4.autoplay.start();
        })
    const ShowScroll = btnScrollTop => {
        var offsetToTrigger = document.getElementById("advantages").offsetTop + 250;
        window.addEventListener('scroll', () => {
            const shouldBeVisible = window.pageYOffset + intViewportHeight > offsetToTrigger;
            btnScrollTop.classList.toggle('visible', shouldBeVisible);
        })
    }
    ShowScroll(document.getElementById('scroll-top'));

    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }
    if (window.pageYOffset > 0) {
        var hash = $(this).attr("href");
        window.scrollTo({
            top: 0,
        });

        window.location.hash = '#';
        window.location.href.replace('#', '');

        $("html, body").animate({
            scrollTop: 0
        }, 0, function() {
            window.location.hash = "";
        });
    }
    if (intViewportHeight < 851) {
        console.log("test height < 851");
        window.dispatchEvent(new Event('resize'));
    } else {
        console.log("test height > 851");
    }

    // ST‑01 
    var names0 = [];
    var ended0 = [];
    $(".js-sliderdemo-0 .swiper-slide").each(function(i) {
        names0.push($(this).data("name"));
        ended0.push($(this).data("ended"));
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
                        text += "<span data-played='" + ended0[j] + "' class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names0[j] + "</div></span>";
                    } else {
                        text += "<span data-played='" + ended0[j] + "' class='swiper-pagination-bullet'><div class='centered-bullet'>" + names0[j] + "</div></span>";
                    }
                }
                return text;
            },
        },
    });

    var sliderVideos0 = $(".js-sliderdemo-0 .swiper-slide video");
    sliderVideos0.each(function(index) {
        this.addEventListener('ended', () => {
            // if slider-cube .swiper-wrapper .swiper-slide-active have video0 { 
            if (swiper3prod0.activeIndex == swiper3prod0.slides.length - 1) {
                swiper3prod0.slideTo(0)
            } else {
                swiper3prod0.slideNext();
            }
            // }
        });
        this.addEventListener('playing', () => {
            ended0[swiper3prod0.activeIndex] = 1;
            swiper3prod0.pagination.update();
        });
    });

    swiper3prod0.on('slideChange', function() {
        let currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0];
        let prevVideo = swiper3prod0.slides[swiper3prod0.previousIndex].children[0];
        sliderVideos0.each(function(index) {
            if (!this.paused) {
                this.pause();
                console.log("pause из swiper3prod0-slideChange");
                this.currentTime = 0;
            }
        });
        currentVideo.play();
        console.log(currentVideo);
        console.log("play из swiper3prod0-slideChange");
        prevVideo.pause();
        console.log(prevVideo);
        console.log("pause из swiper3prod0-slideChange");
        prevVideo.currentTime = 0;
        if (intViewportWidth < 640) {
            var activeBullet = this.el.nextElementSibling.querySelector('.swiper-pagination-bullet-active')
            var bulletsWrap = this.el.nextElementSibling;
            var posX = activeBullet.offsetLeft - (intViewportWidth / 2);
            bulletsWrap.scrollLeft = posX;
        }
    });

    // ST‑11  
    var names1 = [];
    var ended1 = [];
    $(".js-sliderdemo-1 .swiper-slide").each(function(i) {
        names1.push($(this).data("name"));
        ended1.push($(this).data("ended"));
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
                        text += "<span data-played='" + ended1[j] + "' class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names1[j] + "</div></span>";
                    } else {
                        text += "<span data-played='" + ended1[j] + "' class='swiper-pagination-bullet'><div class='centered-bullet'>" + names1[j] + "</div></span>";
                    }
                }
                return text;
            },
        },
    });

    var sliderVideos1 = $(".js-sliderdemo-1 .swiper-slide video");
    sliderVideos1.each(function(index) {
        this.addEventListener('ended', () => {
            if (swiper3prod1.activeIndex == swiper3prod1.slides.length - 1) {
                swiper3prod1.slideTo(0)
            } else {
                swiper3prod1.slideNext();
            }
        });
        this.addEventListener('playing', () => {
            ended1[swiper3prod1.activeIndex] = 1;
            swiper3prod1.pagination.update();
        });
    });

    swiper3prod1.on('slideChange', function() {
        let currentVideo = swiper3prod1.slides[swiper3prod1.activeIndex].children[0];
        let prevVideo = swiper3prod1.slides[swiper3prod1.previousIndex].children[0];
        sliderVideos1.each(function(index) {
            if (!this.paused) {
                this.pause();
                console.log("pause из swiper3prod0-slideChange");
                this.currentTime = 0;
            }
        });
        currentVideo.play();
        console.log(currentVideo);
        console.log("play из swiper3prod1-slideChange");
        prevVideo.pause();
        console.log(prevVideo);
        console.log("pause из swiper3prod1-slideChange");
        prevVideo.currentTime = 0;

        if (intViewportWidth < 640) {
            var activeBullet = this.el.nextElementSibling.querySelector('.swiper-pagination-bullet-active')
            var bulletsWrap = this.el.nextElementSibling;
            var posX = activeBullet.offsetLeft - (intViewportWidth / 2);
            bulletsWrap.scrollLeft = posX;
        }
    });

    // ST‑02 
    var names2 = [];
    var ended2 = [];
    $(".js-sliderdemo-2 .swiper-slide").each(function(i) {
        names2.push($(this).data("name"));
        ended2.push($(this).data("ended"));
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
                        text += "<span data-played='" + ended2[j] + "' class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names2[j] + "</div></span>";
                    } else {
                        text += "<span data-played='" + ended2[j] + "' class='swiper-pagination-bullet'><div class='centered-bullet'>" + names2[j] + "</div></span>";
                    }
                }
                return text;
            },

        },
    });

    var sliderVideos2 = $(".js-sliderdemo-2 .swiper-slide video");
    sliderVideos2.each(function(index) {
        this.addEventListener('ended', () => {
            if (swiper3prod2.activeIndex == swiper3prod2.slides.length - 1) {
                swiper3prod2.slideTo(0)
            } else {
                swiper3prod2.slideNext();
            }

        });
        this.addEventListener('playing', () => {
            ended2[swiper3prod2.activeIndex] = 1;
            swiper3prod2.pagination.update();
        });
    });

    swiper3prod2.on('slideChange', function() {
        let currentVideo = swiper3prod2.slides[swiper3prod2.activeIndex].children[0];
        let prevVideo = swiper3prod2.slides[swiper3prod2.previousIndex].children[0];
        sliderVideos2.each(function(index) {
            if (!this.paused) {
                this.pause();
                console.log("pause из swiper3prod0-slideChange");
                this.currentTime = 0;
            }
        });
        currentVideo.play();
        console.log(currentVideo);
        console.log("play из swiper3prod2-slideChange");
        console.log(prevVideo);
        prevVideo.pause();
        console.log("pause из swiper3prod2-slideChange");
        prevVideo.currentTime = 0;

        if (intViewportWidth < 640) {
            var activeBullet = this.el.nextElementSibling.querySelector('.swiper-pagination-bullet-active')
            var bulletsWrap = this.el.nextElementSibling;
            var posX = activeBullet.offsetLeft - (intViewportWidth / 2);
            bulletsWrap.scrollLeft = posX;
        }
    });

    // Калитка
    var names3 = [];
    var ended3 = [];
    $(".js-sliderdemo-3 .swiper-slide").each(function(i) {
        names3.push($(this).data("name"));
        ended3.push($(this).data("ended"));
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
                        text += "<span data-played='" + ended3[j] + "' class='swiper-pagination-bullet swiper-pagination-bullet-active'><div class='centered-bullet'>" + names3[j] + "</div></span>";
                    } else {
                        text += "<span data-played='" + ended3[j] + "' class='swiper-pagination-bullet'><div class='centered-bullet'>" + names3[j] + "</div></span>";
                    }
                }
                return text;
            },

        },
    });

    var sliderVideos3 = $(".js-sliderdemo-3 .swiper-slide video");
    sliderVideos3.each(function(index) {
        this.addEventListener('ended', () => {
            if (swiper3prod3.activeIndex == swiper3prod3.slides.length - 1) {
                swiper3prod3.slideTo(0)
            } else {
                swiper3prod3.slideNext();
            }
        });
        this.addEventListener('playing', () => {
            ended3[swiper3prod3.activeIndex] = 1;
            swiper3prod3.pagination.update();
        });
    });

    swiper3prod3.on('slideChange', function() {
        let currentVideo = swiper3prod3.slides[swiper3prod3.activeIndex].children[0];
        let prevVideo = swiper3prod3.slides[swiper3prod3.previousIndex].children[0];
        sliderVideos3.each(function(index) {
            if (!this.paused) {
                this.pause();
                console.log("pause из swiper3prod0-slideChange");
                this.currentTime = 0;
            }
        });
        currentVideo.play();
        console.log(currentVideo);
        console.log("play из swiper3prod3-slideChange");
        console.log(prevVideo);
        prevVideo.pause();
        console.log("pause из swiper3prod3-slideChange");
        prevVideo.currentTime = 0;

        if (intViewportWidth < 640) {
            var activeBullet = this.el.nextElementSibling.querySelector('.swiper-pagination-bullet-active')
            var bulletsWrap = this.el.nextElementSibling;
            var posX = activeBullet.offsetLeft - (intViewportWidth / 2);
            bulletsWrap.scrollLeft = posX;
        }
    });

    var swiperCubeOptions = {
        loop: false,
        effect: "cube",
        slidesPerView: 1,
        allowSlidePrev: false,
        allowTouchMove: false,
        speed: 1500,
        cubeEffect: {
            shadow: false,
            slideShadows: false,
        },
        mousewheel: {
            eventsTarget: ".slider-cube",
            releaseOnEdges: false,
        },
        navigation: {
            nextEl: '.slider-cube .swiper-button-next',
            prevEl: '.slider-cube .swiper-button-prev',
        },
        on: {
            slideChangeTransitionEnd: function() {
                if (this.isEnd) {
                    swiperCube.params.mousewheel.releaseOnEdges = true;
                } else {
                    swiperCube.params.mousewheel.releaseOnEdges = false;
                }

                let sliderVideosRefactor1 = $(".js-sliderdemo-" + this.previousIndex + " .swiper-slide video");
                let sliderVideosRefactor2 = $(".js-sliderdemo-" + this.activeIndex + " .swiper-slide video");

                sliderVideosRefactor1.each(function() {
                    this.pause();
                    console.log("pause из swiperCubeOptions-slideChangeTransitionEnd");
                    $(this).trigger("pause");
                    this.currentTime = 0;
                });
                sliderVideosRefactor2.each(function() {
                    this.pause();
                    console.log("pause из swiperCubeOptions-slideChangeTransitionEnd");
                    $(this).trigger("pause");
                    this.currentTime = 0;
                });

                if (this.activeIndex == 0) {
                    swiper3prod0.slideTo(0);
                    var targetVid = document.getElementById("prod-section-0").getElementsByTagName("video")[swiper3prod0.activeIndex];
                } else if (this.activeIndex == 1) {
                    swiper3prod1.slideTo(0);
                    var targetVid = document.getElementById("prod-section-1").getElementsByTagName("video")[swiper3prod1.activeIndex];
                } else if (this.activeIndex == 2) {
                    swiper3prod2.slideTo(0);
                    var targetVid = document.getElementById("prod-section-2").getElementsByTagName("video")[swiper3prod2.activeIndex];
                } else if (this.activeIndex == 3) {
                    swiper3prod3.slideTo(0);
                    var targetVid = document.getElementById("prod-section-3").getElementsByTagName("video")[swiper3prod3.activeIndex];
                }

                targetVid.play();
                console.log("play из swiperCubeOptions-slideChangeTransitionEnd");


                // проходимся по всем слайдам и добавляем класс для удаления постера именно в конце анимаци
                $(".slider-cube > .swiper-wrapper > .swiper-slide").each(function(i, thisSlide) {
                    console.log(thisSlide);
                });

                // sliderCubeSlides.forEach(element => {
                //     element.removeClass("remove-poster");
                // });
                $(".slider-cube > .swiper-wrapper > .swiper-slide.swiper-slide-active").addClass("remove-poster");
                console.log($(".slider-cube .swiper-wrapper > .swiper-slide.swiper-slide-active"));

                // Для фикса глюка с появляющейся стрелкой
                let sliderCubeNav = $(".slider-cube-nav");
                sliderCubeNav.removeClass("sliderCube-index-" + this.previousIndex);
                sliderCubeNav.addClass("sliderCube-index-" + this.activeIndex);
                console.log((this.activeIndex == 3));
                if (!(this.activeIndex == 3)) {
                    if (sliderCubeNav.hasClass("sliderCube-index-3")) {
                        sliderCubeNav.removeClass("sliderCube-index-3");
                    }
                }
            }
        }
    };
    if (helpers.isIOS()) {
        // Попробовать менее глючный скролл для iOs:
        // document.querySelectorAll('.logo, .main-btn, .dop-btn_mail, .menu-btn').forEach(btn => {
        //     btn.addEventListener('click', () => {
        //         scroll({
        //             left: 0,
        //             top: window.scrollY + document.querySelector(btn.dataset.target).getBoundingClientRect().top + Number(btn.dataset.offset),
        //             behavior: 'smooth'
        //         });
        //     });
        // }); 
        // console.log("swiper is device ios");
        // быстрый костыль для iOs 
        var swiperCubeOptions = {
            loop: false,
            slidesPerView: 1,
            navigation: {
                nextEl: '.slider-cube .swiper-button-next',
                prevEl: '.slider-cube .swiper-button-prev',
            },
            on: {
                slideChangeTransitionEnd: function() {
                    let sliderVideosRefactor1 = $(".js-sliderdemo-" + this.previousIndex + " .swiper-slide video");
                    let sliderVideosRefactor2 = $(".js-sliderdemo-" + this.activeIndex + " .swiper-slide video");
                    // console.log(this.allowSlidePrev);
                    sliderVideosRefactor1.each(function() {
                        this.pause();
                        console.log("pause из swiperCubeOptions-slideChangeTransitionEnd iOs");
                        // $(this).trigger('pause');
                        this.currentTime = 0;
                        // console.log("Stop video: ");
                        // console.log(this.pause());
                    });
                    sliderVideosRefactor2.each(function() {
                        this.pause();
                        console.log("pause из swiperCubeOptions-slideChangeTransitionEnd iOs");
                        // $(this).trigger('pause');
                        this.currentTime = 0;
                        // console.log("Stop video: ");
                        // console.log(this.pause());
                    });

                    if (this.activeIndex == 0) {
                        swiper3prod0.slideTo(0);
                        var targetVid = document.getElementById("prod-section-0").getElementsByTagName("video")[swiper3prod0.activeIndex];
                    } else if (this.activeIndex == 1) {
                        swiper3prod1.slideTo(0);
                        var targetVid = document.getElementById("prod-section-1").getElementsByTagName("video")[swiper3prod1.activeIndex];
                    } else if (this.activeIndex == 2) {
                        swiper3prod2.slideTo(0);
                        var targetVid = document.getElementById("prod-section-2").getElementsByTagName("video")[swiper3prod2.activeIndex];
                    } else if (this.activeIndex == 3) {
                        swiper3prod3.slideTo(0);
                        var targetVid = document.getElementById("prod-section-3").getElementsByTagName("video")[swiper3prod3.activeIndex];

                        document.querySelector(".slider-cube-nav")
                        this.navigation.$nextEl[0].classList.add("swiper-button-disabled");
                    }

                    targetVid.play();
                    console.log("play из swiperCubeOptions-slideChangeTransitionEnd iOs");

                    // костыль
                    let sliderCubeNav = $(".slider-cube-nav");
                    sliderCubeNav.removeClass("sliderCube-index-" + this.slides[this.previousIndex].dataset.swiperSlideIndex);
                    sliderCubeNav.addClass("sliderCube-index-" + this.slides[this.activeIndex].dataset.swiperSlideIndex);
                }
            }
        };
    }

    var swiperCube = new Swiper(".slider-cube", swiperCubeOptions);
    swiperCube.mousewheel.disable();

    var prohodDone = false;
    var firstEnterDone = false;
    var easeTime = .5;

    var controlScene = function(event) {

        if (!prohodDone) {
            if (!firstEnterDone && event.deltaY > 0) {
                setTimeout(() => swiperCube.mousewheel.enable(), 1500);
                firstEnterDone = true;

                // gsap.set('.slider-cube-nav', { yPercent: -50 })
                // gsap.timeline({
                //         scrollTrigger: {
                //             trigger: "#products-cube",
                //             pin: true,
                //             start: "top top",
                //         }
                //     })
                //     .to('#products-cube', { autoAlpha: 1, y: 0, duration: 1, stagger: 1 })

                gsap.to(window, {
                    delay: 0,
                    duration: easeTime,
                    scrollTo: "#products-cube",
                    ease: "power1",
                    onComplete: function() {
                        // console.log('products-cube section done');
                        swiperCube.mousewheel.enable();
                    }
                });
            } else if ((swiperCube.activeIndex == 3 && swiperCube.params.mousewheel.releaseOnEdges && event.deltaY > 0) || (event.deltaY < 0)) { // let move down only on last slide or if wheel "up"
                prohodDone = true;
                swiperCube.mousewheel.disable();
            }
        } else {
            // gsap.timeline({
            //     scrollTrigger: {
            //         trigger: "#products-cube",
            //         pin: false,
            //         start: "top top",
            //     }
            // });
            if (swiperCube.mousewheel.enabled) {
                swiperCube.mousewheel.disable();
            }
        }
    };
    inView.threshold(.5);
    var alreadyEnterOnce = false;
    inView('#products-cube')
        .on('enter', el => {
            if (alreadyEnterOnce) {
                if (swiperCube.activeIndex == 0) {
                    var currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0];
                } else if (swiperCube.activeIndex == 1) {
                    var currentVideo = swiper3prod1.slides[swiper3prod1.activeIndex].children[0];
                } else if (swiperCube.activeIndex == 2) {
                    var currentVideo = swiper3prod2.slides[swiper3prod2.activeIndex].children[0];
                } else if (swiperCube.activeIndex == 3) {
                    var currentVideo = swiper3prod3.slides[swiper3prod3.activeIndex].children[0];
                } else {}
                currentVideo.play();
                console.log("play из inView-#products-cube");
            }
            document.addEventListener('wheel', controlScene);

            const triggerSlidePrevEnable = function(event) {
                if (!swiperCube.allowSlidePrev) {
                    swiperCube.allowSlidePrev = true;
                }
            };
            el.addEventListener('touchstart', triggerSlidePrevEnable, false);
            el.addEventListener('touchmove', triggerSlidePrevEnable, false);
        })
        .on('exit', el => {
            alreadyEnterOnce = true;
            document.removeEventListener('wheel', controlScene);
            if (swiperCube.activeIndex == 0) {
                var currentVideo = swiper3prod0.slides[swiper3prod0.activeIndex].children[0];
            } else if (swiperCube.activeIndex == 1) {
                var currentVideo = swiper3prod1.slides[swiper3prod1.activeIndex].children[0];
            } else if (swiperCube.activeIndex == 2) {
                var currentVideo = swiper3prod2.slides[swiper3prod2.activeIndex].children[0];
            } else if (swiperCube.activeIndex == 3) {
                var currentVideo = swiper3prod3.slides[swiper3prod3.activeIndex].children[0];
            } else {}
            currentVideo.pause();
            console.log("pause из inView.on('exit'-#products-cube");
        })

    if (intViewportWidth < 640) {
        console.log("test width < 640");

        var cubeContainer = document.querySelector("#products-cube");
        var itemsToDisableSwiperTouch = cubeContainer.querySelectorAll("#products-cube .swiper-pagination-custom");

        itemsToDisableSwiperTouch.forEach(function(item) {
            const disableTouchEvent = function(event) {
                if (swiperCube.allowTouchMove) {
                    swiperCube.allowTouchMove = false;
                }
            };
            const enableTouchEvent = function(event) {
                if (!swiperCube.allowTouchMove) {
                    swiperCube.allowTouchMove = true;
                }
            };
            item.addEventListener('touchstart', disableTouchEvent, false);
            item.addEventListener('touchmove', disableTouchEvent, false);
            item.addEventListener('touchend', enableTouchEvent, false);
            item.addEventListener('touchcancel', enableTouchEvent, false);
        });

        var vidsForMobile = document.getElementsByTagName("video");
        for (var i = 0; i < vidsForMobile.length; i++) {
            vidsForMobile[i].removeAttribute("autoplay");
        }
    }

    $("[data-prod-slide]").on("click", function(e) {
        e.preventDefault;
        gsap.to(window, { delay: 0, duration: easeTime, scrollTo: "#products" });
        swiper2.slideTo($(this).data("prod-slide"));
        if (!helpers.isMobile()) {
            document.querySelector(".nav-sublist").style.top = "-9999px";
            setTimeout(() => document.querySelector(".nav-sublist").removeAttribute("style"), 1500);
        }
    });

    $("[data-prod-section]").on("click", function(e) {
        e.preventDefault;
        gsap.to(window, { delay: 0, duration: easeTime, scrollTo: "#products-cube" });
        swiperCube.allowSlidePrev = true;
        swiperCube.slideTo($(this).data("prod-section"));
        if (!firstEnterDone) {
            swiperCube.mousewheel.enable();
        } else {
            firstEnterDone = true;
        }
    });

    $("#products-cube .swiper-button-prev").on("click", function(e) {
        if (!swiperCube.allowSlidePrev) {
            swiperCube.allowSlidePrev = true;
            swiperCube.slidePrev();
        }
    });

    var sectionHero = document.querySelector(".slider-hero");
    var sectionGallery = document.querySelector(".three");
    var sectionDopProd = document.querySelector(".slider-dop");
    sectionHero.addEventListener('click', function(event) {
        console.log(swiper1.slideNext());
    });
    sectionGallery.addEventListener('click', function(event) {
        console.log(swiper4.slideNext());
    });
    sectionDopProd.addEventListener('click', function(event) {
        console.log(swiperDop.slideNext());
    });


    // якорь по центру фотогалереи
    anchorPhotoGallery();
    // центрируем стрелки куба

};

window.addEventListener(`resize`, event => {
    var intViewportHeight = window.innerHeight;
    var elsToResize = document.querySelectorAll(".js-video-main-wrap");
    var sliderArrows = document.querySelector(".slider-cube-relative");

    if (intViewportHeight < 851) {
        elsToResize.forEach(function(node) {
            node.classList.add('push-3', 'cell-6', 'post-3');
            node.classList.remove('push-2', 'cell-8', 'post-2');
        });
        sliderArrows.classList.add('push-2', 'cell-8', 'post-2');
        sliderArrows.classList.remove('push-1', 'cell-10', 'post-1');
    } else {
        elsToResize.forEach(function(node) {
            node.classList.add('push-2', 'cell-8', 'post-2');
            node.classList.remove('push-3', 'cell-6', 'post-3');
        });
        sliderArrows.classList.add('push-1', 'cell-10', 'post-1');
        sliderArrows.classList.remove('push-2', 'cell-8', 'post-2');
    }

    if (intViewportWidth < 640) {

        InsertCorrectVideo(refactorProdMap, resolution_s);

        // удаляем автовоспроизведение - добавить кнопку плей для мобильных видео
        var vidsForMobile = document.getElementsByTagName("video");
        for (var i = 0; i < vidsForMobile.length; i++) {
            vidsForMobile[i].removeAttribute("autoplay");
        }
    } else if (intViewportWidth > 640 && intViewportWidth < 1200) {
        InsertCorrectVideo(refactorProdMap, resolution_lg);
    } else {
        InsertCorrectVideo(refactorProdMap, resolution_wide);
    }


    // якорь по центру фотогалереи
    anchorPhotoGallery();


}, false);

var swiper1 = new Swiper(".slider-hero", {
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
    },
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
            let dynamicSubtext = document.getElementById("js-dynamic-subtext-1");
            dynamicSubtext.innerHTML = swiper.slides[swiper.activeIndex].dataset.subtext;
        }
    },
});

var swiper2 = new Swiper(".slider-prod", {
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
    },
    loop: true,
    pagination: {
        el: ".slider-prod .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: '.slider-prod .swiper-button-next',
        prevEl: '.slider-prod .swiper-button-prev',
    },
});

swiper2.on('slideChangeTransitionEnd', function() {
    let dynamicText = document.getElementById("js-dynamic-text-3");
    let dynamicTextDouble = document.getElementById("js-dynamic-text-3-double");
    let dynamicTextReserve = document.getElementById("js-dynamic-reserve");
    let dynamicSubtext = document.getElementById("js-dynamic-subtext-3");
    let sliderCharsRefactor = $(".characteristics");

    // клёвый костыль что бы не накладывался inview + typed на подставленный текст при прокрутке из подменю товаров
    dynamicText.classList.add("hide");
    dynamicTextDouble.classList.remove("hide");
    dynamicTextDouble.innerHTML = this.slides[this.activeIndex].dataset.text;
    dynamicSubtext.innerHTML = this.slides[this.activeIndex].dataset.subtext;
    dynamicTextReserve.innerHTML = this.slides[this.activeIndex].dataset.text;

    sliderCharsRefactor.removeClass("prodIcons-index-" + this.slides[this.previousIndex].dataset.swiperSlideIndex);
    sliderCharsRefactor.addClass("prodIcons-index-" + this.slides[this.activeIndex].dataset.swiperSlideIndex);
});

var namesDop = [];
$(".js-sliderdemo-dop .swiper-slide").each(function(i) {
    namesDop.push($(this).data("name"));
});

var swiperDop = new Swiper(".slider-dop", {
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
    },
    effect: "fade",
    loop: true,
    slidesPerView: 1,
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
                    text += "<span class='cell-6 cell-4-lg cell-2-xs swiper-pagination-btn swiper-pagination-bullet swiper-pagination-btn-active'><div class='centered-btn'>" + namesDop[j] + "</div></span>";
                } else {
                    text += "<span class='cell-6 cell-4-lg cell-2-xs swiper-pagination-btn swiper-pagination-bullet'><div class='centered-btn'>" + namesDop[j] + "</div></span>";
                }
            }
            return text;
        },
    },
});

var swiper4 = new Swiper(".slider-gallery", {
    preloadImages: false,
    lazy: {
        loadPrevNext: true,
    },
    effect: "fade",
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.slider-gallery .swiper-button-next',
        prevEl: '.slider-gallery .swiper-button-prev',
    },
    on: {
        init: function() {
            this.autoplay.stop();
        }
    }
});
swiper4.autoplay.stop();


// $(".btn-change").on("click", function(e) {
//     $(".btn-change").toggleClass("active");
//     $("#main").toggleClass("ver2");
// });

// $(".btn-change").on("click", function(e) {
//     $(".btn-change").toggleClass("active");
//     $("#main").toggleClass("ver2");
// });


// mixin list(id, ...items)
//   ul(id=id)
//     each item in items
//       li= item