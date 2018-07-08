const gulp = require( 'gulp' );
const paths = require( './gulp/paths' );
require( 'require-dir' )( './gulp/tasks' );

gulp.task( 'html', () => {
  return gulp.src( paths.srcHtml )
    .pipe( gulp.dest( paths.destFolder ));
});

const commonTasks = ['clean', 'html', 'browserify', 'sass', 'css-minify'];
const taskLogger = taskName => console.log( `gulp ${taskName} task running` );

gulp.task( 'build', commonTasks, taskLogger( 'build' ));
gulp.task( 'dev', [...commonTasks, 'serve', 'watch'], taskLogger( 'dev' ));
gulp.task( 'start', ['build', 'serve'], taskLogger( 'start' ));
