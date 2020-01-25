const { dest, series, src } = require('gulp');
const babel = require ('gulp-babel');
const browserify = require ('gulp-browserify');
const concat = require('gulp-concat');
const jasmine = require('gulp-jasmine');
const JasmineConsoleReporter = require('jasmine-console-reporter');
const Server = require('karma').Server;
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');
const watch = require('gulp-watch');

const config = {
    "dest": 'src/Application.Web/_common/',
    "src": 'src/Application.UI/'
};

const buildScriptsInternal = () => {
    return src(config.src + 'js/site.js')
        .pipe(browserify())
        .pipe(sourcemaps.init())
        .pipe(babel())
        .pipe(concat('site.min.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest(config.dest + 'js/'));
};

const testScripts = () => {
    return src(config.src + '**/*.test.js')
        .pipe(jasmine({
            reporter: new JasmineConsoleReporter()
        }));
};

const dev = (done) => {
    new Server({
        configFile: __dirname + '/karma.conf.js'
    }, done).start();
};

exports.buildScripts = series(testScripts, buildScriptsInternal);
exports.testScripts = testScripts;

exports.default = dev;