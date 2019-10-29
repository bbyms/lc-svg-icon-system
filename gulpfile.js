var gulp = require("gulp"),
    svgSprite = require('gulp-svg-sprite');

    // SVG Config
var config = {
  mode: {
    symbol: { // symbol mode to build the SVG
      dest: 'sprite', // destination folder
      sprite: 'sprite.svg', //sprite name
      example: true // Build sample page
    }
  },
  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false // don't include the !DOCTYPE declaration
  }
};

    // create svg sprite
    gulp.task('sprite-page', function() {
      return gulp.src('assets/svg/**/*.svg')
      .pipe(svgSprite(config))
      .pipe(gulp.dest('dist/'));
    });
    
    // create shortcut to svg sprite
    gulp.task('sprite-shortcut', function() {
      return gulp.src('dist/sprite/sprite.svg')
      .pipe(gulp.dest('dist/'));
    });

    gulp.task('default', gulp.parallel('sprite-page'));
