var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');

var config = {
  source: './src/',
  dist: './public/'
};

var paths = {
  assets: "assets/",
  html: "**/*.html",
  img: "img/**",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",

  utils: "utils/**",
  mainJS: "js/**/*.js",
  js:"js/*.js",
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  img: config.source + paths.assets + paths.img,
  js: config.source + paths.assets +  paths.js,

  sass: config.source + paths.assets + paths.sass,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootJS: config.source + paths.assets + paths.mainJS
};

gulp.task('html', ()=>{
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task("sass", function () {
  gulp.src(sources.rootSass)
      .pipe(sass({
        outputStyle: "expanded"
      }).on("error", sass.logError))
      .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("js", function () {
  gulp.src(sources.rootJS)
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest(config.dist + paths.assets + "js"));
});

gulp.task('img', ()=> {
  gulp.src(sources.img)
      .pipe(gulp.dest(config.dist + paths.assets + "img"));
});

//tareas watch
gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("js-watch", ["js"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {

  browserSync.reload();
  done();
});

gulp.task("img-watch", ["img"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("serve", function () {
/* browserSync.init({
    server: {
      baseDir: config.dist
    }
  }); */
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.sass, ["sass-watch"]);
  gulp.watch(sources.rootJS, ["js-watch"]);
  gulp.watch(sources.img, ["img-watch"]);
});