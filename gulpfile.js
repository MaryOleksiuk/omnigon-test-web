/* File: gulpfile.js */

// grab our gulp packages
var gulp  = require('gulp'),
    gutil = require('gulp-util');

//must install gulp-less npm to make this 
var less= require('gulp-less');

//npm browser-sync 
var bs = require('browser-sync').create(); // create a browser sync instance.

// clean-css
var cleanCSS = require('gulp-clean-css');

// Minify and uglife js
var useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpIf = require('gulp-if');


//Less Task
gulp.task('less', function(){
	//less folder
	gulp.src(['app/less/main.less'])
	.pipe(less())
	.pipe(gulp.dest('dist/css')) ;
	console.log("Running Less Task");
});

// Minify CSS
gulp.task('minify-css', () => {
  return gulp.src('dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});

// Minify js
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

//Browser Sync Task
gulp.task('browser-sync', function() {
    bs.init({
        server: {
            baseDir: "dist/"
        }
    });
});

//when ever a change happens, run the task less
gulp.task('watch',['browser-sync'], function() {
    gulp.watch('app/less/*.less', ['less']).on('change', bs.reload);
    gulp.watch(['app/*.html', 'app/less/*.less', 'app/js/*.js']).on('change', bs.reload);
});


// create a default task and just log a message
gulp.task('default',['watch','less', 'minify-css', 'useref']);