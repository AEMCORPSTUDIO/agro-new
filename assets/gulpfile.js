var gulp = require('gulp');
var connect = require('gulp-connect');
var proxy = require('http-proxy-middleware');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var path = require('path');

gulp.task('less', function () {
  return gulp.src('./styles/styles.less')
    .pipe(plumber())
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./build'))
    .pipe(livereload());
});

gulp.task('connect', function() {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(['./*.html'], ['html']);
   gulp.watch('./styles/**/*.less', ['less']);
});

gulp.task('default', ['connect', 'watch']);
