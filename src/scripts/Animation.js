import { gsap } from "gsap";

export default class Animation {
    constructor() {
        this.initEls();
        this.loopAnimation();
    }

    initEls() {
        this.cube = document.querySelector('.js-cube');
        this.line = document.querySelector('.js-line');
    }

    loopAnimation() {

    }
}
