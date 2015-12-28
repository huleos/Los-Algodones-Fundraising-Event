/**********************************************
 Build Task
***********************************************/
var gulp      = require('gulp'),
		cache     = require('gulp-cache'),
    del       = require('rimraf'),
    sequence  = require('run-sequence');

gulp.task('clean', function(done) {
	return cache.clearAll(done)
  del('./dist', done);
});

gulp.task('build', function(done) {
  sequence('clean', ['pages', 'styles', 'scripts', 'images'], done);
});

gulp.task('default', ['build', 'server'], function() {
	gulp.watch(['./src/**/*.html'], ['pages']);
	gulp.watch('./src/assets/scss/**/*.scss', ['styles']);
	gulp.watch(['./src/assets/js/*.js'], ['scripts']);
	gulp.watch('./scr/assets/img/*', ['images']);
});