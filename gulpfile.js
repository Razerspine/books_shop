var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var cleanCss = require('gulp-clean-css');
var bs = require('browser-sync');
var newer = require('gulp-newer');
var debug = require('gulp-debug');

gulp.task('src', function () {
   return gulp.src(['!src/css/**/*','!src/PSD/**/*', '!src/**/*.php', 'src/**/*.*'])
       .pipe(newer('public'))
       .pipe(debug())
       .pipe(gulp.dest('public'))
});

gulp.task('html', function () {
   return gulp.src('src/**/*.html')
       .pipe(gulp.dest('public'))
});

gulp.task('less', function () {
    return gulp.src(['!src/css/media.less' ,'src/css/**/*.less'])
        .pipe(less())
        .pipe(concat("css/all_style.css"))
        .pipe(cleanCss())
        .pipe(gulp.dest('public'))
});

gulp.task('media', function () {
    return gulp.src('src/css/media.less')
        .pipe(less())
        .pipe(gulp.dest('public/css'))
});

gulp.task('watch', function () {
    gulp.watch('src/css/**/*.less', ['less', 'media', 'html']);
});

gulp.task('browser-sync', function () {
    bs.init({
        server: {
            baseDir: "./public"
        }
    });
});

gulp.task('default', ['html', 'media', 'less','watch']);