'use strict';

var gulp = require('gulp'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass'),
	rename = require('gulp-rename'),
	header = require('gulp-header');

var pkg = require('./package.json');

var banner = ['/**',
	' * <' + '%= pkg.name %> - <' + '%= pkg.description %>',
	' * @author <%= pkg.author %>',
	' * @version v<%= pkg.version %>',
	' * @link <%= pkg.homepage %>',
	' * @license <%= pkg.license %>',
	' */',
	''].join('\n');
/* end */

/**
 * Add the default task.
 */
gulp.task('default', function () {

	return gulp.src('scss/*.scss')
			.pipe(sass())
			.pipe(header(banner, { pkg : pkg } ))
			.pipe(gulp.dest('css'))
			.on('error', console.log);

});

gulp.task('minified', function () {

	var pkg = require('./package.json');

	var banner = ['/**',
		' * <' + '%= pkg.name %> - <' + '%= pkg.description %>',
		' * @author <%= pkg.author %>',
		' * @version v<%= pkg.version %>',
		' * @link <%= pkg.homepage %>',
		' * @license <%= pkg.license %>',
		' */',
		''].join('\n');
	/* end */

	return gulp.src('scss/*.scss')
			.pipe(sass({outputStyle: 'compressed'}))
			.pipe(header(banner, { pkg : pkg } ))
			.pipe(rename('natural-grid.min.scss'))
			.pipe(gulp.dest('css'))
			.on('error', console.log);

});

gulp.task('watch', function() {
	livereload.listen();

	var watcher = gulp.watch('scss/*.scss', ['default']);
	watcher.on('change', function (event) {
		console.log('File ' + event.path + ' was ' + event.type + ', rebuilding...');
	});
});
