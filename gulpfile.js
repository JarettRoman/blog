const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-dart-sass');

function css() {
    return src('public/src/scss/styles.scss')
    .pipe(sass())
    .pipe(dest('public/dist/css'))
}

function watcher() {
    watch('public/src/scss/styles.scss', series(css));
}

exports.css = css;
exports.watcher = watcher;
