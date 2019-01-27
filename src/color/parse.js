const REGEX_HEX = /^#([a-f0-9]{3,6})/i;
const REGEX_RGBA = /rgb(a)?\(\s?(\d+)\s?,\s?(\d+)\s?,\s?(\d+)\s?(\,\s?(\d+(\.\d+)?)\s?)?\)/i;
const REGEX_RGBA_PERCENT = /rgb(a)?\(\s?(\d+\%)\s?,\s?(\d+\%)\s?,\s?(\d+\%)\s?(\,\s?(\d+%)\s?)?\)/i;
const REGEX_PERCENT = /\d+\%$/;

export function parseColor(string) {
    const str = string.trim();
    return parseHex(str) || parseRGBA(str) || null;
}

function parseHex(string) {
    const exec = REGEX_HEX.exec(string);
    const color = exec === null ? null : exec[1];
    const length = color === null ? 0 : color.length / 3;

    return color === null
        ? null
        : [0, 1, 2].map(i => {
              const chunk = color.substr(i * length, length);
              return parseInt(length === 1 ? chunk + chunk : chunk, 16);
          });
}

// ==== RGBA === //

function parseRGBA(string) {
    return doParseRGBA(
        REGEX_RGBA.exec(string) || REGEX_RGBA_PERCENT.exec(string)
    );
}

function computePercent(item) {
    return Number(item) / (REGEX_PERCENT.test(item) ? 100 : 1);
}

function limit(item, min, max) {
    return Math.min(max, Math.max(min, item));
}

function computeColor(color) {
    return limit(Math.round(computePercent(color)), 0, 255);
}

function computeAlpha(hasAlpha, alpha) {
    return hasAlpha ? (alpha === undefined ? 1 : computePercent(alpha)) : 1;
}

function doParseRGBA(array) {
    return Array.isArray(array)
        ? [
              computeColor(array[2]),
              computeColor(array[3]),
              computeColor(array[4]),
              computeAlpha(array[1] === 'a', array[6]),
          ]
        : null;
}
