var gulp    = require("gulp"),
    sass    = require("gulp-sass"),
    concat  = require("gulp-concat");

var paths = {
  scripts: ["./assets/scripts/*.js"],
  stylesheets: ["./assets/scss/**/*.scss"]
};

var javascripts = [
  "./assets/scripts/jquery.min.js",
  "./assets/scripts/base.js"
];
 
gulp.task("sass", function () {
  gulp.src("./assets/scss/all.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./assets/css"));
});

gulp.task("scripts", function() {
  gulp.src(javascripts)
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest("./assets/scripts"));
});


gulp.task("watch", function() {
  gulp.watch(paths.scripts, ["scripts"]);
  gulp.watch(paths.stylesheets, ["sass"]);
});

gulp.task("default", ["scripts", "watch"]);
gulp.task("dist", ["sass", "scripts"]);