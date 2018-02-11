import vueTransform from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import transformCommonJs from 'rollup-plugin-commonjs'
import alias from 'rollup-plugin-alias'
import replace from 'rollup-plugin-replace'
import babel from 'rollup-plugin-babel'
import scss from 'rollup-plugin-scss'

export default {
    input: 'src/app.js',
    output: {
        file: 'public/appBundle.js',
        format: 'iife',
    },
    watch: {
        clearScreen: false,
        exclude: 'node_modules/**',
    },
    plugins: [
        scss({
            output: 'public/styles.css',
        }),
        vueTransform({
            compileTemplate: true,
        }),
        babel({
            exclude: 'node_modules/**',
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
