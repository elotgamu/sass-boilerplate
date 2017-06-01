// generated on 2016-12-24 using generator-webapp 2.3.2
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const del = require('del');
const wiredep = require('wiredep').stream;
const runSequence = require('run-sequence');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

var dev = true;

gulp.task('styles', () => {
  // return gulp.src('app/styles/*.scss')
  return gulp.src('stylesheets/**/*.scss')
    .pipe($.plumber())
    .pipe($.sourcemaps.init())
    .pipe($.sass.sync({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['.']
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe($.sourcemaps.write())
    //.pipe(gulp.dest('.tmp/styles'))
    .pipe(gulp.dest('css/'))
    .pipe(reload({stream: true}));
});

/* Reload task */
gulp.task('bs-reload', function () {
    browserSync.reload();
});

/* Prepare Browser-sync for localhost */
gulp.task('browser-sync', function() {
    browserSync.init(['css/*.css'], {
        /*
        I like to use a vhost, WAMP guide: https://www.kristengrote.com/blog/articles/how-to-set-up-virtual-hosts-using-wamp, XAMP guide: http://sawmac.com/xampp/virtualhosts/
        */
        // proxy: 'your_dev_site.url'
        /* For a static server you would use this: */
        /*
        */
        server: {
            baseDir: './'
        }

    });
});


/* Watch scss, js and html files, doing different things with each. */
gulp.task('serve', ['styles', 'browser-sync'], function () {
    /* Watch scss, run the sass task on change. */
    gulp.watch(['stylesheets/*.scss', 'stylesheets/**/*.scss'], ['styles'])
    /* Watch app.js file, run the scripts task on change. */
    /* gulp.watch(['js/app.js'], ['scripts']) */
    /* Watch .html files, run the bs-reload task on change. */
    gulp.watch(['*.html'], ['bs-reload']);
});
