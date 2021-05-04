const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-dart-sass');
const browserSync = require('browser-sync').create();

function css() {
    return src('./public/src/scss/styles.scss')
    .pipe(sass())
    .pipe(dest('./public/dist/css'))
}

function serve(done) {
    browserSync.init({
        server: {
            baseDir: './public/dist'
        }
    })
    done();
}

function reload(done) {
    browserSync.reload();
    done();
}

function watcher() {
    watch('./public/src/**/*.*', series(css, reload));
}

exports.css = css;
exports.serve = serve;
exports.watcher = watcher;
exports.init = series(css, serve, watcher)
