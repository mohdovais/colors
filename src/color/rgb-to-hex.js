import { typeOf } from './../utils.js';

function toHex(number) {
    return number === undefined ? '' : number.toString(16);
}

function twoDigits(digit) {
    return (digit.length === 1 ? '0' : '') + digit;
}

function alpha(alpha) {
    return alpha === undefined || alpha === 1
        ? ''
        : twoDigits(toHex(Math.round(alpha * 255)));
}

export function rgb2hex(r, g, b, a) {
    const rgba = typeOf(r) === 'array' ? r : [r, g, b, a];
    return (
        '#' +
        twoDigits(toHex(rgba[0])) +
        twoDigits(toHex(rgba[1])) +
        twoDigits(toHex(rgba[2])) +
        alpha(rgba[3])
    );
}
