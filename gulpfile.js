var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json",{declaration:true});
var sourcemaps = require('gulp-sourcemaps');
const minify = require("gulp-minify");

var paths = {   
    src: 'src',
    dist: 'dist'
};


gulp.task("default", gulp.series(
  
    () => {
        return tsProject
            .src()
            .pipe(sourcemaps.init())
            .pipe(tsProject())
            .pipe(minify({noSource: true}))
            .js           
            .pipe(gulp.dest(paths.dist));
    })
);