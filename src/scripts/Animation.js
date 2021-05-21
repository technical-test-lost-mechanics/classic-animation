import { gsap } from "gsap";

export default class Animation {
    constructor() {
        this.initEls();
        this.loopAnimation();
    }

    initEls() {
        this.cube = document.querySelector('.js-cube');
        this.container = document.querySelector('.js-container');
    }

    loopAnimation() {
        const tl = new gsap.timeline({
            repeat: -1
        });

        tl.to(this.cube, {
            rotate: -90,
            duration: 0.5,
            delay: 0.2,
            transformOrigin: '0% 100%',
            ease: 'power4.inOut'
        })
            .set(this.cube, {
                x: -50,
                rotate: 0
            })
            .to(this.cube, {
                rotate: -270,
                duration: 1,
                delay: 0.2,
                y: -24,
                transformOrigin: '0% 100%',
                ease: 'power4.inOut'
            })
            .to(this.container, {
                rotate: 180,
                duration: 1,
                ease: 'back.inOut'
            }, '-=1')
            .set(this.container, {
                rotate: 0
            })
            .set(this.cube, {
                x: 50,
                y: -26.5,
                rotate: 0
            })
            .to(this.cube, {
                rotate: -90,
                duration: 0.5,
                delay: 0.2,
                transformOrigin: '0% 100%',
                ease: 'power4.inOut'
            });
    }
}
