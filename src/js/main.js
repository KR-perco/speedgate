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
import SwiperCore, { Navigation, Pagination, Autoplay, EffectFade, EffectCube, Mousewheel } from 'swiper/core';
import { Fancybox, Carousel, Panzoom } from "@fancyapps/ui";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

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
        done: (fancybox, slide) => {

            var sliderVideos = $("#prod-section-" + swiperCube.activeIndex + " video");
            sliderVideos.each(function(index) {
                this.pause();
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
            } else {
                // var currentVideo = swiper3prod1.slides[swiper3prod1.activeIndex].children[0];
            }
            currentVideo.play();
        }
    }
});

window.onload = function() {
    var intViewportHeight = window.innerHeight;
    var elsToResize = document.querySelectorAll(".js-video-main-wrap");
    var sliderArrows = document.querySelector(".slider-cube-relative");
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

        window.location.hash = '#'; //remove hash text
        window.location.href.replace('#', ''); //remove hash

        $("html, body").animate({
            scrollTop: 0
        }, 0, function() {
            window.location.hash = "";
        });
    }
    if (intViewportHeight < 714) {
        console.log("test height < 714");
        window.dispatchEvent(new Event('resize'));
    } else {
        console.log("test height > 714");
    }
};

window.addEventListener(`resize`, event => {
    var intViewportHeight = window.innerHeight;
    var elsToResize = document.querySelectorAll(".js-video-main-wrap");
    var sliderArrows = document.querySelector(".slider-cube-relative");

    if (intViewportHeight < 714) {
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
}, false);

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

var tOptions8 = {
    strings: ['Скоростной проход ST-01'],
    typeSpeed: 40,
    showCursor: false,
};

inView('#js-dynamic-text-1')
    .once('enter', el => {
        var typed1 = new Typed(el, tOptions1);
    })

inView('#js-dynamic-text-2')
    .once('enter', el => {
        var typed2 = new Typed(el, tOptions2);
    })

inView('#js-dynamic-text-3')
    .once('enter', el => {
        var typed3 = new Typed(el, tOptions3);
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

// Скоростной проход ST-01
inView('#js-dynamic-prod1')
    .once('enter', el => {
        var typed8 = new Typed(el, tOptions8);
    })

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
    // on: {
    //     init: function() {
    //         correctTyped(this.slides[this.activeIndex].dataset.text);
    //     }
    // }
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

// ST-01 
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
        if (swiper3prod0.activeIndex == swiper3prod0.slides.length - 1) {
            swiper3prod0.slideTo(0)
        } else {
            swiper3prod0.slideNext();
        }
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
        this.pause();
        this.currentTime = 0;
    });
    currentVideo.play();
    prevVideo.pause();
    prevVideo.currentTime = 0;
});

// ST-11  
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
        this.pause();
        this.currentTime = 0;
    });
    currentVideo.play();
    prevVideo.pause();
    prevVideo.currentTime = 0;
});

// ST-02 
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
        this.pause();
        this.currentTime = 0;
    });
    currentVideo.play();
    prevVideo.pause();
    prevVideo.currentTime = 0;
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
        this.pause();
        this.currentTime = 0;
    });
    currentVideo.play();
    prevVideo.pause();
    prevVideo.currentTime = 0;
});

var swiperCubeOptions = {
    loop: false,
    effect: "cube",
    slidesPerView: 1,
    allowSlidePrev: false,
    speed: 1300,
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
                this.currentTime = 0;
                console.log("Stop video: ");
                console.log(this.pause());
            });
            sliderVideosRefactor2.each(function() {
                this.pause();
                this.currentTime = 0;
                console.log("Stop video: ");
                console.log(this.pause());
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
        }
    }
};

if (helpers.isIOS()) {
    console.log("swiper is device ios");
    var swiperCubeOptions = {
        loop: false,
        slidesPerView: 1,
        allowSlidePrev: false,
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
                    this.currentTime = 0;
                    console.log("Stop video: ");
                    console.log(this.pause());
                });
                sliderVideosRefactor2.each(function() {
                    this.pause();
                    this.currentTime = 0;
                    console.log("Stop video: ");
                    console.log(this.pause());
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
            }
        }
    };
}

var swiperCube = new Swiper(".slider-cube", swiperCubeOptions);
swiperCube.mousewheel.disable();

console.log(swiperCube);

