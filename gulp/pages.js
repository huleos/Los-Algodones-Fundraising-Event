/**********************************************
 Templates Task
***********************************************/
var gulp      = require('gulp'),
    panini    = require('panini'),
		plumber   = require('gulp-plumber');
 
gulp.task('pages', function() {
  gulp.src('./src/pages/**/*.html')
  	.pipe(plumber())
    .pipe(panini({
      layouts: './src/layout/'
    }))
    .pipe(gulp.dest('./dist'));
});