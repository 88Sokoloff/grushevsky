var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglifyJS = require('gulp-uglify');

var spritesmith = require('gulp.spritesmith');
var browserSync = require('browser-sync');

gulp.task ('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(browserSync.stream());
});

gulp.task ('img', function() {
  return gulp.src('src/img/*')
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream());
});

gulp.task ('css', ['sprites'], function() {
  return gulp.src('src/css/*')
    .pipe(sass())
    .pipe(concatCss("main.css"))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('sprites', function () {
  var spriteData = gulp.src('src/img/icons/*').pipe(spritesmith({ //path to source images
    imgName: 'sprite.png', //name of final sprite image
    cssName: 'sprite.css', //name of final sprite style
    imgPath: 'src/img/' + 'sprite.png' //path to image relative to gulpfile.js
  }));
    spriteData.css.pipe(gulp.dest('src/css/')) //path to final sprite.css
    spriteData.img.pipe(gulp.dest('src/img/')) //path to final sprite.png
    .pipe(browserSync.stream());
});

gulp.task('scripts', function() {  
    return gulp.src('src/js/*')
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('dist/js'))
        .pipe(browserSync.stream());
});


gulp.task('server', ['img', 'css', 'scripts', 'html'], function() {
    browserSync({
        server: {
            baseDir: 'dist'
        },
        port: 8080
    });

    gulp.watch(["src/css/*"], ['css']);
    gulp.watch(["src/js/*"], ['scripts']);
    gulp.watch(["src/img/*"], ['sprites']);
    gulp.watch("src/*.html", ['html']).on('change', browserSync.reload);

});

gulp.task('default', ['server']);