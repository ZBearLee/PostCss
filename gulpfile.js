var gulp = require('gulp')
var postcss = require('gulp-postcss')
//var autoprefixer = require('autoprefixer')
var rename = require('gulp-rename')
var cssnano = require('cssnano')
var cssnext = require('postcss-cssnext')
var precss = require('precss')

gulp.task('styles', function () {
    return gulp.src('css/*.css')
        // .pipe(postcss([autoprefixer,cssnext()]))   //autoprefixer自动加前缀
        .pipe(postcss([cssnext(),precss()]))
        .pipe(gulp.dest('dist/'))   //连通到dist目录文件下
})

gulp.task('rename', ['styles'], function () {
    return gulp.src('dist/example.css')
        .pipe(postcss([cssnano]))
        .pipe(rename('example.min.css'))
        .pipe(gulp.dest('dist/'))
})

gulp.task('default', ['styles', 'rename'])