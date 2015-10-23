/* browserify task
   ---------------
   Bundle javascripty things with browserify!

   If the watch task is running, this uses watchify instead
   of browserify for faster bundling using caching.
*/

var browserify   = require('browserify');
var watchify     = require('watchify');
var bundleLogger = require('../util/bundleLogger');
var gulp         = require('gulp');
var handleErrors = require('../util/handleErrors');
var source       = require('vinyl-source-stream');
var reactify     = require('reactify');

gulp.task('browserify', function() {
  var bundler = browserify({
    // Required watchify args
    cache: {}, packageCache: {}, fullPaths: true,
    // Specify the entry point of your app
    entries: ['./src/javascript/app.js'],
    // Add file extentions to make optional in your requires
    extensions: ['.eco',".jsx"],
    // Enable source maps!
    debug: false
  });

  var bundle = function() {
    // Log when bundling starts
    bundleLogger.start();
    
    bundler.transform(reactify);
    return bundler
      .bundle()
      // Report compile errors
      .on('error', handleErrors)
      // Use vinyl-source-stream to make the
      // stream gulp compatible. Specifiy the
      // desired output filename here.
      // .transform('reactify')
      .pipe(source('app.js'))
      // Specify the output destination
      .pipe(gulp.dest('./build/'))
      // Log when bundling completes!
      .on('end', bundleLogger.end);
  };

  if(global.isWatching) {
    bundler = watchify(bundler);

    // Rebundle with watchify on changes.
    bundler.on('update', function(){
      gulp.src(['build/*'])
    .pipe(gulp.dest('build'));
      console.log("changed");
    });

    bundler.on('update', bundle);

  }

  return bundle();
});