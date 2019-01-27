import resolve from 'rollup-plugin-node-resolve';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;
const environment = production ? 'production' : 'development';

export default {
    input: 'src/main.js',
    output: {
        file: 'dist/bundle.js',
        format: 'iife',
        sourcemap: true,
    },
    plugins: [
        resolve({
            browser: true,
            extensions: ['.mjs', '.js', '.jsx', '.json'],
        }),
        buble({
            jsx: 'h',
        }),
        commonjs(),
        production && terser(),
    ],
};
