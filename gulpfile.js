'use strict';
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var run = require('run-sequence');
var del = require('del');
var path = require('path');

// for gulp-autoprefixer
global.Promise = require('bluebird');

var appDir = path.resolve(process.cwd(), 'client');

var dirs = {
  src: appDir + '/src',
  static: appDir + '/static',
  dest: path.resolve(process.cwd(), 'server/public'),
};

// copy the static files to the build directory
var staticfiles = dirs.static + '/**/*';
gulp.task('copy:static', function() {
  return gulp.src(staticfiles)
    .pipe(gulp.dest(dirs.dest));
});

// run all the copy tasks that copy to the build directory
gulp.task('copy', ['copy:static']);

gulp.task('clean', function() {
  return del([
    dirs.dest + '/**/*'
  ], { force: true });
});

gulp.task('build', function(cb) {
  run('clean', ['copy'], cb);
});

gulp.task('watch', function() {
  run('clean', ['copy']);
  gulp.watch(staticfiles, ['copy:static']);
});

gulp.task('default', function(){
  run('build');
});
