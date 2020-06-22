import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import html from '@rollup/plugin-html';

export default {
    input: ['src/index.js'] ,
    output: {
        dir: 'dist',
        format: 'esm'
    },
    plugins: [
        html(),
        resolve({browser: true}),
        commonjs(),
    ]
};
