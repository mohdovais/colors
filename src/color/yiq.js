import { hex2rgb } from './hex-to-rgb.js';

export function toYIQ(hexcolor) {
    const color = hex2rgb(hexcolor);
    return color[0] * 0.299 + color[1] * 0.587 + color[2] * 0.114;
}
