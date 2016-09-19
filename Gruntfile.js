module.exports = function (grunt) {
    var browsers = [{
        browserName: 'firefox',
        version: '19',
        platform: 'XP'
    }, {
        browserName: 'googlechrome',
        platform: 'XP'
    }, {
        browserName: 'googlechrome',
        platform: 'linux'
    }, {
        browserName: 'internet explorer',
        platform: 'WIN8',
        version: '10'
    }, {
        browserName: 'internet explorer',
        platform: 'VISTA',
        version: '9'
    }];

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    base: '',
                    port: 9999
                }
            }
        },

        'saucelabs-mocha': {
            all: {
                options: {
                    username: 'hanluyuzizi', // if not provided it'll default to ENV SAUCE_USERNAME (if applicable)
                    key: '6f71a326-ab81-48c5-a32f-cf8f9b4ea4bb', // if not provided it'll default to ENV SAUCE_ACCESS_KEY (if applicable)
                    urls: [
                        'http://localhost:63342/ciTestDemo/test/cow.test.html'
                    ],
                    browsers: browsers,
                    build: process.env.TRAVIS_JOB_ID,
                    testname: 'mocha tests',
                    throttled: 3,
                    sauceConfig: {
                        'video-upload-on-pass': false
                    }
                }
            }
        },
        watch: {}
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-saucelabs');

    grunt.registerTask('default', ['connect', 'saucelabs-mocha']);
};