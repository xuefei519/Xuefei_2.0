var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass',function(){
  return gulp.src('style/scss/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('style/css'))
  .pipe(browserSync.reload({
    stream:true
  }))
});

gulp.task('watch',['browserSync','sass'],function(){
  gulp.watch('style/scss/**/*.scss',['sass'])
})

gulp.task('browserSync',function(){
  browserSync.init({
    server:{
      baseDir:'./',
      index:'index.html'
    },
  })
})
