var gulp       = require('gulp'),
		sitemap    = require('gulp-sitemap');
 
gulp.task('sitemap', function () {
    gulp.src('./dist/**/*.html')
        .pipe(sitemap({
            siteUrl: 'http://algodonesfoundation.com',
            changefreq: 'weekly'
            // priority: 0.5,
            // lastmod: Date.now()
        }))
        .pipe(gulp.dest('./dist'));
});