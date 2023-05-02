import { keyframes } from 'styled-components';

export const LeftSlide = keyframes`
    from{opacity:0; transform: translateX(-600px)}
    to{opacity:1; transform: translateX(-0px)}
    `;

export const Opacity=keyframes`
    0%{opacity:0}
    100%{opacity:1}
    `;

export const VariateFourTimes= keyframes`
    0% {
        transform: translateY(-20%);
        opacity: 0.2;
    }
    25% {
        transform: translateY(20%);
        opacity: 0.5;
    }
    50% {
        transform: translateY(-10%);
        opacity: 0.7;
    }
    75% {
        transform: translateY(10%);
        opacity: 1;
    }
    100%{
        transform: translateY(0%);
        opacity: 1;
    };`;

export const VariateSixTimes= keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0.2;
    }
    17% {
        transform: translateY(100%);
        opacity: 0.5;
    }
    34% {
        transform: translateY(-60%);
        opacity: 0.7;
    }
    51% {
        transform: translateY(60%);
        opacity: 1;
    }
    68%{
        transform: translateY(-30%);
        opacity: 1;
    }
    85%{
        transform: translateY(30%);
        opacity: 1;
    }
    100%{
        transform: translateY(0%);
        opacity: 1;
    }`;

export const Thunder= keyframes`
        from{filter: brightness(0.7);}
        to{filter: brightness(1);}
    `;

export const TopSlide= keyframes`
        from{opacity:0;transform: translateY(-600px)}
        to{opacity:1;transform: translateY(0px)}
    `;

export const HangThenDrop = keyframes`
        0% {
            transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        20%, 60% {
            transform: rotate3d(0, 0, 1, 80deg);
            transform-origin: top left;
            animation-timing-function: ease-in-out;
        }
        40%, 80% {
            transform: rotate3d(0, 0, 1, 60deg);
            transform-origin: top left;
            animation-timing-function: ease-in-out;
            opacity: 1;
        }
        to {
            transform: translate3d(0, 700px, 0);
            opacity: 0;
        }
    `;

export const tremerZoom= keyframes`
        from {
            transform: scale3d(1, 1, 1);
        }
        10%, 20% {
            transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
        }
        30%, 50%, 70%, 90% {
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
        }
        40%, 60%, 80% {
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
        }
        to {
            transform: scale3d(1, 1, 1);
        }
    `;

export const Loading= keyframes`
        100%{
        transform:translateX(100%);
    }
    `;

export const BounceOut = keyframes`
        20% {
            transform: scale3d(.9, .9, .9);
        }
        50%, 55% {
            opacity: 1;
            transform: scale3d(1.1, 1.1, 1.1);
        }
        to {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }
    `;

export const BounceIn = keyframes`
        from, 20%, 40%, 60%, 80%, to {
            animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
        }
        0% {
            opacity: 0;
            transform: scale3d(.3, .3, .3);
        }
        20% {
            transform: scale3d(1.1, 1.1, 1.1);
        }
        40% {
            transform: scale3d(.9, .9, .9);
        }
        60% {
            opacity: 1;
            transform: scale3d(1.03, 1.03, 1.03);
        }
        80% {
            transform: scale3d(.97, .97, .97);
        }
        to {
            opacity: 1;
            transform: scale3d(1, 1, 1);
        }
    `;

export const ZoomInLeftAnimation = keyframes`
    from {
        opacity: 0;
        transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
        animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
    60% {
        opacity: 1;
        transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
`;

export const ZoomOutDownAnimation = keyframes`
    40% {
        opacity: 1;
        transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
        animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
    to {
        opacity: 0;
        transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
        transform-origin: center bottom;
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
`;

export const HiddenFall= keyframes`
        from{opacity:0;transform: translateY(-600px)}
        to{opacity:0;transform: translateY(0px)}
    `;

export const ZoomInDownAnimation = keyframes`
    from {
        opacity: 0;
        transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
        animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }
    60% {
        opacity: 1;
        transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
`;

export const MoovingBackground = keyframes`
    0% {
        background-position: 0% 50%
    }
    50% {
        background-position: 100% 50%
    }
    100%{
        background-position: 0% 50%
    }
`;

export const Jello = keyframes`
    from, 11.1%, to {
        transform: none;
    }

    22.2% {
        transform: skewX(-12.5deg) skewY(-12.5deg);
    }

    33.3% {
        transform: skewX(6.25deg) skewY(6.25deg);
    }

    44.4% {
        transform: skewX(-3.125deg) skewY(-3.125deg);
    }

    55.5% {
        transform: skewX(1.5625deg) skewY(1.5625deg);
    }

    66.6% {
        transform: skewX(-0.78125deg) skewY(-0.78125deg);
    }

    77.7% {
        transform: skewX(0.390625deg) skewY(0.390625deg);
    }

    88.8% {
        transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
    }
`;

export const Pulse = keyframes`
    from {
        transform: scale3d(1, 1, 1);
    }

    50% {
        transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
        transform: scale3d(1, 1, 1);
    }
`;
