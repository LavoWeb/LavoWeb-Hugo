var gulp = require('gulp');

var imagemin = require('gulp-imagemin');
var pngcrush = require('imagemin-pngcrush');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');

var paths = {
    files: './static/**',
    filesDest: './static',
};

gulp.task('files', function() {
    'use strict';

    // Minify all images
    return gulp.src(paths.files, {base: './static'})
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngcrush()]
        }))
        .pipe(gulp.dest(paths.filesDest));
});

gulp.task('css', function(){
    gulp.src('themes/lavoweb/static/stylesheets/work/**')
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('themes/lavoweb/static/stylesheets'))
});

gulp.task('scripts', function() {
    return gulp.src('themes/lavoweb/static/javascripts/work/**')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('themes/lavoweb/static/javascripts'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('themes/lavoweb/static/javascripts'));
});

gulp.task('html', function() {
    return gulp.src('public/**.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('public'));
});

gulp.task('default', ['files', 'css', 'scripts', 'html']);