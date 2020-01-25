const gulpConfig = {
    "src": 'src/Application.UI/'
};

module.exports = (config) => {
    config.set({
        browsers: ['Chrome'],
        files: [
            'src/Application.UI/js/site.js',
            'src/Application.UI/**/*.test.js'
        ],
        frameworks: ['browserify', 'jasmine'],
        plugins: ['karma-browserify', 'karma-chrome-launcher', 'karma-jasmine'],
        preprocessors: {
            'src/Application.UI/js/site.js': ['browserify'],
            'src/Application.UI/**/*.test.js': ['browserify']
        }
    });
};