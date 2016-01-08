/**********************************************
 Build Task
***********************************************/
var gulp      = require('gulp'),
    del       = require('del'),
    sequence  = require('run-sequence');

gulp.task('clean', function(done) {
  return del([
  	'dist/**/*'
  	], done);
});

// copy contact form
gulp.task('cp-dependencies', function(){
	gulp.src('./src/*.*')
	.pipe(gulp.dest('./dist'));
});

gulp.task('build', function(done) {
  sequence('clean', ['pages', 'styles', 'scripts', 'images'], 'cp-dependencies', done);
});

gulp.task('default', ['build', 'server'], function() {
	gulp.watch(['./src/**/*.html'], ['pages']);
	gulp.watch('./src/assets/scss/**/*.scss', ['styles']);
	gulp.watch(['./src/assets/js/*.js'], ['scripts']);
	gulp.watch('./scr/assets/img/*', ['images']);
});