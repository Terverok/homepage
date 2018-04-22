import path from 'path'

import vueTransform from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import transformCommonJs from 'rollup-plugin-commonjs'
import alias from 'rollup-plugin-alias'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import scss from 'rollup-plugin-scss'
import image from 'rollup-plugin-img'

const inputFile = './src/app.js'
const outputFolder = './public'

export default {
    input: inputFile,
    output: {
        file: `${outputFolder}/appBundle.js`,
        format: 'iife',
    },
    watch: {
        // clearScreen: false,
        exclude: 'node_modules/**',
    },
    plugins: [
        image({
            output: `${outputFolder}`,
            limit: 0,
            hash: true,
        }),
        scss({
            output: `${outputFolder}/styles.css`,
        }),
        vueTransform({
            compileTemplate: true,
        }),
        babel({
            include: './src/**',
        }),
        resolve({
            extensions: ['.js','.vue'],
            customResolveOptions: {
                moduleDirectory: 'node_modules',
            }
        }),
        transformCommonJs({
            include: 'node_modules/**',
        }),
        alias({
            'vue': 'vue/dist/vue.esm.js',
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.VUE_ENV': JSON.stringify('browser'),
        }),
    ]
}
