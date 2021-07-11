var gulp = require('gulp');
var uglify = require('gulp-uglify');
var minifyCSS = require('gulp-minify-css');

gulp.task('uglify', function(){
    return gulp.src('javascript/endpoints.js')
        .pipe(uglify())
        .pipe(gulp.dest('minify'))    
});

gulp.task('minify-css', function(){
    return gulp.src('css/style.css')
        .pipe(minifyCSS()) 
        .pipe(gulp.dest('minify'))   
});