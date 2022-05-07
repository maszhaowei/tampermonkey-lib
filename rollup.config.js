import nodeResolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
const fs = require('fs');
const path = require('path');

const extensions = ['.ts', '.tsx', '.mjs', '.js', '.jsx'];

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const isProd = process.env.NODE_ENV === 'production';
const isTest = process.env.NODE_ENV === 'test' || process.env.BABEL_ENV === 'test';

let libDirs = fs.readdirSync('packages');
export default libDirs.filter(libdir => libdir != 'css' && libdir != 'types').map(libdir => {
    const libname = libdir + 'lib';
    /** @type {import('rollup').RollupOptions} */
    let option = {
        input: path.join('packages', libdir, 'main.ts'),
        plugins: [
            postcss(),
            nodeResolve({ extensions: extensions }),
            commonjs(),
            babel({
                babelHelpers: 'bundled',
                // plugins: [
                //     [require.resolve('@babel/plugin-transform-runtime'), {
                //         corejs: { version: 3, proposals: true },
                //         version: '^7.17.9'
                //     }]
                // ],
                exclude: ['node_modules/**'],
                extensions: extensions
            }),
            json({ compact: true }),
        ],
        output: [{
            file: `build/${libname}.js`,
            format: 'es',
            name: libname
        }, {
            file: `public/${libname}.min.js`,
            format: 'es',
            plugins: [terser()],
            name: libname
        },],
        external: [/@babel\/runtime/, 'uuid'],
        treeshake: "smallest"
    };
    return option;
})