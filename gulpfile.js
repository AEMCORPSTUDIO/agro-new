const gulp = require('gulp');
const connect = require('gulp-connect');
const proxy = require('http-proxy-middleware');
const plumber = require('gulp-plumber');
const livereload = require('gulp-livereload');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', () => gulp.src('./assets/styles/styles.less')
    .pipe(plumber())
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')]
    }))
    .pipe(gulp.dest('./assets/build'))
    .pipe(livereload()));

gulp.task('connect', () => {
  connect.server({
    root: './',
    livereload: true
  });
});

gulp.task('html', () => {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', () => {
  gulp.watch(['./*.html'], ['html']);
  gulp.watch('./assets/styles/**/*.less', ['less']);
});

gulp.task('default', ['connect', 'watch']);
