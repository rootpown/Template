const gulp = require('gulp');

// Пример задачи для копирования файлов
gulp.task('copy', function () {
  return gulp.src('source')
    .pipe(gulp.dest('dist'));
});