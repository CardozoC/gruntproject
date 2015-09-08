module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

            concat: {   
                dist: {
                    src: [
                        'src/js/*.js', // All JS in the libs folder
                    ],
                    dest: 'dist/js/production.js',
                },
                dev: {
                    src: [
                        'src/js/*.js', // All JS in the libs folder
                    ],
                    dest: 'dist/js/development.js',
                }
            },
            uglify: {
                build: {
                    src: 'dist/js/production.js',
                    dest: 'dist/js/production.min.js'
                }
            },
            less: {
              development: {
                options: {
                  compress: true,
                  yuicompress: true,
                  optimization: 2
                },
                files: {
                  "dist/css/style.css": "src/less/style.less" // destination file and source file
                }
              }
            },
            watch: {
              styles: {
                files: ['src/less/*.less'], // which files to watch
                tasks: ['less'],
                options: {
                  nospawn: true
                }
              }
            }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type grunt into the terminal.
    grunt.registerTask('default', ['concat','uglify','less','watch']);
    grunt.registerTask('dev', ['concat:dev']);
    grunt.registerTask('ugly', ['uglify']);
    grunt.registerTask('compless', ['less']);
    grunt.registerTask('watchless', ['watch']);
};
