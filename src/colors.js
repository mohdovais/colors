export function luminance(hexcolor) {
    var variance = [0.2126, 0.7152, 0.0722];
    return hex2rgb(hexcolor).reduce(function(accum, sRGB, i) {
        var C = sRGB / 255;
        C = C > 0.04045 ? Math.pow((C + 0.055) / 1.055, 2.4) : C / 12.92;
        return accum + C * variance[i];
    }, 0);
}

export function luminance_old(hexcolor) {
    var variance = [0.2126, 0.7152, 0.0722];
    return hex2rgb(hexcolor).reduce(function(accum, value, i) {
        var v = value / 255;
        v = v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        return accum + v * variance[i];
    }, 0);
}

//https://www.w3.org/TR/AERT/#color-contrast
export function getContrastYIQ(hexcolor) {
    return getYIQ(hexcolor) >= 125 ? 'black' : 'white';
}

export function inverseColor(hexcolor) {
    return rgb2hex(
        hex2rgb(hexcolor).map(function(color) {
            return 255 - color;
        })
    );
}

export function getContrast(color) {
    var lum = luminance(color) + 0.05;
    var ratioWhite = 1.05 / lum;
    var rationBlack = lum / 0.05;

    console.log(lum, luminance('#000'), ratioWhite, rationBlack);

    return ratioWhite > rationBlack ? 'white' : 'blck';

    //return 1.05 / (luminance(color) + 0.05) >= 7.5 ? '#fff' : '#000';
}

export function getColorDifference(hexcolor1, hexcolor2) {
    var color1 = hex2rgb(hexcolor1);
    var color2 = hex2rgb(hexcolor2);

    return color1.reduce(function(accum, col, i) {
        return accum + Math.abs(col - color2[i]);
    }, 0);
}

export function grayScale(hexcolor) {
    var color = hex2rgb(hexcolor);
    var shade = Math.round((color[0] + color[1] + color[2]) / 3).toString(16);
    return rgb2hex(shade, shade, shade);
}
