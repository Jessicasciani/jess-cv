import Typed from 'typed.js';
import SweetScroll from 'sweet-scroll';


function loadDynamicBannerText() {
  new Typed('#banner-typed-text', {
    strings: ["FULLSTACK WEB-DEVELOPER"],
    typeSpeed: 50,
    loop: false
  });
}

export { loadDynamicBannerText };



function loadSweetScroll() {
  document.addEventListener('DOMContentLoaded', () => {
    const sweetScroll = new SweetScroll({ /* some options */ });
  }, false);
}

export { loadSweetScroll };
