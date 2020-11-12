import resolve from '@rollup/plugin-node-resolve';
import filesize from 'rollup-plugin-filesize';
import copy from 'rollup-plugin-copy';

const name = `${((new Date()).getTime())}.bundled.js`;

const filesizeConfig = {
    showGzippedSize: true,
    showBrotliSize: false,
    showMinifiedSize: true,
};

const copyConfig = {
    targets: [
        { 
            src: 'index.html',
            dest:'dist', 
            transform: (content) => 
                        content.toString().replace('./src/GayolApp.js', `./${name}`) 
        }
    ]
};

const config = {
    input: './src/GayolApp.js',
    output: {
        file: `dist/${name}`
    },
    plugins: [ resolve(), copy(copyConfig), filesize(filesizeConfig) ]
};

export default config;