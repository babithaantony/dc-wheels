// noinspection JSUnusedGlobalSymbols
module.exports = {
    env: {
        basePath: process.env.BASE_PATH || '',
    },
    basePath: process.env.BASE_PATH || '',
    i18n: {
        locales: ['en', 'ru', 'ar'],
        defaultLocale: 'en',
    },
    distDir: "_next",
    generateBuildId: async () => {
        if (process.env.BUILD_ID) {
        return process.env.BUILD_ID;
        } else {
        return `${new Date().getTime()}`;
        }
    },
};
