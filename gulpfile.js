const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('hello', async () => {
    console.log('Hello world!');
});

gulp.task('sass', async () => {
    return gulp.src('source-files')
    .pipe(sass())
    .pipe
})