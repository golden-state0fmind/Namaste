require('dotenv').config();
module.exports = {
    webpack5: false,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
                // for webpack 5 use
                // { and: [/\.(js|ts)x?$/] }
            },
            use: ['@svgr/webpack'],
        });
        return config;
    },
    env: {
        REACT_APP_MY_KEY: process.env.REACT_APP_MY_KEY,
        REACT_APP_MY_AUTH_DOMAIN: process.env.REACT_APP_MY_AUTH_DOMAIN,
        REACT_APP_MY_PROJECT_ID: process.env.REACT_APP_MY_PROJECT_ID,
        REACT_APP_MY_STORAGE_BUCKET: process.env.REACT_APP_MY_STORAGE_BUCKET,
        REACT_APP_MY_MESSAGING_SENDERID: process.env.REACT_APP_MY_MESSAGING_SENDERID,
        REACT_APP_MY_APP_ID: process.env.REACT_APP_MY_APP_ID
    }
};
