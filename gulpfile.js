//grab the gulp packages
var gulp = require('gulp');

// Include Plugins 
var gutil = require('gulp-util');
var less = require('gulp-less');
var connect = require('gulp-connect');

//Random task 

gulp.task('default', ['less', 'watch', 'connect'], function() {
	return gutil.log('This is the first Task by GULP!');
});

//Task to compile less into css
gulp.task('less', function() {
	gulp.src('./app/assets/css/*.less')
	.pipe(less()) //complies and brings back the css 
	.pipe(gulp.dest('./app/assets/css/'))
	.pipe(connect.reload());
});

//Task to watch html changes
gulp.task('html', function() {
	gulp.src(
		'.app/index.html'
		)
	.pipe(connect.reload());
});

// Task to LiveReload with connect
gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});
 
//Watch Task 
gulp.task('watch', function(){ 
	//Watch Less
	gulp.watch('./app/assets/css/*less', ['less']);

	//Watch html
	gulp.watch('./app/index.html', ['html']); //if html change restart the server 
});
