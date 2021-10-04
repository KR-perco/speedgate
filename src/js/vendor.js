import "core-js/stable";
import "regenerator-runtime/runtime";
import svg4everybody from "svg4everybody";
import $ from "jquery";
import objectFitImages from "object-fit-images";
import MmenuLight from "mmenu-light";
import AOS from "aos";
// import videojs from "@videojs";
// let video = videojs('my-video', {
//     autoplay: true,
//   });


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