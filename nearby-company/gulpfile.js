/*
 * @Author: ShenBao
 * @Date: 2018-07-010 16:35:57
 * @Last Modified by: ShenBao
 * @Last Modified time: 2018-07-16 21:00:40
*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-minify-css');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const gulpWatch = require('gulp-watch');

const config = {
    stylesPath: './src/styles',
    pagesPath: ['./src/styles/pages/**/*.scss'],
    outputPagesPath: './weapp/pages',
    componentsPath: ['./src/styles/components/**/*.scss'],
    outputComponentsPath: './weapp/components',
    commonStylesPath: './src/styles/styles/**/*',
    outputCommonStylesPath: './weapp/styles'
};

const sassStyleHandler = (entry, output) => {
    gulp
        .src(entry)
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssmin({ advanced: false, keepSpecialComments: '*' }))
        .pipe(rename({ extname: ".wxss" }))
        .pipe(gulp.dest(output));
};

gulp.task('style', () => {
    sassStyleHandler(config.pagesPath, config.outputPagesPath);
    sassStyleHandler(config.componentsPath, config.outputComponentsPath);
    sassStyleHandler(config.commonStylesPath, config.outputCommonStylesPath);
});

gulp.task('img', () => {
    gulp
        .src('./src/imgs/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./weapp/imgs'));

});

gulp.task('watch', ['style'], () => {
    return gulpWatch(config.stylesPath, () => {
        gulp.start('style');
    });
});

gulp.task('default', ['watch'], () => {
    console.log('all tasks start ...... ');
});
