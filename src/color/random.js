import { rgb2hex } from './rgb-to-hex';

export function randomRGB(min, max) {
    return [0, 1, 2].map(() => Math.round(min + Math.random() * (max - min)));
}

export function randomHex(min, max) {
    return rgb2hex.apply(null, randomRGB(min | 0, max | 0 || 255));
}
