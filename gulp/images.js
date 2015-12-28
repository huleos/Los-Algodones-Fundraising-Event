/**********************************************
 Images Task
***********************************************/
var gulp            = require('gulp'),
		imagemin        = require('gulp-imagemin'),
		cache           = require('gulp-cache'),
		plumber         = require('gulp-plumber');

gulp.task('images', function() {
	return gulp.src('./src/assets/img/**/*')
		.pipe(plumber())
	  .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
	  .pipe(gulp.dest('./dist/assets/img'));
});