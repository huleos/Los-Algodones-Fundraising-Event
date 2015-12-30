/**********************************************
 Build Task
***********************************************/
var gulp      = require('gulp'),
    del       = require('rimraf'),
    sequence  = require('run-sequence');

gulp.task('clean', function(done) {
  del('./dist', done);
});

// copy contact form
gulp.task('copy-form', function(){
	gulp.src('./src/*.php')
	.pipe(gulp.dest('./dist'));
});

gulp.task('build', function(done) {
  sequence('clean', ['pages', 'styles', 'scripts', 'images'], 'copy-form', done);
});

gulp.task('default', ['build', 'server'], function() {
	gulp.watch(['./src/**/*.html'], ['pages']);
	gulp.watch('./src/assets/scss/**/*.scss', ['styles']);
	gulp.watch(['./src/assets/js/*.js'], ['scripts']);
	gulp.watch('./scr/assets/img/*', ['images']);
});