var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('server', function() {
  gulp.src('dist')
    .pipe($.webserver({
      livereload: true,
      host: 'localhost',
      open: true
    }));
});

gulp.task('pug', function() {
  gulp.src([
    'src/**/!(_)*.pug'
  ])
  .pipe($.pug())
  .pipe(gulp.dest('./dist/'))
});

gulp.task('stylus', function() {
  gulp.src([
    'src/main.styl'
  ])
  .pipe($.stylus())
  .pipe(gulp.dest('./dist/css/'))
});

gulp.task('js', function() {
  // gulp.src([
  //   'src/**/*.js'
  // ])
  // .pipe($.concat())
  // .pipe($.uglify())
  // .pipe(gulp.dest('./dist/js/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.styl', ['stylus']);
  gulp.watch('./src/**/*.pug', ['pug']);
});

gulp.task('build', ['pug', 'stylus', 'js']);

gulp.task('default', ['build', 'server', 'watch']);
