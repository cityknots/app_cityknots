var gulp = require('gulp');

gulp.task('js-libs', function() {
  return gulp.src( 'src/javascript/libs/**' )
  .pipe(gulp.dest('build/libs/'));
});