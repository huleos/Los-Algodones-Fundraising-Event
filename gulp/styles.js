/**********************************************
 Styles Task
***********************************************/
var gulp            = require('gulp'),
		sass            = require('gulp-sass'),
		prefix          = require('gulp-autoprefixer'),
		sourcemaps      = require('gulp-sourcemaps'),
		plumber         = require('gulp-plumber');

gulp.task('styles', function () {
	gulp.src('./src/assets/scss/style.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass({
			includePaths: [
				'./node_modules/foundation-sites/scss'
			]
		}))
		.pipe(sass())
		.pipe(prefix({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./dist/assets/css'));
});