var prohodDone = false;
var firstEnterDone = false;
var easeTime = .1;

var listener = function(event) {


    if (!prohodDone) {
        if (!firstEnterDone) {
            setTimeout(() => swiperCube.mousewheel.enable(), 1500);
            gsap.to(window, {
                delay: 0,
                duration: easeTime,
                scrollTo: "#products-cube",
                ease: "power1",
                onComplete: function() {
                    console.log('products-cube section done');
                    swiperCube.mousewheel.enable();
                    firstEnterDone = true;
                }
            })
        } else if (!swiperCube.params.mousewheel.releaseOnEdges && event.deltaY > 0) {
            gsap.to(window, {
                duration: easeTime,
                scrollTo: "#products-cube",
            });
        } else if ((swiperCube.activeIndex == 3 && swiperCube.params.mousewheel.releaseOnEdges) || (event.deltaY < 0)) { // push down only on last slide 
            prohodDone = true;
            swiperCube.mousewheel.disable();
            //  костыльный фикс бага с появляющейся стрелкой
            console.log(swiperCube.navigation.$nextEl[0].classList);
            if (swiperCube.navigation.$nextEl[0].classList) {
                console.log(swiperCube.navigation.$nextEl[0].classList.add("swiper-button-disabled"));
                swiperCube.update();
            }

        }
        //  else if (event.deltaY > 0) { //"down" 
        //     event.preventDefault;
        //     gsap.to(window, {
        //         duration: easeTime,
        //         scrollTo: "#products-cube",
        //         ease: "elastic",
        //         onComplete: function() {
        //             console.log('products-cube section done');
        //         }
        //     });
        //     if (swiperCube.activeIndex == 3 && swiperCube.params.mousewheel.releaseOnEdges) { // push down only on last slide
        //         console.log("test777");
        //         swiperCube.allowSlidePrev = true;
        //         gsap.to(window, { duration: easeTime, scrollTo: "#dop-prod", ease: "elastic" });
        //         prohodDone = true;
        //         // swiperCube.mousewheel.disable();
        //     }
        // } else {
        //     console.log("test1");
        // }
    } else {
        if (swiperCube.mousewheel.enabled) {
            swiperCube.mousewheel.disable();
        }
    }
};

inView.threshold(0.5);
inView('#products-cube')
    .on('enter', el => {
        document.addEventListener('wheel', listener);
    })
    .on('exit', el => {
        document.removeEventListener('wheel', listener)
    })

var namesDop = [];
$(".js-sliderdemo-dop .swiper-slide").each(function(i) {
    namesDop.push($(this).data("name"));
});
var swiperDop = new Swiper(".slider-dop", {
    effect: "fade",
    loop: false,
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
                    text += "<span class='cell-6 cell-4-lg swiper-pagination-btn swiper-pagination-bullet swiper-pagination-btn-active'><div class='centered-btn'>" + namesDop[j] + "</div></span>";
                } else {
                    text += "<span class='cell-6 cell-4-lg swiper-pagination-btn swiper-pagination-bullet'><div class='centered-btn'>" + namesDop[j] + "</div></span>";
                }
            }
            return text;
        },
    },
});

var swiper4 = new Swiper(".slider-gallery", {
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

inView('#gallery')
    .once('enter', el => {
        swiper4.autoplay.start();
    })

$(".btn-change").on("click", function(e) {
    $(".btn-change").toggleClass("active");
    $("#main").toggleClass("ver2");
});

$(".btn-change").on("click", function(e) {
    $(".btn-change").toggleClass("active");
    $("#main").toggleClass("ver2");
});

$("[data-prod-slide]").on("click", function(e) {
    e.preventDefault;
    gsap.to(window, { duration: .5, scrollTo: "#products" });
    swiper2.slideTo($(this).data("prod-slide"));
});

$("[data-prod-section]").on("click", function(e) {
    e.preventDefault;
    gsap.to(window, { duration: .5, scrollTo: "#products-cube" });
    swiperCube.slideTo($(this).data("prod-section"));
    console.log("66666");
    if (!firstEnterDone) {
        console.log("77777");
        swiperCube.mousewheel.enable();
    } else {
        firstEnterDone = true;
        console.log("88888");
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
sectionHero.addEventListener('click', function(event) {
    console.log(swiper1.slideNext());
});
sectionGallery.addEventListener('click', function(event) {
    console.log(swiper4.slideNext());
});