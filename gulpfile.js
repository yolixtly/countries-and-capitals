//grab the gulp packages
var gulp = require('gulp');
// Include Plugins 

var less = require('gulp-less');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var usemin = require('gulp-usemin');
var minifyCss = require('gulp-minify-css');
var minifyHtml = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var ngmin = require('gulp-ngmin');
var rev = require('gulp-rev'); //appends a hash value to the file names

var paths = {
  /* script.0 = 'all the .js files inside the app directory and inside all the
  other child directories(/ ** /)' 
  script.1 = ignore the .js files of the bower components directory or its child 
  directories*/
  scripts: ['app/**/*.js', '!app/bower_components/**/*.js'],
  html : [
  /* In this case:
  We are only interested in the templates located in components/folder*/
    './app/**/*.html',
    '!./app/bower_components/**/*.html',
    '!./app/index.html',
  ],
  index: './app/index.html',
  myLess: './app/assets/css/*.less',
  myCss: './app/assets/css/',
  build: './build'
};

/* Tasks */

/* $ gulp connect // is the local host, to open it in the browser, 
    default port is : 8080 */
gulp.task('connect', ['watch', 'build'], function(){
  connect.server({
    root: 'build',
    livereload: true
  });
});

/* $gulp watch // watches changes of the files with connect */

gulp.task('watch', function(){
  gulp.watch(paths.index, ['html']);
  gulp.watch(paths.myLess, ['less']);

});

/* $ gulp copy //copies the files into the build folder 
  only copy if first we have update the less into css */
gulp.task('copy', ['less', 'clean'], function(){
  gulp.src(paths.html)
    .pipe(gulp.dest(paths.build));
  gulp.src('./app/assets/images/*.{png,gif,jpg}')
    .pipe(gulp.dest('./build/assets/images'));
});

/* $ gulp clean // cleans the build file. */
gulp.task('clean', function(){
  return gulp.src(paths.build, {read : false})
    .pipe(clean());
});

/* $ gulp html // liveReload */
gulp.task('html', function() {
 gulp.src(paths.index)
  .pipe(connect.reload());
});

/* $ gulp less // compiles the less file into css */
gulp.task('less', function() {
 gulp.src(paths.myLess)
 .pipe(less()) //complies and brings back the css 
 .pipe(gulp.dest(paths.myCss))
  .pipe(connect.reload());
});

/* $ gulp usemin // Once copied into build, then minify css and js .
    usemin task depends on copy so usemin will trigger copy first and 
    then usemin will be trigger 
    usemin requires the metadata comments inside the index.html */
gulp.task('usemin', ['copy'], function(){
  gulp.src(paths.index)
    .pipe(usemin({
      css: [minifyCss()],
      js: [ ngmin(), uglify() ]
    }))
    .pipe(gulp.dest(paths.build));
});

/* $ gulp build // this is the one that triggers everything! */

gulp.task('build', ['usemin']);

/* $ gulp default // ... */
gulp.task('default', ['less', 'copy', 'usemin','watch', 'connect']);
