const GRID_URL = process.env.GRID_URL;
const BASE_URL = process.env.BASE_URL || 'https://isqua.github.io/hermione-firefox-cursor/test/';
const FILE_BASE_URL = 'https://github.com/isqua/hermione-firefox-cursor/blob/main/'
const REPORT_PATH = process.env.REPORT_PATH || 'report';

module.exports = {
    retry: 0,

    gridUrl: GRID_URL,
    baseUrl: BASE_URL,

    sets: {
        desktop: {
            files: [
                'tests/*.hermione.js'
            ],
            browsers: [
                'firefox'
            ]
        }
    },

    browsers: {
        firefox: {
            desiredCapabilities: {
                browserName: 'firefox',
                browserVersion: '97.0',
            },

            windowSize: {
                width: 400,
                height: 400
            }
        }
    },

    plugins: {
        'html-reporter/hermione': {
            enabled: true,
            defaultView: 'all',
            path: REPORT_PATH,
            metaInfoBaseUrls: {
                file: FILE_BASE_URL,
            }
        },
        'hermione-test-repeater': {
            enabled: true,
            repeat: 0,
        },
    }
};
