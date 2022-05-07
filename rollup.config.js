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
export default libDirs.filter(libdir => libdir != 'css').map(libdir => {
    const libname = libdir + 'lib';
    return {
        input: path.join('packages', libdir, 'main.ts'),
        plugins: [
            postcss(),
            babel({
                babelHelpers: 'runtime',
                exclude: ['node_modules/**'],
                extensions: extensions
            }),
            nodeResolve({ extensions: extensions }),
            commonjs(),
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
        treeshake: "smallest"
    }
})