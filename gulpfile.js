
var gulp  = require('gulp');
var less  = require('gulp-less');
var babel = require('gulp-babel');
var watch = require('gulp-watch');

var PATHS = {	
	less: 'src/less/*.less',
	src : 'src/js/**/*.js',
	css : 'public/css',
	js  : 'public/js'
};

gulp.task('less', function() {	
	return gulp.src(PATHS.less)
		.pipe(less())
		.pipe(gulp.dest(PATHS.css));
});

gulp.task('babel', function() {	
	return gulp.src(PATHS.src)		
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest(PATHS.js));
});

gulp.task('watch', function() {
	watch(PATHS.src, {verbose: true})
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest(PATHS.js));
});

gulp.task('default', ['less', 'babel', 'watch']);