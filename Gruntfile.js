module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                files: {
                    'src/js/index.min.js': ['src/js/index.js'],
                    'src/js/common.min.js': ['src/js/common.js']
                }
            }
        },
        concat: {
            css: {
                src: 'src/css/*.css',
                dest: 'src/css/concat.css'
            },
        },
        cssmin: {
            target: {
                src: 'src/css/concat.css',
                dest: 'src/css/concat.min.css'
            }
        },
        /*
        copy: {
            files: {
                expand: true,
                dest: 'src/js/',
                cwd: 'build/js/',
                src: '**'
            }
        },
        */
        clean: {
            min: ["src/js/*.min.js", "src/js/concat.js", "src/css/*.min.css", "src/css/concat.css"]
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['clean', 'concat', 'cssmin', 'uglify']);
};
