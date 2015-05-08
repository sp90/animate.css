var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
    gulp.src('./example/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./example'));
});